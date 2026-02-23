import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const WEBAPP_URL = process.env.WEBAPP_URL || "http://localhost:3001";

export async function middleware(request: NextRequest) {
  try {
    await fetch(`${WEBAPP_URL}/webapp`, { method: "HEAD" });
    // Web app is running, rewrite to it
    const url = new URL(request.nextUrl.pathname, WEBAPP_URL);
    url.search = request.nextUrl.search;
    return NextResponse.rewrite(url);
  } catch {
    // Web app is not running, redirect to fallback
    return NextResponse.redirect(new URL("/webapp-unavailable", request.url));
  }
}

export const config = {
  matcher: "/webapp/:path*",
};
