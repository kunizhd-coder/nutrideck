import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  // Read site URL from env so we don't have to hardcode the Vercel URL.
  // Set NEXT_PUBLIC_SITE_URL in Vercel or in your local .env for production urls.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "NutriMood Deck",
  description:
    "Discover personalized food recommendations based on your mood. Choose your mood and find the perfect food to help you feel better.",
  generator: "avezoor",
  applicationName: "NutriMood",
  keywords: ["mood", "food", "nutrition", "wellness", "recommendations"],
  authors: [{ name: "Kuni Zahidah Afifah Billah" }],
  creator: "Kuni Zahidah Afifah Billah",
  publisher: "NutriMood",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "NutriMood Deck - Your Mood, Your Food",
    description: "Discover personalized food recommendations based on your mood.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "NutriMood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriMood Deck",
    description: "Discover personalized food recommendations based on your mood.",
    images: ["/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
