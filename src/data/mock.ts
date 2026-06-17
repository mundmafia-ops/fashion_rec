// Mock seed data. Swap this module for real data sources (scrapers / affiliate
// APIs) later without touching the UI — keep these shapes stable.

import type { Deal, Product, Retailer, Trend } from "@/lib/types";

export const retailers: Retailer[] = [
  { id: "r-aurora", name: "Aurora", url: "https://example.com/aurora" },
  { id: "r-northwind", name: "Northwind", url: "https://example.com/northwind" },
  { id: "r-lumen", name: "Lumen", url: "https://example.com/lumen" },
];

export const products: Product[] = [
  {
    id: "p-001",
    title: "Oversized Wool Blazer",
    brand: "Maison Côte",
    category: "women",
    retailerId: "r-aurora",
    imageUrl: "https://placehold.co/600x800?text=Wool+Blazer",
    price: 129.0,
    currency: "USD",
    priceHistory: [
      { date: "2026-04-01", price: 189.0 },
      { date: "2026-05-01", price: 169.0 },
      { date: "2026-06-01", price: 149.0 },
      { date: "2026-06-15", price: 129.0 },
    ],
    tags: ["tailoring", "outerwear", "minimal"],
  },
  {
    id: "p-002",
    title: "Relaxed Pleated Trousers",
    brand: "Atelier Nord",
    category: "men",
    retailerId: "r-northwind",
    imageUrl: "https://placehold.co/600x800?text=Pleated+Trousers",
    price: 79.0,
    currency: "USD",
    priceHistory: [
      { date: "2026-04-01", price: 95.0 },
      { date: "2026-05-01", price: 89.0 },
      { date: "2026-06-10", price: 79.0 },
    ],
    tags: ["trousers", "relaxed", "neutral"],
  },
  {
    id: "p-003",
    title: "Leather Crossbody Bag",
    brand: "Lumen",
    category: "accessories",
    retailerId: "r-lumen",
    imageUrl: "https://placehold.co/600x800?text=Crossbody+Bag",
    price: 145.0,
    currency: "USD",
    priceHistory: [
      { date: "2026-03-01", price: 145.0 },
      { date: "2026-05-01", price: 160.0 },
      { date: "2026-06-01", price: 145.0 },
    ],
    tags: ["leather", "bag", "everyday"],
  },
  {
    id: "p-004",
    title: "Suede Chunky Loafers",
    brand: "Aurora",
    category: "footwear",
    retailerId: "r-aurora",
    imageUrl: "https://placehold.co/600x800?text=Suede+Loafers",
    price: 99.0,
    currency: "USD",
    priceHistory: [
      { date: "2026-04-01", price: 130.0 },
      { date: "2026-05-15", price: 115.0 },
      { date: "2026-06-12", price: 99.0 },
    ],
    tags: ["suede", "loafers", "autumn"],
  },
];

export const deals: Deal[] = [
  {
    id: "d-001",
    productId: "p-001",
    wasPrice: 189.0,
    nowPrice: 129.0,
    discountPct: 32,
    expiresAt: "2026-06-30",
    featured: true,
  },
  {
    id: "d-002",
    productId: "p-004",
    wasPrice: 130.0,
    nowPrice: 99.0,
    discountPct: 24,
    expiresAt: "2026-06-25",
    featured: true,
  },
  {
    id: "d-003",
    productId: "p-002",
    wasPrice: 95.0,
    nowPrice: 79.0,
    discountPct: 17,
    expiresAt: "2026-07-05",
    featured: false,
  },
];

export const trends: Trend[] = [
  {
    id: "t-001",
    title: "Quiet Luxury Tailoring",
    description:
      "Soft-shouldered blazers and pleated trousers in muted neutrals.",
    imageUrl: "https://placehold.co/800x600?text=Quiet+Luxury",
    category: "women",
    productIds: ["p-001", "p-002"],
  },
  {
    id: "t-002",
    title: "Everyday Leather",
    description: "Compact crossbody bags and grounded suede footwear.",
    imageUrl: "https://placehold.co/800x600?text=Everyday+Leather",
    category: "accessories",
    productIds: ["p-003", "p-004"],
  },
];

// --- Lightweight accessors (stand-ins for a future data/API layer) ---

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedDeals(): Deal[] {
  return deals.filter((d) => d.featured);
}

export function getRetailer(id: string): Retailer | undefined {
  return retailers.find((r) => r.id === id);
}
