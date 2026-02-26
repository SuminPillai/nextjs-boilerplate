import { NextRequest, NextResponse } from "next/server";

export const locales = ["en", "ja", "ko", "fr"];
export const defaultLocale = "en";

function getLocale(request: NextRequest): string {
    // Detect locale from Vercel Geo-IP header
    const country = request.headers.get('x-vercel-ip-country');
    if (country === 'FR') return 'fr';
    if (country === 'JP') return 'ja';
    if (country === 'KR') return 'ko';

    // Fallback to default
    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip non-page requests (API, assets, etc.)
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/img") ||
        pathname.includes(".") // files with extensions
    ) {
        return NextResponse.next();
    }

    // Skip general API routes but PROTECT /api/admin
    if (pathname.startsWith("/api") && !pathname.startsWith("/api/admin")) {
        return NextResponse.next();
    }

    // Admin Route Protection (Don't localize admin pages)
    if (pathname.startsWith("/admin")) {
        if (pathname !== "/admin/login") {
            const session = request.cookies.get("admin_session");
            if (!session) {
                return NextResponse.redirect(new URL("/admin/login", request.url));
            }
        }
        return NextResponse.next();
    }

    const segments = pathname.split('/');
    const firstSegment = segments[1]?.toLowerCase();

    // Handle legacy path prefix redirects (case-insensitive)
    if (firstSegment === "jp") {
        segments[1] = "ja";
        return NextResponse.redirect(new URL(segments.join('/') || '/', request.url));
    }
    if (firstSegment === "kr" && segments[1] !== "ko") {
        segments[1] = "ko";
        return NextResponse.redirect(new URL(segments.join('/') || '/', request.url));
    }

    // Check if the pathname already has a supported locale
    const isSupportedLocale = locales.includes(firstSegment);

    if (isSupportedLocale) {
        // Redirect to lowercase if uppercase was used
        if (segments[1] !== firstSegment) {
            segments[1] = firstSegment;
            return NextResponse.redirect(new URL(segments.join('/') || '/', request.url));
        }

        // Just extract locale to set header, then proceed normally
        const locale = firstSegment;
        const response = NextResponse.next();
        response.headers.set("x-locale", locale);
        return response;
    }

    // If no locale in path, rewrite to the auto-detected locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    const response = NextResponse.rewrite(request.nextUrl);
    response.headers.set("x-locale", locale);

    return response;
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|img|api).*)"],
};
