import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'zh'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Disable locale detection
    localeDetection: false
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(zh|en)/:path*']
};