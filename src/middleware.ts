import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Check for cookie
    const cookie = cookies().get("Authorization");
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Validate it
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const jwt = cookie.value;

    try {
      const { payload } = await jose.jwtVerify(jwt, secret, {});
    } catch (err) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    const cookie = cookies().get("Authorization");

    if (cookie) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const jwt = cookie.value;

      try {
        const { payload } = await jose.jwtVerify(jwt, secret, {});
        return NextResponse.redirect(new URL("/dashboard", request.url));
      } catch (err) {}
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
