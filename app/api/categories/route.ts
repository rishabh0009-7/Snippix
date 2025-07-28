import { auth } from "@clerk/nextjs/server";
import { createErrorResponse } from "@/src/lib/utils/helper";
import { createResponse } from "@/src/lib/utils/helper";
import connectToDatabase from "@/src/lib/mongodb";
import User from "@/src/lib/models/User";
import Category from "@/src/lib/models/Category";
import { createCategorySchema } from "@/src/lib/validations/snippet";


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

const body = await request.json()
        const validateData = createCategorySchema.parse(body)

        const existingcategory = await Category.find({userrId: user._id,
            name :validateData.name



        })
        if(existingcategory){
            return createErrorResponse('Category with this name already exists', 409);

        }

        const category = new Category({
            ...validateData,
            userId :user._id

        })

        await category.save()


    return createResponse({ category }, 201);

} catch (error) {
    console.error('POST category error:', error);
    if (error.name === 'ZodError') {
      return createErrorResponse('Invalid input data', 400);
    }
    return createErrorResponse('Failed to create category', 500);
  }
        
    }



    