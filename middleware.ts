import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    // "/((?!api|_next/static|favicon.ico|public|coming-soon).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const isInMaintenanceMode = await get("isInMaintenanceMode");

  if (isInMaintenanceMode) {
    req.nextUrl.pathname = `/coming-soon`;
    return NextResponse.rewrite(req.nextUrl);
  }
}
