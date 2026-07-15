import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Explosives logo" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-lg font-bold uppercase tracking-widest">Explosives</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Engineered energetics and initiation systems for surface and underground mining. Licensed supply and
            technical blasting support.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">Product Lines</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Bulk Explosives</li>
            <li>Packaged Explosives</li>
            <li>Initiation Systems</li>
            <li>Blasting Equipment</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Technical Sales: +1 (800) 555-0199</li>
            <li>orders@explosives.example</li>
            <li>Mon–Fri, 07:00–18:00</li>
          </ul>
          <Link href="/#products" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
            Request a quote &rarr;
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-6">
          <p>&copy; {new Date().getFullYear()} Explosives. Licensed explosives distributor. All rights reserved.</p>
          <p>Products supplied to licensed operators only, subject to regulatory compliance.</p>
        </div>
      </div>
    </footer>
  )
}
