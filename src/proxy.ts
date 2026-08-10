import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const defaultLocale = "en";
export const locales = ["en", "ar"];

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // We could do path-based routing, but for this simple setup we'll use cookies
  const cookieLocale = request.cookies.get("locale")?.value;

  if (!cookieLocale || !locales.includes(cookieLocale)) {
    const response = NextResponse.next();
    response.cookies.set("locale", defaultLocale);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
