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

  const localeCookie = request.cookies.get("locale")

  if (localeCookie?.value && locales.includes(localeCookie.value)) {
    return
  }

  const locale = getLocale(request);

  const response = NextResponse.redirect(request.nextUrl)
  response.cookies.set("locale", locale, {maxAge: 60 *60 * 2})
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};