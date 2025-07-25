import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Extend global type to cache mongoose connection
declare global {
  // Prevent type conflicts in hot-reloading (Next.js dev mode)
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Use global cache (in dev mode)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
