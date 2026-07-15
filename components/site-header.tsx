import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Explosives logo" width={40} height={40} className="h-10 w-10" />
          <div className="leading-none">
            <span className="block font-display text-xl font-bold uppercase tracking-widest text-foreground">
              Explosives
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Blasting Supplies
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          <Link href="/#products" className="text-muted-foreground transition-colors hover:text-foreground">
            Products
          </Link>
          <Link href="/#capabilities" className="text-muted-foreground transition-colors hover:text-foreground">
            Capabilities
          </Link>
          <Link href="/#safety" className="text-muted-foreground transition-colors hover:text-foreground">
            Safety
          </Link>
        </nav>

        <Link
          href="/#products"
          className="rounded bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
        >
          Request Quote
        </Link>
      </div>
    </header>
  )
}
