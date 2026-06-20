// Domain types for Fragrandise — an editorial fragrance catalogue.

export type Season = "summer" | "winter";
export type TimeOfDay = "day" | "night";
export type HouseType = "niche" | "designer";
export type PriceTier = "premium" | "budget";
export type Gender = "men" | "women" | "unisex";

export const GENDERS: Gender[] = ["men", "women", "unisex"];

export type Family =
  | "Citrus"
  | "Aquatic"
  | "Fresh"
  | "Sweet"
  | "Spicy"
  | "Leather"
  | "Woody"
  | "Floral"
  | "Gourmand";

export const FAMILIES: Family[] = [
  "Citrus",
  "Aquatic",
  "Fresh",
  "Sweet",
  "Spicy",
  "Leather",
  "Woody",
  "Floral",
  "Gourmand",
];

export type NotePyramid = {
  top: string[];
  middle: string[];
  base: string[];
};

export type Fragrance = {
  id: string;
  brand: string;
  name: string;
  /** One-sentence editorial blurb (shown in the drawer). */
  description: string;
  season: Season;
  times: TimeOfDay[];
  houseType: HouseType;
  priceTier: PriceTier;
  /** Marketed gender. Existing men's-leaning entries default to "men". */
  gender?: Gender;
  families: Family[];
  notes: NotePyramid;
  /** Two-stop gradient [from, to] for the bottle illustration. */
  accent: [string, string];
};

export type ShopLinks = {
  amazon: string;
};

export type Performance = {
  sillage: "Low" | "High";
  projection: "Low" | "High";
};

export const HOUSE_LABELS: Record<HouseType, string> = {
  niche: "Niche House",
  designer: "Designer House",
};

export const TIER_LABELS: Record<PriceTier, string> = {
  premium: "Premium",
  budget: "Budget",
};
