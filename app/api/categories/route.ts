import { auth } from "@clerk/nextjs/server";
import { createErrorResponse } from "@/src/lib/utils/helper";
import { connect } from "http2";
import connectToDatabase from "@/src/lib/mongodb";
import User from "@/src/lib/models/User";
import Category from "@/src/lib/models/Category";
export const async function GET(){

    try {

        const{userID} = auth()

        if(!userId){
            return createErrorResponse('unauthorized ', 404)
        }
        await  connectToDatabase()

        const user = await User.findOne({clerkId :userID})

        if(!user){
            return createErrorResponse('user not found', 404)
        }

        const category = await Category.find({userrId: user._id})

        







        
    } catch (error) {
        
    }


}
    