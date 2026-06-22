import type { PriceBand } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────
// Price band per fragrance id, derived from typical actual selling prices on
// major Indian platforms (Amazon.in / Flipkart / Myntra / IndiaMART), not
// inflated MRP. Bands:
//   value  → under ₹2,300
//   mid    → ₹2,300 – ₹6,000
//   luxury → ₹6,000+
// The trailing comment is the indicative researched ₹ price (100ml unless noted).
// ─────────────────────────────────────────────────────────────────────────

export const PRICE_BANDS: Record<string, PriceBand> = {
  "creed-virgin-island-water": "luxury", // ~₹25,950
  "lattafa-khamrah": "value", // ~₹1,300
  "armaf-cdnim": "value", // ~₹2,000 (105ml EDT)
  "ajmal-carbon": "value", // ~₹1,300
  "xerjoff-torino21": "luxury", // ~₹23,500
  "roja-elysium": "luxury", // ~₹35,000+
  "nishane-wulong-cha": "luxury", // ~₹30,500
  "mfk-gentle-fluidity-silver": "luxury", // ~₹18,000
  "amouage-beach-hut-man": "luxury", // ~₹32,500
  "goldfield-banks-bohemian-lime": "luxury", // ~₹18,100
  "pdm-sedley": "luxury", // ~₹34,000 (125ml)
  "bykilian-angels-share": "luxury", // ~₹17,300 (50ml)
  "xerjoff-naxos": "luxury", // ~₹22,000
  "mfk-grand-soir": "luxury", // ~₹20,000
  "pdm-layton": "luxury", // ~₹24,999 (125ml)
  "initio-side-effect": "luxury", // ~₹19,900 (90ml)
  "amouage-interlude-man": "luxury", // ~₹15,850
  "nishane-ani": "luxury", // ~₹17,500
  "lv-imagination": "luxury", // ~₹28,990
  "tomford-neroli-portofino": "luxury", // ~₹18,000
  "tomford-tobacco-vanille": "luxury", // ~₹18,900
  "creed-royal-oud": "luxury", // ~₹25,950
  "roja-enigma": "luxury", // ~₹35,000+
  "nautica-voyage": "mid", // ~₹2,500
  "versace-pour-homme": "luxury", // ~₹6,000 authentic
  "missoni-wave": "mid", // ~₹5,000–6,600 (street ~5,500)
  "issey-leau-dissey": "luxury", // ~₹6,000 (Pour Homme)
  "davidoff-cool-water": "mid", // ~₹3,800
  "montblanc-explorer": "luxury", // ~₹6,750
  "bentley-for-men-intense": "mid", // ~₹3,500
  "halloween-man-x": "mid", // ~₹4,000 (125ml ₹5,500)
  "burberry-london-for-men": "luxury", // ~₹6,000–6,700
  "mercedes-benz-club-black": "mid", // ~₹5,250
  "ck-one-shock": "mid", // ~₹2,700
  "franck-olivier-oud-touch": "value", // ~₹2,200
  "rasasi-hawas": "mid", // ~₹3,000–4,100
  "afnan-9am-dive": "mid", // ~₹3,000
  "lattafa-fakhar-black": "value", // ~₹2,000
  "afnan-9pm": "mid", // ~₹2,800
  "cremo-spice-black-vanilla": "value", // ~₹2,000 (imported)
  "lattafa-asad": "value", // ~₹2,000
  "ma-porto-neroli": "value", // ~₹2,000 (80ml)
  "ah-amber-oud-aqua-dubai": "mid", // ~₹4,500 (street, vs ₹9,990 retail)
  "aam-kaaf": "mid", // ~₹2,600–3,400
  "ma-jean-lowe-immortel": "mid", // ~₹2,400–3,000
  "afnan-turathi-blue": "mid", // ~₹2,350
  "lattafa-maahir-legacy": "mid", // ~₹2,100–2,550
  "aam-exotic": "value", // ~₹2,000
  "br-78-vintage-green": "luxury", // ~₹6,000+ (75ml ₹6,650)
  "clean-reserve-skin": "luxury", // ~₹6,000–8,000
  "ah-neroli-canvas": "value", // ~₹1,800 (Portfolio 75ml)
  "sa-shaghaf-oud-tonka": "mid", // ~₹4,950 (75ml)
  "ah-amber-oud-tobacco": "mid", // ~₹4,500 (60ml street)
  "ah-amber-oud-ruby": "mid", // ~₹4,500 (60ml street)
  "pc-rifaaqat": "value", // ~₹1,800
  "ma-fabulo-intense": "value", // ~₹1,700 (80ml)
  "afnan-supremacy-incense": "mid", // ~₹3,850
  "lalique-white-in-black": "mid", // ~₹4,590 (125ml)
  "fw-suits": "value", // ~₹1,650
  "arabiyat-hypnotic-oud": "mid", // ~₹3,500–4,250
  "sa-casablanca": "mid", // ~₹2,500–3,500
  "em-molecule-01": "luxury", // ~₹6,500 (100ml)
  "commodity-paper": "luxury", // ~₹6,000–7,000 (imported)
  "lalique-white": "mid", // ~₹3,061–3,999
  "montblanc-explorer-ultra-blue": "luxury", // ~₹6,000
  "montblanc-legend-spirit": "mid", // ~₹5,500 (200ml ₹11,600)
  "nr-pure-musc": "luxury", // ~₹6,000–8,000
  "nr-musc-noir": "luxury", // ~₹7,000–8,950
  "afnan-supremacy-collectors": "mid", // ~₹4,500
  "sa-shaghaf-oud-cpo": "mid", // ~₹3,650–4,990
  "ah-amber-oud-gold": "mid", // ~₹4,000–4,500
  "ah-azlan-oud-amber": "mid", // ~₹4,500–5,500 (extrait)
  "lattafa-angham": "mid", // ~₹2,800–3,100
  "ah-amber-oud-carbon": "mid", // ~₹3,500–4,500
  "aam-blue-by-ahmed": "mid", // ~₹2,500–3,000
  "aam-rawdha": "mid", // ~₹4,000–4,875 (50ml)
  "aam-oud-crush": "mid", // ~₹4,650 (75ml)
  "aam-blu-oud": "mid", // ~₹3,750–5,000
  "lattafa-al-nashama-caprice": "mid", // ~₹2,200–2,400
  "lattafa-khamrah-waha": "mid", // ~₹3,000–3,450
  "ajmal-kuro": "mid", // ~₹2,400–3,000
  "mfk-aqua-universalis": "luxury", // ~₹15,000+
  "chanel-chance-eau-tendre": "luxury", // ~₹14,575+
  "dg-light-blue-intense": "luxury", // ~₹9,750
  "armani-acqua-di-gioia": "luxury", // ~₹6,000–8,000
  "jomalone-wood-sage-sea-salt": "luxury", // ~₹10,000+
  "hermes-jardin-nil": "luxury", // ~₹9,000+
  "byredo-bal-dafrique": "luxury", // ~₹17,900
  "mancera-sicily": "luxury", // ~₹8,750
  "ea-green-tea": "mid", // ~₹2,560–3,780
  "aerin-hibiscus-palm": "luxury", // ~₹15,000+
  "ysl-black-opium": "luxury", // ~₹8,000+
  "ch-good-girl": "luxury", // ~₹7,830+
  "dior-hypnotic-poison": "luxury", // ~₹8,000+
  "ysl-libre-intense": "luxury", // ~₹11,800+
  "kayali-vanilla-28": "luxury", // ~₹8,600 (50ml)
  "pdm-delina-exclusif": "luxury", // ~₹22,900+
  "guerlain-shalimar": "luxury", // ~₹12,900+
  "lattafa-khamrah-qahwa": "mid", // ~₹3,450–4,400
  "mugler-alien": "mid", // ~₹5,800 (60ml)
  "chloe-edp": "luxury", // ~₹11,995 (75ml)
  "prada-paradoxe": "luxury", // ~₹11,730+
  "lancome-idole": "luxury", // ~₹8,400+
  "diptyque-eau-rose": "luxury", // ~₹15,000+
  "glossier-you": "luxury", // ~₹7,500 (50ml)
  "gucci-flora-gardenia": "luxury", // ~₹8,450+
  "issey-leau-dissey-femme": "luxury", // ~₹6,000–8,120
  "mfk-br540": "luxury", // ~₹27,950
  "tomford-lost-cherry": "luxury", // ~₹30,400 (50ml)
  "jpg-la-belle": "luxury", // ~₹9,180+
  "vr-flowerbomb": "luxury", // ~₹8,000+
  "valentino-born-in-roma-intense": "luxury", // ~₹14,050
  "tomford-black-orchid": "luxury", // ~₹13,000+
  "byredo-mojave-ghost": "luxury", // ~₹19,500+
  "lattafa-nebras": "mid", // ~₹2,800–4,320
  "zara-red-temptation": "value", // ~₹899 (80ml, Zara India)
  "xerjoff-dama-bianca": "luxury", // ~₹15,000+
  "amouage-guidance": "luxury", // ~₹33,950
  "nishane-hundred-silent-ways": "luxury", // ~₹20,000+
  "chanel-allure-edition-blanche": "luxury", // ~₹13,800
  "tomford-mandarino-di-amalfi": "luxury", // ~₹22,600
  "jpg-le-beau": "luxury", // ~₹8,850 (125ml)
  "lv-afternoon-swim": "luxury", // ~₹31,500
  "adp-fico-di-amalfi": "luxury", // ~₹10,500+
  "chanel-chance-eau-fraiche": "luxury", // ~₹10,000+
  "dior-jadore-parfum-deau": "luxury", // ~₹11,200
  "versace-dylan-purple": "luxury", // ~₹10,400+
  "armani-ocean-di-gioia": "luxury", // ~₹7,680
  "dg-dolce-garden": "luxury", // ~₹7,000–9,000
  "amouage-jubilation-xxv": "luxury", // ~₹25,500+
  "dior-homme-intense": "luxury", // ~₹12,400+
  "tomford-oud-wood": "luxury", // ~₹20,550
  "chanel-le-lion": "luxury", // ~₹20,000+
  "jpg-le-male-le-parfum": "luxury", // ~₹8,100 (125ml)
  "ysl-libre-le-parfum": "luxury", // ~₹12,500
  "chanel-coco-noir": "luxury", // ~₹13,000 (genuine)
  "givenchy-linterdit-rouge": "luxury", // ~₹12,100
  "burberry-goddess": "luxury", // ~₹6,795
  "lancome-la-nuit-tresor": "luxury", // ~₹8,000+
  "chanel-platinum-egoiste": "luxury", // ~₹11,500+
  "prada-lhomme": "luxury", // ~₹9,550
  "hermes-terre-eau-givree": "luxury", // ~₹10,250
  "dior-homme-original": "luxury", // ~₹12,400
  "chanel-coco-mademoiselle": "luxury", // ~₹13,000+
  "miss-dior-blooming-bouquet": "luxury", // ~₹15,400+
  "valentino-born-in-roma-green": "luxury", // ~₹12,000+
  "gucci-flora-gardenia-intense": "luxury", // ~₹13,450
  "hermes-twilly": "luxury", // ~₹13,600
  "amouage-reflection-man": "luxury", // ~₹26,500+
  "dior-sauvage-elixir": "luxury", // ~₹16,500+
  "chanel-bleu-parfum": "luxury", // ~₹23,750
  "tomford-noir-extreme": "luxury", // ~₹13,200+
  "jpg-le-beau-le-parfum": "luxury", // ~₹8,450 (75ml)
  "ch-very-good-girl": "luxury", // ~₹6,600+
  "jpg-scandal-le-parfum": "luxury", // ~₹8,550
  "armani-si-intense": "luxury", // ~₹15,999
  "dior-poison-girl": "luxury", // ~₹13,500
  "givenchy-linterdit-intense": "luxury", // ~₹14,800
  "ajmal-blu": "value", // ~₹1,800–2,400 (90ml, street ~2,000)
  "ajmal-shiro": "mid", // ~₹2,200–2,750
  "ajmal-silver-shade": "value", // ~₹999–1,540
  "armaf-cdn-milestone": "mid", // ~₹3,000 (105ml street)
  "armaf-tres-nuit": "value", // ~₹1,951–2,525 (street ~2,200)
  "lattafa-liam-blue-shine": "value", // ~₹1,745–2,840 (street ~2,000)
  "ajmal-evoke-gold": "mid", // ~₹2,475–2,925
  "ajmal-titanium": "value", // ~₹1,200–1,500
  "armaf-cdn-iconic": "mid", // ~₹3,000 (105ml)
  "armaf-cdn-urban-elixir": "mid", // ~₹4,750 (105ml)
  "lattafa-asad-bourbon": "mid", // ~₹2,299–3,082
  "lattafa-asad-elixir": "mid", // ~₹2,999–3,825
  "lattafa-ameer-al-oudh-intense-oud": "value", // ~₹2,000–2,149
  "lattafa-badee-al-oud-amethyst": "mid", // ~₹2,754–4,700
  "lattafa-badee-al-oud-honor-glory": "mid", // ~₹2,890–4,000
  "lattafa-qaed-al-fursan": "value", // ~₹1,849–2,700 (street ~2,200)
  "lattafa-qaed-al-fursan-untamed": "value", // ~₹1,849–2,500 (street ~2,000)
  "lattafa-sheikh-al-shuyukh-final-edition": "value", // ~₹1,650–2,000
};
