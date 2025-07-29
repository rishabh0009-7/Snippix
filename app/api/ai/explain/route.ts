import { auth } from "@clerk/nextjs/server";
import { createErrorResponse, createResponse } from "@/src/lib/utils/helper";
import connectToDatabase from "@/src/lib/mongodb";
import User from "@/src/lib/models/User";
import { explainCode } from "@/src/lib/utils/ai";
import Snippet from "@/src/lib/models/Snippet";

export  async function POST(request: NextRequest){
  try {
    const { userId } = auth();
    if (!userId) {
      return createErrorResponse('Please login to use AI features', 401);
    }

    await connectToDatabase();
    
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    const {snippetId , code , language } = await request.json

    if(!code || !language ){
      return createErrorResponse('Code and language are required', 400);

    }


    const explanation = await explainCode(code,language) 

    if(snippetId){
      await Snippet.findOneAndUpdate(
        {._id: snippetId , userId : user._id },
        {aiExplanation : explanation}

      )
      console.log(' Explanation saved to snippet');
    }

    return createResponse({explanation}

    )






  


    
  } catch (error) {
    console.error('❌ AI explain error:', error);
    return createErrorResponse('Failed to generate explanation. Please try again.', 500);
    
  }
}