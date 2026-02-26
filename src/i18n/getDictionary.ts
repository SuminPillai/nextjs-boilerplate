import type { Locale } from "./config";

// Lazy-load dictionaries to keep bundle size small
const dictionaries = {
    en: () => import("./dictionaries/en.json").then((m) => m.default),
    ja: () => import("./dictionaries/ja.json").then((m) => m.default),
    ko: () => import("./dictionaries/ko.json").then((m) => m.default),
    fr: () => import("./dictionaries/fr.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
    return dictionaries[locale]();
}
