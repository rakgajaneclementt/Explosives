import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Explosives — Industrial & Mining Blasting Supplies",
  description:
    "Explosives supplies engineered energetics, initiation systems and blasting equipment for surface and underground mining. Emulsions, ANFO, detonators, boosters and more.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0e0e10",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${oswald.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
