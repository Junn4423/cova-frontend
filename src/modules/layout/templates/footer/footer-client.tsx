"use client"

import { useTranslation } from "@lib/i18n/LanguageProvider"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import LanguageSwitcher from "@modules/layout/components/language-switcher"
import { Text } from "@medusajs/ui"

interface FooterClientProps {
  categories: React.ReactNode
  collections: React.ReactNode
}

export default function FooterClient({ categories, collections }: FooterClientProps) {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-ui-border-base w-full bg-covasol-navy">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-white hover:text-covasol-accent uppercase font-bold"
            >
              {t("footer.covasolStore")}
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {categories}
            {collections}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-white font-semibold">Covasol</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-300 txt-small">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="hover:text-white"
                  >
                    {t("footer.about")}
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="hover:text-white"
                  >
                    {t("footer.contact")}
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/support"
                    className="hover:text-white"
                  >
                    {t("footer.support")}
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-gray-400 items-center">
          <Text className="txt-compact-small">
            {t("common.allRightsReserved", { year: new Date().getFullYear().toString() })}
          </Text>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
