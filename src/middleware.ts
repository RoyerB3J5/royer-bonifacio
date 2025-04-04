import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"];

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return locales[0];
  const acceptedLocales = acceptLanguage
    .split(",")
    .map((lang: string) => lang.split(";")[0].trim());
  for (const locale of acceptedLocales) {
    if (locales.includes(locale)) {
      return locale;
    }
  }

  return locales[0];
}

export async function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
  const localeCookie = request.cookies.get("locale");

  if (
    pathname.startsWith("/_next/") ||
    pathname.includes(".") // Archivos como .js, .css, etc.
  ) {
    return NextResponse.next();
  }

  // Redirección solo para la raíz
  if (pathname === "/") {
    const locale = localeCookie?.value || getLocale(request);
    const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
    response.cookies.set("locale", locale, { maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};