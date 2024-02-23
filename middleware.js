import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (
      req.nextauth.token?.role !== "admin" &&
      req.nextUrl.pathname.startsWith("/admin")
    ) {
      return NextResponse.rewrite(new URL("/login", req.url));
    }
    if (
      !req.nextauth.token?.accessToken &&
      req.nextUrl.pathname.startsWith("/profile")
    ) {
      return NextResponse.rewrite(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = { matcher: ["/admin/:path*", "/profile/:path*"] };
