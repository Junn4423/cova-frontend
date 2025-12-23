import vi from './vi.json'
import en from './en.json'

export type Locale = 'vi' | 'en'

export const locales: Locale[] = ['vi', 'en']

export const defaultLocale: Locale = 'vi'

export const localeNames: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
}

export const translations = {
  vi,
  en,
} as const

export type TranslationKeys = typeof vi

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

/**
 * Replace placeholders in string with values
 * e.g., "Hello {name}" with { name: "John" } => "Hello John"
 */
function interpolate(str: string, params?: Record<string, string | number>): string {
  if (!params) return str
  return str.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? `{${key}}`))
}

/**
 * Get translation for a key
 */
export function getTranslation(
  locale: Locale,
  key: string,
  params?: Record<string, string | number>
): string {
  const translation = getNestedValue(translations[locale], key)
  
  if (!translation) {
    // Fallback to Vietnamese if key not found
    const fallback = getNestedValue(translations.vi, key)
    if (fallback) {
      return interpolate(fallback, params)
    }
    // Return key if translation not found
    console.warn(`Translation key not found: ${key}`)
    return key
  }
  
  return interpolate(translation, params)
}

/**
 * Create a t function for a specific locale
 */
export function createTranslator(locale: Locale) {
  return function t(key: string, params?: Record<string, string | number>): string {
    return getTranslation(locale, key, params)
  }
}

export { vi, en }
