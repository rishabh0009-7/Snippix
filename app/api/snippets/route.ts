import { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import connectToDatabase from '@/src/lib/mongodb';
import Snippet from '@/src/lib/models/Snippet';
import User from '@/src/lib/models/User';
import { createSnippetSchema } from '@/src/lib/validations/snippet';
import { createResponse , createErrorResponse } from '@/src/lib/utils/helper';
import Snippets from '@/app/create-snippet/page';
import { error } from 'console';
// fetch all snippet for user 
export async function GET (request :NextRequest){
    try {

        // check if user i slogged in 

        const { userId } = auth()
        if(!userId){
            return createErrorResponse('Please login to view snippets' , 401 )
        }
// connect to database 
        await connectToDatabase()

        // find user in our database
        const user = await User.find({clerkId :userId})
        if(!user ){
            return createResponse("user not found ", 404)
        }
        

    // get query paramters for filtering/pagination 
        const {searchParams }= new URL(request.url)
        const page  = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const category = searchParams.get('category')
        const language = searchParams.get ('language ')
        const tag = searchParams.get ('tag')
        const search= searchParams.get ('search')
        const favorites = searchParams.get ('favourites') === "true"


        // Build search query 
        let query:any  = {userID  :user._id }
        if(category ) query.category = category ;
        if(language)query.language = language;
        if(tag)query.tag = {$in :[tag]};
        if(favorites)query.isfavourite = true 
        if(search) {
            query.$text = {$search :search }
        }


        const skip = (page-1)*limit 

// fetch snippets with pagination 
        const snippet = await Snippet.find(query)
        .populate('category', 'name color') //include category info 
        .sort({createdAt :-1}) //newest first 
        .skip(skip)
        .limit(limit)   // means limit mai ayaa ex- 100 hai to limit (10 ) means 10 ayaa sirf 
        .lean()  //convert to plain js object 

const total = await countDocuments(query)
       


        return createResponse({
            Snippets,
            pagination:{
                page,
                limit,
                total,
                pages:Math.ceil(total / limit)
            }

        })
} catch (error) {
    console.error("GET snippet error ", error)
    return createErrorResponse('failed to fetch snippets ')
        
    }

}


// create new snippet 

export async function POST(request:NextRequest) {
try{

    // check auth 
    const {userID} = auth ()
    if(!userID) {
        return createErrorResponse("please login to create snippet " , 401 )
        
        
    }
    
    await connectToDatabase()
    
    
    const user  = await User.find({clerkId :userID})
    if(!user){
        return createErrorResponse('User not found', 404);
    }
    
    // get and validate request body 
    
    const body = await request.json()
    
    const validateData = createSnippetSchema.parse(body)
    
    
    // create new snippet 
    const snippet = new Snippet({
        ...validateData,
        userId :user._id,
        tags:validateData.tags?.map(tage=>tag.toLowercase())|| []
    })
    
    
    await snippet.save()
    await snippet.populate('category', 'name color')
    
    return createResponse({snippet}, 201)
    
}catch (error) {
    console.error(' POST snippet error:', error);
    if (error.name === 'ZodError') {
      return createErrorResponse('Invalid input data', 400);
    }
    return createErrorResponse('Failed to create snippet', 500);
  }
}
    







    
