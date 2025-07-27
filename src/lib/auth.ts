import { auth } from '@clerk/nextjs/server';
import User from './models/User';
import connectToDatabase from './mongodb';

export async function createOrUpdateUser(clerkUser: any) {
  await connectToDatabase();
  
  try {
    const user = await User.findOneAndUpdate(
      { clerkId: clerkUser.id },
      {
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        username: clerkUser.username,
        avatar: clerkUser.imageUrl,
      },
      { upsert: true, new: true }
    );
    
    return user;
  } catch (error) {
    console.error('Error creating/updating user:', error);
    throw error;
  }
}

export async function getCurrentUserFromDB() {
  const { userId } = auth();
  if (!userId) return null;
  
  await connectToDatabase();
  return await User.findOne({ clerkId: userId });
}