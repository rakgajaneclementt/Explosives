"use client"

import { useMemo, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { categories, products, type Category } from "@/lib/products"

export function ProductGrid() {
  const [active, setActive] = useState<"All" | Category>("All")

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-balance">Our Products</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Premium merchandise, printed on demand and shipped directly to you.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
