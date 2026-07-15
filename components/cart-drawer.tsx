"use client"

import Image from "next/image"
import { X, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/products"

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, setQuantity, removeItem, keyFor, clear } = useCart()

  return (
    <>
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-foreground/40 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-base font-bold">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-5 text-center">
            <p className="font-medium">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">Add something to get started.</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {items.map((item) => {
                const key = keyFor(item)
                return (
                  <li key={key} className="flex gap-4 py-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <p className="text-sm font-semibold leading-tight">{item.name}</p>
                        <button
                          type="button"
                          onClick={() => removeItem(key)}
                          className="text-muted-foreground hover:text-accent"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {[item.color, item.size].filter(Boolean).join(" / ")}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() => setQuantity(key, item.quantity - 1)}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(key, item.quantity + 1)}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="border-t border-border px-5 py-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-3 text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                onClick={() => {
                  alert("Checkout is a demo in this build.")
                }}
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={clear}
                className="mt-2 w-full rounded-full py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
