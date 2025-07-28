import User from "@/src/lib/models/User"
import connectToDatabase from "@/src/lib/mongodb"
import { createErrorResponse, createResponse } from "@/src/lib/utils/helper"
import { auth } from "@clerk/nextjs/server"
import Snippet from "@/src/lib/models/Snippet"
import { NextRequest } from "next/server"
import { updateSnippetSchema } from "@/src/lib/validations/snippet"




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
        userId: user._id,
      }).populate('category', 'name color');
  
      if (!snippet) {
        return createErrorResponse('Snippet not found', 404);
      }
  
      // Increment view count
      snippet.views += 1;
      await snippet.save();
  
      console.log('Snippet fetched and view count updated');
  
      return createResponse({ snippet });
    } catch (error) {
      console.error('GET snippet error:', error);
      return createErrorResponse('Failed to fetch snippet', 500);
    }
  }
  
  // PUT - Update snippet
  export async function PUT(
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
  
      if (validatedData.tags) {
        validatedData.tags = validatedData.tags.map(tag => tag.toLowerCase());
      }
  
      const snippet = await Snippet.findOneAndUpdate(
        { _id: params.id, userId: user._id },
        validatedData,
        { new: true } // Return updated document
      ).populate('category', 'name color');
  
      if (!snippet) {
        return createErrorResponse('Snippet not found', 404);
      }
  
      console.log('✅ Snippet updated successfully');
  
      return createResponse({ snippet });
    } catch (error) {
      console.error(' PUT snippet error:', error);
      if (error.name === 'ZodError') {
        return createErrorResponse('Invalid input data', 400);
      }
      return createErrorResponse('Failed to update snippet', 500);
    }
  }


//   Delete snippet 

export const async function DELETE(request: NextRequest,
    { params }: { params: { id: string } }{


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
      userId: user._id,

    })

    if(!snippet){
        return createErrorResponse('Snippet not found', 404);

    }

    return createResponse({ message: 'Snippet deleted successfully' });


        
        
    } catch (error) {
        console.error(' DELETE snippet error:', error);
    return createErrorResponse('Failed to delete snippet', 500);
        
    }

})