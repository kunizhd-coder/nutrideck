import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Splash from "../components/splash"

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
  title: "NutriMood Deck - Rekomendasi Makanan Berdasarkan Mood",
  description:
    "Temukan rekomendasi makanan yang dipersonalisasi berdasarkan mood Anda. Pilih mood dan temukan makanan sempurna untuk membantu Anda merasa lebih baik.",
  generator: "avezoor",
  applicationName: "NutriMood",
  keywords: ["mood", "makanan", "nutrisi", "kesehatan", "rekomendasi"],
  authors: [{ name: "Kuni Zahidah Afifah Billah" }],
  creator: "Kuni Zahidah Afifah Billah",
  publisher: "NutriMood",
    openGraph: {
    type: "website",
    locale: "id_ID",
    title: "NutriMood Deck - Mood Anda, Makanan Anda",
    description: "Temukan rekomendasi makanan yang dipersonalisasi berdasarkan mood Anda.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "NutriMood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriMood Deck",
    description: "Temukan rekomendasi makanan yang dipersonalisasi berdasarkan mood Anda.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      {
        url: "/logo.png",
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
        <Splash />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
