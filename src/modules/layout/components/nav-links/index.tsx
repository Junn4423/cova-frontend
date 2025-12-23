"use client"

import { useTranslation } from "@lib/i18n/LanguageProvider"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function NavLinks() {
  const { t } = useTranslation()

  return (
    <div className="hidden small:flex items-center gap-x-6 h-full">
      <LocalizedClientLink
        className="hover:text-ui-fg-base"
        href="/account"
        data-testid="nav-account-link"
      >
        {t("navigation.account")}
      </LocalizedClientLink>
    </div>
  )
}

export function CartFallback() {
  const { t } = useTranslation()

  return (
    <LocalizedClientLink
      className="hover:text-ui-fg-base flex gap-2"
      href="/cart"
      data-testid="nav-cart-link"
    >
      {t("cart.cartWithCount", { count: "0" })}
    </LocalizedClientLink>
  )
}
