export type Product = {
  slug: string
  name: string
  category: string
  tagline: string
  price: number
  unit: string
  image: string
  shortDescription: string
  description: string
  features: string[]
  specs: { label: string; value: string }[]
  applications: string[]
}

export const products: Product[] = [
  {
    slug: "bulk-emulsion",
    name: "TitanFlow Bulk Emulsion",
    category: "Bulk Explosives",
    tagline: "High-energy, water-resistant blasting agent",
    price: 2.15,
    unit: "per kg",
    image: "/products/bulk-emulsion.png",
    shortDescription:
      "A pumpable water-in-oil emulsion engineered for wet and dry blastholes in surface mining and quarrying.",
    description:
      "TitanFlow Bulk Emulsion is a sensitised water-in-oil emulsion delivered on-bench by pump truck. Its dense, gap-free column loading maximises energy transfer to the rock mass while its exceptional water resistance keeps performance consistent in fully coupled, water-filled holes. Density and energy can be tuned at the truck to match your geology and required fragmentation profile.",
    features: [
      "Excellent water resistance for wet-hole applications",
      "Field-adjustable density from 0.80 to 1.30 g/cc",
      "Pumpable for fast, safe column loading",
      "Superior detonation velocity and energy output",
    ],
    specs: [
      { label: "Density", value: "0.80 – 1.30 g/cc" },
      { label: "Velocity of Detonation", value: "4,500 – 6,000 m/s" },
      { label: "Water Resistance", value: "Excellent" },
      { label: "Minimum Diameter", value: "76 mm" },
      { label: "Energy", value: "3.1 MJ/kg" },
    ],
    applications: ["Surface metal mining", "Quarrying", "Wet blastholes", "Large-diameter production blasting"],
  },
  {
    slug: "anfo",
    name: "PrimeCharge ANFO",
    category: "Bulk Explosives",
    tagline: "Cost-effective dry-hole blasting agent",
    price: 1.05,
    unit: "per kg",
    image: "/products/anfo.png",
    shortDescription:
      "A free-flowing ammonium nitrate / fuel oil blend offering economical energy for dry blasthole conditions.",
    description:
      "PrimeCharge ANFO combines porous, prilled ammonium nitrate with a precisely metered fuel oil dose to deliver reliable, economical blasting energy in dry ground. Its free-flowing prills give complete blasthole coupling and consistent oxygen balance for clean detonation and low fume. Loaded pneumatically or by auger, it remains the workhorse product for dry surface and underground development rounds.",
    features: [
      "Optimised 94/6 oxygen-balanced formulation",
      "Free-flowing prill for complete hole coupling",
      "Low cost per unit of energy",
      "Compatible with pneumatic and auger loading",
    ],
    specs: [
      { label: "Density", value: "0.80 – 0.85 g/cc" },
      { label: "Velocity of Detonation", value: "3,000 – 4,500 m/s" },
      { label: "Water Resistance", value: "Nil (dry holes only)" },
      { label: "Minimum Diameter", value: "50 mm" },
      { label: "Energy", value: "3.7 MJ/kg" },
    ],
    applications: ["Dry surface blasting", "Underground development", "Construction", "Trenching"],
  },
  {
    slug: "packaged-emulsion",
    name: "CoreSet Packaged Emulsion",
    category: "Packaged Explosives",
    tagline: "Cartridged emulsion for controlled charging",
    price: 3.4,
    unit: "per kg",
    image: "/products/packaged-emulsion.png",
    shortDescription:
      "Film-wrapped emulsion cartridges for underground, small-diameter, and perimeter control blasting.",
    description:
      "CoreSet Packaged Emulsion delivers the energy and water resistance of bulk emulsion in a convenient cartridged form. Each rigid film cartridge is cap-sensitive and easy to charge by hand, making it ideal for underground rings, secondary breaking, and applications where bulk delivery is impractical. Consistent diameter and density ensure predictable performance hole to hole.",
    features: [
      "Cap-sensitive for direct initiation",
      "Rugged film packaging for handling and storage",
      "High water resistance",
      "Available in multiple diameters and lengths",
    ],
    specs: [
      { label: "Density", value: "1.15 g/cc" },
      { label: "Velocity of Detonation", value: "5,000 – 5,800 m/s" },
      { label: "Water Resistance", value: "Excellent" },
      { label: "Diameters", value: "25 – 90 mm" },
      { label: "Shelf Life", value: "12 months" },
    ],
    applications: ["Underground ring blasting", "Secondary breaking", "Small-diameter holes", "Perimeter control"],
  },
  {
    slug: "cast-booster",
    name: "IgnitePro Cast Booster",
    category: "Initiation Systems",
    tagline: "Reliable high-energy priming",
    price: 6.8,
    unit: "each",
    image: "/products/cast-booster.png",
    shortDescription:
      "Cast pentolite boosters that deliver a powerful, dependable initiating shock to bulk explosive columns.",
    description:
      "IgnitePro Cast Boosters are precision-cast pentolite primers engineered to reliably initiate ANFO and emulsion columns. Their high detonation pressure ensures full-order detonation of the main charge, even in cold or marginally sensitised product. Moulded tunnels accept both detonating cord and detonators, giving crews flexibility across initiation systems.",
    features: [
      "High detonation pressure for reliable initiation",
      "Dual tunnels for cord or detonator priming",
      "Water- and impact-resistant casting",
      "Sizes from 150 g to 900 g",
    ],
    specs: [
      { label: "Composition", value: "Pentolite (PETN/TNT)" },
      { label: "Velocity of Detonation", value: "7,500 m/s" },
      { label: "Density", value: "1.60 g/cc" },
      { label: "Weights", value: "150 g – 900 g" },
      { label: "Water Resistance", value: "Excellent" },
    ],
    applications: ["Priming bulk explosives", "Deep-hole blasting", "Wet-hole initiation", "Presplit priming"],
  },
  {
    slug: "electronic-detonator",
    name: "PrecisionX Electronic Detonator",
    category: "Initiation Systems",
    tagline: "Programmable millisecond-accurate timing",
    price: 24.5,
    unit: "each",
    image: "/products/electronic-detonator.png",
    shortDescription:
      "Fully programmable electronic detonators for precise delay timing and superior fragmentation control.",
    description:
      "PrecisionX Electronic Detonators put blast timing in your hands with 1 ms programmable delays across the full firing sequence. Precise, repeatable timing improves fragmentation, reduces ground vibration and airblast, and unlocks advanced blast designs that mechanical delays cannot achieve. Each detonator is individually tested and logged for full traceability and two-way communication with the blasting box.",
    features: [
      "1 ms programmable delay resolution",
      "Individual detonator verification and logging",
      "Reduced vibration and improved fragmentation",
      "Encrypted, two-way blaster communication",
    ],
    specs: [
      { label: "Delay Range", value: "0 – 20,000 ms" },
      { label: "Delay Resolution", value: "1 ms" },
      { label: "Lead Wire Lengths", value: "6 – 40 m" },
      { label: "Strength", value: "No. 8 base charge" },
      { label: "Water Resistance", value: "100 m / 24 h" },
    ],
    applications: ["Vibration-controlled blasting", "Complex blast designs", "Urban excavation", "High-precision fragmentation"],
  },
  {
    slug: "shock-tube-detonator",
    name: "SilentLine Shock Tube Detonator",
    category: "Initiation Systems",
    tagline: "Non-electric, spark-free initiation",
    price: 5.2,
    unit: "each",
    image: "/products/shock-tube-detonator.png",
    shortDescription:
      "Non-electric shock tube detonators immune to stray current, RF, and static for safe field initiation.",
    description:
      "SilentLine Shock Tube Detonators transmit a low-energy signal through a hollow plastic tube, initiating the base charge without any electrical circuit. This makes them inherently immune to stray currents, radio frequencies and static electricity. A broad range of in-hole and surface delay periods supports flexible, reliable initiation sequences for surface and underground operations.",
    features: [
      "Immune to stray current, RF and static",
      "Colour-coded surface and in-hole delays",
      "High-strength, low-stretch tubing",
      "Reliable signal transmission over long runs",
    ],
    specs: [
      { label: "Tube Type", value: "3-layer low-energy" },
      { label: "In-hole Delays", value: "25 – 1,000 ms" },
      { label: "Surface Delays", value: "0 – 200 ms" },
      { label: "Tube Lengths", value: "2.4 – 18 m" },
      { label: "Strength", value: "No. 8 base charge" },
    ],
    applications: ["Surface bench blasting", "Underground development", "Areas with electrical hazards", "General production blasting"],
  },
  {
    slug: "detonating-cord",
    name: "LinkCord Detonating Cord",
    category: "Initiation Systems",
    tagline: "High-velocity PETN initiation cord",
    price: 1.4,
    unit: "per m",
    image: "/products/detonating-cord.png",
    shortDescription:
      "PETN-cored detonating cord for trunkline initiation, presplitting, and simultaneous multi-hole firing.",
    description:
      "LinkCord Detonating Cord carries a continuous core of PETN inside a durable, waterproof textile-and-plastic sheath, detonating at high velocity to initiate boosters and connect blast networks. Available in a range of core loads, it is the backbone of trunkline layouts, presplit and smooth-wall blasting, and any design requiring instantaneous, synchronised initiation.",
    features: [
      "Continuous PETN core for instant propagation",
      "Waterproof, abrasion-resistant sheath",
      "Multiple core loads from 3.6 to 40 g/m",
      "High tensile strength for field handling",
    ],
    specs: [
      { label: "Core Load", value: "3.6 – 40 g/m PETN" },
      { label: "Velocity of Detonation", value: "6,500 – 7,000 m/s" },
      { label: "Tensile Strength", value: "> 700 N" },
      { label: "Water Resistance", value: "Excellent" },
      { label: "Spool Length", value: "250 – 1,000 m" },
    ],
    applications: ["Trunkline initiation", "Presplit blasting", "Smooth-wall blasting", "Booster priming"],
  },
  {
    slug: "blasting-machine",
    name: "BlastCommand Initiation Unit",
    category: "Blasting Equipment",
    tagline: "Rugged programmable firing controller",
    price: 4200,
    unit: "each",
    image: "/products/blasting-machine.png",
    shortDescription:
      "A rugged, programmable blasting controller for tagging, testing, and firing electronic detonator networks.",
    description:
      "The BlastCommand Initiation Unit is the field controller for PrecisionX electronic detonators. It tags each detonator, verifies the full network with two-way communication, uploads the blast timing plan, and arms and fires only after multi-step authorisation. A weather-sealed enclosure, high-visibility display and long-life battery keep crews productive in the harshest conditions.",
    features: [
      "Two-way network verification before firing",
      "Multi-step arming and authorisation security",
      "IP67 weather-sealed enclosure",
      "Stores and recalls multiple blast plans",
    ],
    specs: [
      { label: "Capacity", value: "Up to 1,500 detonators" },
      { label: "Display", value: "Sunlight-readable LCD" },
      { label: "Ingress Rating", value: "IP67" },
      { label: "Battery", value: "Rechargeable, 500-blast life" },
      { label: "Operating Temp", value: "-20 °C to +55 °C" },
    ],
    applications: ["Electronic detonator firing", "Blast network testing", "Large surface mines", "Contract blasting"],
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export const categories = Array.from(new Set(products.map((p) => p.category)))
