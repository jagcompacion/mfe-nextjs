import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEVICE_APP_URL = process.env.DEVICE_APP_URL || "http://localhost:3001";

export async function middleware(request: NextRequest) {
  try {
    await fetch(`${DEVICE_APP_URL}/device`, { method: "HEAD" });
    // Device app is running, rewrite to it
    const url = new URL(request.nextUrl.pathname, DEVICE_APP_URL);
    url.search = request.nextUrl.search;
    return NextResponse.rewrite(url);
  } catch {
    // Device app is not running, redirect to fallback
    return NextResponse.redirect(new URL("/device-unavailable", request.url));
  }
}

export const config = {
  matcher: "/device/:path*",
};
