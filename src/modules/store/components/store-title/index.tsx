"use client"

import { useTranslation } from "@lib/i18n/LanguageProvider"

export function StoreTitle() {
  const { t } = useTranslation()
  return <h1 data-testid="store-page-title">{t("store.allProducts")}</h1>
}
