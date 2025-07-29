import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server"
import { createErrorResponse } from "@/src/lib/utils/helper";
import connectToDatabase from "@/src/lib/mongodb";
import User from "@/src/lib/models/User";
export async GET(request :NextRequest){

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


        const  {searchParams} = new URL(request.url)
        const query  = searchParams.get('query')
        const language = searchParams.get('language')
        const category = searchParams.get('category ') 

        if(!query ){
            return createErrorResponse('Search query is required', 400);
        } 

        let searchQuery :any = {
            userId : user._id 
            $text:{$search :query}

        }


        if(language) searchQuery.language = language 
        if(category) searchQuery.category = category 

        const snippets = await Snippet.find(searchQuery)
        .populate('category', 'name color')
        .sort({ score: { $meta: 'textScore' } })
        .limit(20)
      .lean();

      return createResponse({ snippets, query });

        
        

    } catch (error) {
        console.error('❌ Search error:', error);
    return createErrorResponse('Search failed', 500);
        
    }

}