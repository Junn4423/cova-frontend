"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { Locale, defaultLocale, getTranslation, localeNames, locales } from './index'

const LOCALE_STORAGE_KEY = '_app_locale'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
  locales: Locale[]
  localeNames: Record<Locale, string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
  initialLocale?: Locale
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || defaultLocale)
  const [mounted, setMounted] = useState(false)

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale)
    }
    setMounted(true)
  }, [])

  // Save locale to localStorage when it changes
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    
    // Update document lang attribute
    document.documentElement.lang = newLocale
  }, [])

  // Translation function
  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      return getTranslation(locale, key, params)
    },
    [locale]
  )

  // Set document lang on initial mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

  const value: LanguageContextType = {
    locale,
    setLocale,
    t,
    locales,
    localeNames,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

/**
 * Hook to use translations with type-safe keys
 */
export function useTranslation() {
  const { t, locale, setLocale, locales, localeNames } = useLanguage()
  
  return {
    t,
    locale,
    setLocale,
    locales,
    localeNames,
  }
}
