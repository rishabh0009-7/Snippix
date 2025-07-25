import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/"], // add other public routes if needed
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // applies Clerk to all routes
};
