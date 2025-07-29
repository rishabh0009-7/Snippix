import { NextRequest } from 'next/server';
import { auth } from "@clerk/nextjs/server";
import { createErrorResponse, createResponse } from "@/src/lib/utils/helper";
import connectToDatabase from "@/src/lib/mongodb";
import User from "@/src/lib/models/User";
import Category from "@/src/lib/models/Category";
import { createCategorySchema } from "@/src/lib/validations/snippet";

// GET - Fetch all categories for user
export async function GET() {
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

    const categories = await Category.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .lean();

    return createResponse({ categories });

  } catch (error) {
    console.error('GET categories error:', error);
    return createErrorResponse('Failed to fetch categories', 500);
  }
}

// POST - Create new category
export async function POST(request: NextRequest) {
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
    const validatedData = createCategorySchema.parse(body);

    const existingCategory = await Category.findOne({
      userId: user._id,
      name: validatedData.name
    });

    if (existingCategory) {
      return createErrorResponse('Category with this name already exists', 409);
    }

    const category = new Category({
      ...validatedData,
      userId: user._id
    });

    await category.save();

    return createResponse({ category }, 201);

  } catch (error) {
    console.error('POST category error:', error);
    if (error.name === 'ZodError') {
      return createErrorResponse('Invalid input data', 400);
    }
    return createErrorResponse('Failed to create category', 500);
  }
}