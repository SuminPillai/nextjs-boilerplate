/**
 * Internationalization Configuration
 *
 * Defines supported locales and the default locale for the site.
 * Japanese (ja) and Korean (ko) are configured to match the
 * original website's /jp/ and /kr/ language directories.
 */

export const i18nConfig = {
    defaultLocale: "en" as const,
    locales: ["en", "ja", "ko", "fr"] as const,
};

export type Locale = (typeof i18nConfig.locales)[number];

/**
 * Maps locale codes to URL path prefixes.
 * English is the default (no prefix), Japanese uses /jp, Korean uses /kr.
export const localePathMap: Record<Locale, string> = {
    en: "",
    ja: "/jp",
    ko: "/kr",
    fr: "/fr",
};

/**
 * Maps locale codes to display names.
 */
export const localeNames: Record<Locale, string> = {
    en: "English",
    ja: "Japanese",
    ko: "Korean",
    fr: "French",
};
