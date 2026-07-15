"use client"

import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { formatPrice, type Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-muted">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium">
          {product.category}
        </span>
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-bold leading-tight hover:underline">{product.name}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-bold">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() =>
              addItem({
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.images[0],
                color: product.colors[0],
                size: product.sizes?.[0],
                quantity: 1,
              })
            }
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
