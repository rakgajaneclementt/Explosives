import Link from "next/link"
import Image from "next/image"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/#products" },
      { label: "Bags", href: "/#products" },
      { label: "Apparel", href: "/#products" },
      { label: "Headwear", href: "/#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about" },
      { label: "Press", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/contact" },
      { label: "Shipping", href: "/contact" },
      { label: "Returns", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="text-lg font-extrabold tracking-tight">
              EXPLO<span className="text-accent">SIVES</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Where ambition meets loyalty. Premium streetwear printed on demand and shipped directly to your door.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Explosives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
