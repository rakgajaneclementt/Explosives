"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { CartDrawer } from "@/components/cart-drawer"

const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const { count, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Explosives home">
          <Image src="/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight">
            EXPLO<span className="text-accent">SIVES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
          aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
        >
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
              {count}
            </span>
          )}
        </button>
      </div>
      <CartDrawer />
    </header>
  )
}
