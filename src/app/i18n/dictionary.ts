"use server"
import 'server-only'

const dictionaries ={
  en: () => import('@/app/i18n/en.json').then((module)=>module.default),
  es: () => import('@/app/i18n/es.json').then((module)=>module.default),
}

const cache = new Map<"en" | "es", any>();
export const getDictionary = async (locale: 'en' | 'es') => {
  if (cache.has(locale)) return cache.get(locale)
  const dict = await dictionaries[locale]()
  cache.set(locale, dict)
  return dict
}