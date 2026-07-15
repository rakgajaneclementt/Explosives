export type Category = "Bags" | "Apparel" | "Headwear" | "Accessories"

export type Product = {
  slug: string
  name: string
  category: Category
  price: number
  tagline: string
  description: string
  details: string[]
  materials: string
  care: string
  sizes?: string[]
  colors: string[]
  images: string[]
  featured?: boolean
}

export const products: Product[] = [
  {
    slug: "urban-crossbody-bag",
    name: "Urban Crossbody Bag",
    category: "Bags",
    price: 36.73,
    tagline: "Everyday carry, built for the city.",
    description:
      "The Urban Crossbody Bag keeps your essentials close and your hands free. A clean, minimal silhouette with the embossed Explosives wordmark, an adjustable webbing strap, and a water-resistant shell that shrugs off the daily commute. Perfect for phone, wallet, keys, and a compact everyday kit.",
    details: [
      "Adjustable padded webbing strap fits waist or shoulder",
      "Main zip compartment with interior slip pocket",
      "Hidden rear zip pocket for valuables",
      "Embossed Explosives wordmark on the front panel",
      "Water-resistant coated shell",
    ],
    materials: "600D recycled polyester shell, nylon lining, YKK zippers.",
    care: "Spot clean with a damp cloth. Do not machine wash or tumble dry.",
    colors: ["Black", "Bone"],
    images: ["/products/crossbody-black-1.png", "/products/crossbody-black-2.png", "/products/crossbody-bone-1.png"],
    featured: true,
  },
  {
    slug: "oversized-cotton-tee",
    name: "Oversized Cotton T-Shirt",
    category: "Apparel",
    price: 35.0,
    tagline: "Heavyweight drape, everyday staple.",
    description:
      "A relaxed, oversized cut in premium heavyweight cotton. The Explosives tee drapes clean off the shoulder with a boxy body and dropped seams for that lived-in streetwear fit. Subtle tonal chest print keeps it versatile enough to layer or wear on its own.",
    details: [
      "Oversized, boxy fit with dropped shoulders",
      "Heavyweight 240 gsm combed cotton",
      "Ribbed crew neck with reinforced collar",
      "Tonal Explosives chest print",
      "Pre-shrunk and garment washed",
    ],
    materials: "100% combed ring-spun cotton, 240 gsm.",
    care: "Machine wash cold, inside out. Tumble dry low. Do not iron print.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Pink", "Black", "Bone"],
    images: ["/products/tee-pink-1.png", "/products/tee-black-1.png", "/products/tee-bone-1.png"],
    featured: true,
  },
  {
    slug: "embroidered-socks",
    name: "Embroidered Socks",
    category: "Accessories",
    price: 29.77,
    tagline: "Cushioned comfort, embroidered logo.",
    description:
      "Ribbed crew socks with a cushioned footbed and a crisp embroidered Explosives logo at the cuff. A breathable cotton blend keeps feet comfortable all day, while reinforced heels and toes stand up to heavy rotation.",
    details: [
      "Embroidered Explosives logo at the cuff",
      "Cushioned terry footbed",
      "Reinforced heel and toe",
      "Ribbed arch support",
      "Sold as a single pair",
    ],
    materials: "80% combed cotton, 17% polyester, 3% elastane.",
    care: "Machine wash warm. Tumble dry low.",
    sizes: ["S/M", "L/XL"],
    colors: ["White", "Black"],
    images: ["/products/socks-white-1.png", "/products/socks-black-1.png"],
  },
  {
    slug: "mens-joggers",
    name: "Men's Joggers",
    category: "Apparel",
    price: 50.32,
    tagline: "Tapered fit, fleece-lined warmth.",
    description:
      "Tapered joggers in a soft brushed fleece with a tailored, tapered leg and ribbed cuffs. An elastic drawstring waist and deep side pockets make them a go-anywhere staple, finished with an embroidered Explosives mark on the thigh.",
    details: [
      "Tapered leg with ribbed cuffs",
      "Brushed fleece interior for warmth",
      "Elastic waistband with flat drawstring",
      "Deep side pockets plus a zip back pocket",
      "Embroidered Explosives mark on left thigh",
    ],
    materials: "70% cotton, 30% recycled polyester fleece.",
    care: "Machine wash cold. Tumble dry low. Do not iron print.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Charcoal", "Black"],
    images: ["/products/joggers-charcoal-1.png", "/products/joggers-black-1.png"],
    featured: true,
  },
  {
    slug: "fisherman-beanie",
    name: "Fisherman Beanie",
    category: "Headwear",
    price: 24.0,
    tagline: "Short-cuff knit for a clean fit.",
    description:
      "A short-cuff fisherman beanie in a chunky ribbed knit. Sits high and clean on the head with a woven Explosives label on the fold. Warm, structured, and built to keep its shape season after season.",
    details: [
      "Short-cuff fisherman silhouette",
      "Chunky 3-gauge ribbed knit",
      "Woven Explosives label on the cuff",
      "One size fits most",
      "Structured knit holds its shape",
    ],
    materials: "100% acrylic knit.",
    care: "Hand wash cold. Lay flat to dry.",
    colors: ["Olive", "Black", "Cream"],
    images: ["/products/beanie-olive-1.png", "/products/beanie-black-1.png"],
  },
  {
    slug: "old-school-bucket-hat",
    name: "Old School Bucket Hat",
    category: "Headwear",
    price: 25.94,
    tagline: "Retro brim, all-day shade.",
    description:
      "A throwback bucket hat with a wide, structured brim and an embroidered Explosives logo on the front. Cut from durable cotton twill with breathable side eyelets, it's the easy finishing piece for any fit.",
    details: [
      "Wide structured brim",
      "Embroidered Explosives logo",
      "Breathable metal side eyelets",
      "Durable cotton twill construction",
      "Unisex sizing",
    ],
    materials: "100% cotton twill.",
    care: "Spot clean or hand wash cold. Air dry.",
    sizes: ["S/M", "L/XL"],
    colors: ["Khaki", "Black"],
    images: ["/products/bucket-khaki-1.png", "/products/bucket-black-1.png"],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export const categories: ("All" | Category)[] = ["All", "Bags", "Apparel", "Headwear", "Accessories"]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)
}
