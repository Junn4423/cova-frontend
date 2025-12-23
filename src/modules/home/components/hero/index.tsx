"use client"

import { Button, Heading } from "@medusajs/ui"
import { useTranslation } from "@lib/i18n/LanguageProvider"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-gradient-to-br from-covasol-dark via-covasol-blue to-covasol-navy">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl md:text-5xl leading-tight text-white font-bold"
          >
            {t("hero.title")}
          </Heading>
          <Heading
            level="h2"
            className="text-xl md:text-2xl leading-10 text-covasol-light font-normal mt-4"
          >
            {t("hero.subtitle")}
          </Heading>
        </span>
        <div className="flex gap-4 mt-6">
          <LocalizedClientLink href="/store">
            <Button className="bg-covasol-green hover:bg-covasol-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {t("hero.shopNow")}
            </Button>
          </LocalizedClientLink>
          <LocalizedClientLink href="/store">
            <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-colors">
              {t("hero.viewProducts")}
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
