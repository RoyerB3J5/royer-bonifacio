"use server"
import 'server-only'
import type { Dictionary } from "@/app/i18n/types"
const dictionaries: Record<"en" | "es", () => Promise<Dictionary>> = {
  en: () => import("@/app/i18n/en.json").then(m => m.default),
  es: () => import("@/app/i18n/es.json").then(m => m.default),
};

const cache = new Map<"en" | "es", Dictionary>();
export const getDictionary = async (locale: 'en' | 'es') => {
  if (cache.has(locale)) return cache.get(locale)
  const dict = await dictionaries[locale]()
  cache.set(locale, dict)
  return dict
}