import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ModalProvider } from "@/context/modal-context"
import SiteHeader from "@/components/site-header"
import SiteModals from "@/components/site-modals"

export const metadata: Metadata = {
  metadataBase: new URL('https://socialbloom.com'),
  title: "Social Bloom - Digital Marketing Agency | Lead Generation & Growth",
  description:
    "Social Bloom is a premier digital marketing agency specializing in lead generation, inbound marketing, and outbound sales strategies. We help businesses achieve 155% growth with proven marketing solutions.",
  keywords:
    "digital marketing, lead generation, inbound marketing, outbound sales, business growth, marketing agency, social media marketing, SEO, content marketing",
  authors: [{ name: "Social Bloom" }],
  creator: "Social Bloom",
  publisher: "Social Bloom",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socialbloom.com",
    title: "Social Bloom - Digital Marketing Agency | Lead Generation & Growth",
    description:
      "Social Bloom is a premier digital marketing agency specializing in lead generation, inbound marketing, and outbound sales strategies. We help businesses achieve 155% growth with proven marketing solutions.",
    siteName: "Social Bloom",
    images: [
      {
        url: "/images/social-bloom-og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Bloom Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Bloom - Digital Marketing Agency | Lead Generation & Growth",
    description:
      "Social Bloom is a premier digital marketing agency specializing in lead generation, inbound marketing, and outbound sales strategies. We help businesses achieve 155% growth with proven marketing solutions.",
    images: ["/images/social-bloom-og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
  icons: {
    icon: "/faviconee.png",
    shortcut: "/faviconee.png",
    apple: "/faviconee.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5L4QMCB2');
        ` }} />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5L4QMCB2"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ModalProvider>
          <SiteHeader />
          {children}
          <SiteModals />
        </ModalProvider>
      </body>
    </html>
  )
}
