import Snippet from "@/src/lib/models/Snippet";
import connectToDatabase from "@/src/lib/mongodb";
import { createErrorResponse } from "@/src/lib/utils/helper";
import { auth } from "@clerk/nextjs/server";
import { connect } from "http2";
import { NextRequest } from "next/server";
import { createResponse } from "@/src/lib/utils/helper";

export async function GET(request:NextRequest){
    try {
        const {userId }=  auth()
        if(!userId){
            return createErrorResponse('Unauthorized', 401);
        }

        await connectToDatabase()
        const user = await User.findOne({ clerkId: userId });
        if (!user) {
          return createErrorResponse('User not found', 404);
        }

        const tags = await Snippet.aggregate([
            { $match: { userId: user._id } },
            { $group: { _id: '$language', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },

        ])

        return createResponse({
            tags:tags.map(tag=>({
                name: tag._id,
        count: tag.count

            }))
        })


    




        
    } catch (error) {
        console.error('❌ GET tags error:', error);
    return createErrorResponse('Failed to fetch tags', 500);
        
    }
}