import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  // have the matcher match every path except the maintenance page
  // this is to prevent an infinite loop
  matcher: "(?!/coming-soon)",
};

export async function middleware(req: NextRequest) {
  // Check Edge Config to see if the maintenance page should be shown
  const isInMaintenanceMode = await get("isInMaintenanceMode");

  // If in maintenance mode, point the url pathname to the maintenance page
  if (isInMaintenanceMode) {
    req.nextUrl.pathname = `/coming-soon`;

    // Rewrite to the url
    return NextResponse.rewrite(req.nextUrl);
  }
}
