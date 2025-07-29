import { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import connectToDatabase from '@/src/lib/mongodb';
import Snippet from '@/src/lib/models/Snippet';
import User from '@/src/lib/models/User';
import { createSnippetSchema } from '@/src/lib/validations/snippet';
import { createResponse, createErrorResponse } from '@/src/lib/utils/helper';

// GET - Fetch all snippets for user
export async function GET(request: NextRequest) {
  try {
    const { userId } = auth();
    if (!userId) {
      return createErrorResponse('Please login to view snippets', 401);
    }

    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return createErrorResponse("User not found", 404);
    }

    // Get query parameters for filtering/pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const language = searchParams.get('language');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const favorites = searchParams.get('favorites') === "true";

    // Build search query
    let query: any = { userId: user._id };
    if (category) query.category = category;
    if (language) query.language = language;
    if (tag) query.tags = { $in: [tag] };
    if (favorites) query.isFavorite = true;
    if (search) {
      query.$text = { $search: search };
    }

    const skip = (page - 1) * limit;

    // Fetch snippets with pagination
    const snippets = await Snippet.find(query)
      .populate('category', 'name color')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Snippet.countDocuments(query);

    return createResponse({
      snippets,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error("GET snippets error:", error);
    return createErrorResponse('Failed to fetch snippets', 500);
  }
}

// POST - Create new snippet
export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    if (!userId) {
      return createErrorResponse("Please login to create snippet", 401);
    }

    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    // Get and validate request body
    const body = await request.json();
    const validatedData = createSnippetSchema.parse(body);

    // Create new snippet
    const snippet = new Snippet({
      ...validatedData,
      userId: user._id,
      tags: validatedData.tags?.map(tag => tag.toLowerCase()) || []
    });

    await snippet.save();
    await snippet.populate('category', 'name color');

    return createResponse({ snippet }, 201);

  } catch (error) {
    console.error('POST snippet error:', error);
    if (error.name === 'ZodError') {
      return createErrorResponse('Invalid input data', 400);
    }
    return createErrorResponse('Failed to create snippet', 500);
  }
}