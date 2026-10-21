import { NextRequest, NextResponse } from "next/server";

const CANONICAL_ORIGIN = "https://accountspayablemanager.com";
const PRODUCTION_HOSTS = new Set([
  "accountspayablemanager.com",
  "www.accountspayablemanager.com",
]);

function forwardedScheme(request: NextRequest): string {
  const visitor = request.headers.get("cf-visitor");
  if (visitor) {
    try {
      const scheme = JSON.parse(visitor)?.scheme;
      if (scheme === "http" || scheme === "https") return scheme;
    } catch {
      // Fall through to the standard proxy header when edge metadata is malformed.
    }
  }

  const forwarded = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase();
  if (forwarded === "http" || forwarded === "https") return forwarded;

  return request.nextUrl.protocol.replace(":", "");
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || request.nextUrl.hostname)
    .split(":")[0]
    .toLowerCase();

  if (!PRODUCTION_HOSTS.has(host)) return NextResponse.next();

  if (host !== "accountspayablemanager.com" || forwardedScheme(request) !== "https") {
    return NextResponse.redirect(
      new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, CANONICAL_ORIGIN),
      308,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
