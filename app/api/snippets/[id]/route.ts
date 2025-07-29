import { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import connectToDatabase from '@/src/lib/mongodb';
import Snippet from '@/src/lib/models/Snippet';
import User from '@/src/lib/models/User';
import { updateSnippetSchema } from '@/src/lib/validations/snippet';
import { createResponse, createErrorResponse } from '@/src/lib/utils/helper';

// GET - Fetch single snippet
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return createErrorResponse('Unauthorized', 401);
    }

    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    const snippet = await Snippet.findOne({
      _id: params.id,
      userId: user._id
    }).populate('category', 'name color');

    if (!snippet) {
      return createErrorResponse('Snippet not found', 404);
    }

    // Increment view count
    await Snippet.findByIdAndUpdate(params.id, { $inc: { views: 1 } });

    return createResponse({ snippet });

  } catch (error) {
    console.error('GET snippet error:', error);
    return createErrorResponse('Failed to fetch snippet', 500);
  }
}

// PATCH - Update snippet
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return createErrorResponse('Unauthorized', 401);
    }

    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    const body = await request.json();
    const validatedData = updateSnippetSchema.parse(body);

    // Process tags if provided
    if (validatedData.tags) {
      validatedData.tags = validatedData.tags.map(tag => tag.toLowerCase());
    }

    const snippet = await Snippet.findOneAndUpdate(
      { _id: params.id, userId: user._id },
      validatedData,
      { new: true }
    ).populate('category', 'name color');

    if (!snippet) {
      return createErrorResponse('Snippet not found', 404);
    }

    return createResponse({ snippet });

  } catch (error) {
    console.error('PATCH snippet error:', error);
    if (error.name === 'ZodError') {
      return createErrorResponse('Invalid input data', 400);
    }
    return createErrorResponse('Failed to update snippet', 500);
  }
}

// DELETE - Delete snippet
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return createErrorResponse('Unauthorized', 401);
    }

    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    const snippet = await Snippet.findOneAndDelete({
      _id: params.id,
      userId: user._id
    });

    if (!snippet) {
      return createErrorResponse('Snippet not found', 404);
    }

    return createResponse({ message: 'Snippet deleted successfully' });

  } catch (error) {
    console.error('DELETE snippet error:', error);
    return createErrorResponse('Failed to delete snippet', 500);
  }
}