
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default clerkMiddleware();
 
// Define more public routes
const isPublicRoute = createRouteMatcher(['/', '/about', '/contact']);

// Update config to exclude these public routes from protection
export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // Match all non-static Next.js routes
    '/api(.*)',                    // Protect API routes
    '/trpc(.*)',                   // Protect tRPC routes
    '/about',                      // Exclude /about from protection
    '/contact',                    // Exclude /contact from protection
  ],
};
