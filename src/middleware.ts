import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const lower = url.pathname.toLowerCase();
  const strip = lower !== "/" ? lower.replace(/\/$/, "") : lower;

  if (url.pathname !== strip) {
    url.pathname = strip;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};
