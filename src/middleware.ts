import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirects requests for "/" to "/help"
 *
 * @param req - The incoming request
 * @returns A redirect response to "/help" if the request is for "/",
 *   otherwise allows the request to proceed normally
 */
export function middleware(req: NextRequest) {
  // Check if the request is for "/"
  if (req.nextUrl.pathname === config.matcher) {
    return NextResponse.redirect(new URL("/help", req.url));
  }
  
  return NextResponse.next(); // Allow other routes to proceed normally
}

// Define the matcher to apply middleware only for specific paths
export const config = {
  matcher: "/",
};
