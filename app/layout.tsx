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
      <body>
        <ModalProvider>
          <SiteHeader />
          {children}
          <SiteModals />
        </ModalProvider>
      </body>
    </html>
  )
}
