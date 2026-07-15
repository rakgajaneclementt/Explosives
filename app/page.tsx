import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductGrid } from "@/components/product-grid"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Explosives Collection</p>
            <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
              Where Ambition <span className="text-primary">Meets Loyalty</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Explore our exclusive Explosives collection. Premium merchandise printed on demand and shipped directly to
              your door.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                href="/#products"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Shop the collection
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Our story
              </Link>
            </div>
          </div>
        </section>

        <ProductGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
