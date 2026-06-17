// Core domain types for the fashion deals / trends / price-tracking site.

export type Category =
  | "women"
  | "men"
  | "accessories"
  | "footwear"
  | "beauty";

export type Retailer = {
  id: string;
  name: string;
  /** Base URL, used for building product/deal links. */
  url: string;
};

export type PricePoint = {
  /** ISO date string, e.g. "2026-06-18". */
  date: string;
  /** Price in the store's minor-unit-free currency value, e.g. 49.99. */
  price: number;
};

export type Product = {
  id: string;
  title: string;
  brand: string;
  category: Category;
  retailerId: string;
  imageUrl: string;
  /** Current/list price. */
  price: number;
  currency: string; // e.g. "USD"
  /** Full price history, oldest first. Powers the price-tracking charts. */
  priceHistory: PricePoint[];
  tags: string[];
};

export type Deal = {
  id: string;
  productId: string;
  /** Price before the deal. */
  wasPrice: number;
  /** Discounted price. */
  nowPrice: number;
  /** Percentage off, 0-100. */
  discountPct: number;
  /** ISO date the deal expires. */
  expiresAt: string;
  /** Editorial flag for highlighting on the homepage. */
  featured: boolean;
};

export type Trend = {
  id: string;
  title: string;
  /** Short editorial blurb. */
  description: string;
  imageUrl: string;
  category: Category;
  /** Product ids that exemplify the trend. */
  productIds: string[];
};
