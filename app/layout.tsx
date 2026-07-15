import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Explosives — Where Ambition Meets Loyalty",
  description:
    "Explosives is a premium streetwear label. Shop bags, apparel, headwear and accessories — printed on demand and shipped directly to your door.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
