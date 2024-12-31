import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to protect routes based on authentication status.
 *
 * Logic:
 * - Redirect authenticated users away from `/login` and `/register` to `/dashboard`.
 * - Redirect unauthenticated users from `/dashboard` to `/login`.
 *
 * Assumes an `auth-token` cookie is used for authentication.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse} - The response with redirection or continuation logic.
 */
export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken"); // Replace 'auth-token' with your actual cookie name
  const url = req.nextUrl.clone();

  console

  // Redirect authenticated users away from login and register pages
  if (token && (url.pathname === "/signin" || url.pathname === "/register")) {
    url.pathname = "/dashboard"; // Redirect path for authenticated users
    return NextResponse.redirect(url);
  }

  // Redirect unauthenticated users away from protected routes
  if (!token && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/signin"; // Redirect path for unauthenticated users
    return NextResponse.redirect(url);
  }

  // Allow the request to continue
  return NextResponse.next();
}

/**
 * Config for route matching.
 * Applies middleware only to specific routes.
 */
export const config = {
  matcher: ["/signin", "/register", "/dashboard/:path*"], // Define public and protected routes
};
