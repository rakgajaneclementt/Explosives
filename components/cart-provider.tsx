"use client"

import { createContext, useContext, useReducer, useState, useCallback, type ReactNode } from "react"

export type CartItem = {
  slug: string
  name: string
  price: number
  image: string
  size?: string
  color?: string
  quantity: number
}

type CartState = {
  items: CartItem[]
}

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; key: string }
  | { type: "SET_QTY"; key: string; quantity: number }
  | { type: "CLEAR" }

function itemKey(item: Pick<CartItem, "slug" | "size" | "color">) {
  return `${item.slug}__${item.size ?? ""}__${item.color ?? ""}`
}

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const key = itemKey(action.item)
      const existing = state.items.find((i) => itemKey(i) === key)
      if (existing) {
        return {
          items: state.items.map((i) =>
            itemKey(i) === key ? { ...i, quantity: i.quantity + action.item.quantity } : i,
          ),
        }
      }
      return { items: [...state.items, action.item] }
    }
    case "REMOVE":
      return { items: state.items.filter((i) => itemKey(i) !== action.key) }
    case "SET_QTY":
      return {
        items: state.items
          .map((i) => (itemKey(i) === action.key ? { ...i, quantity: Math.max(1, action.quantity) } : i))
          .filter((i) => i.quantity > 0),
      }
    case "CLEAR":
      return { items: [] }
    default:
      return state
  }
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: CartItem) => void
  removeItem: (key: string) => void
  setQuantity: (key: string, quantity: number) => void
  clear: () => void
  keyFor: (item: Pick<CartItem, "slug" | "size" | "color">) => string
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: "ADD", item })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key: string) => dispatch({ type: "REMOVE", key }), [])
  const setQuantity = useCallback((key: string, quantity: number) => dispatch({ type: "SET_QTY", key, quantity }), [])
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const count = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        count,
        subtotal,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        setQuantity,
        clear,
        keyFor: itemKey,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
