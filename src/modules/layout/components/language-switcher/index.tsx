"use client"

import { useTranslation } from "@lib/i18n/LanguageProvider"
import { Locale } from "@lib/i18n"

export default function LanguageSwitcher() {
  const { locale, setLocale, locales, localeNames } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale
    setLocale(newLocale)
  }

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={handleChange}
        className="bg-transparent text-sm text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer border border-ui-border-base rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-ui-border-interactive"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  )
}
