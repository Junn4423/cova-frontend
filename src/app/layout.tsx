import { getBaseURL } from "@lib/util/env"
import { LanguageProvider } from "@lib/i18n/LanguageProvider"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Covasol - Mua sắm trực tuyến | Online Shopping",
    template: "%s | Covasol"
  },
  description: "Covasol - Cửa hàng trực tuyến với sản phẩm chất lượng cao, giá cả hợp lý. Mua sắm an toàn, giao hàng nhanh chóng. Quality products at great prices with fast delivery.",
  keywords: ["covasol", "mua sắm trực tuyến", "online shopping", "thương mại điện tử", "ecommerce", "cửa hàng online"],
  authors: [{ name: "Covasol" }],
  creator: "Covasol",
  publisher: "Covasol",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    siteName: "Covasol",
    title: "Covasol - Mua sắm trực tuyến | Online Shopping",
    description: "Covasol - Cửa hàng trực tuyến với sản phẩm chất lượng cao, giá cả hợp lý.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Covasol - Mua sắm trực tuyến | Online Shopping",
    description: "Covasol - Cửa hàng trực tuyến với sản phẩm chất lượng cao, giá cả hợp lý.",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-mode="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#124E66" />
      </head>
      <body className="bg-white text-gray-900">
        <LanguageProvider>
          <main className="relative">{props.children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
