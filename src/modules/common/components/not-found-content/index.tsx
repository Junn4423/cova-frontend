"use client"

import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import { useTranslation } from "@lib/i18n/LanguageProvider"
import Link from "next/link"

export default function NotFoundContent() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">{t("errors.pageNotFound")}</h1>
      <p className="text-small-regular text-ui-fg-base">
        {t("errors.pageNotFoundDescription")}
      </p>
      <Link
        className="flex gap-x-1 items-center group"
        href="/"
      >
        <Text className="text-ui-fg-interactive">{t("errors.goToFrontpage")}</Text>
        <ArrowUpRightMini
          className="group-hover:rotate-45 ease-in-out duration-150"
          color="var(--fg-interactive)"
        />
      </Link>
    </div>
  )
}
