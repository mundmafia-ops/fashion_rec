import type { Fragrance, Gender, Performance, ShopLinks } from "@/lib/types";
import { extraFragrances } from "@/data/fragrances-extra";

const baseFragrances: Fragrance[] = [
  // ─────────────── NICHE HOUSES · PREMIUM ───────────────
  {
    id: "creed-virgin-island-water",
    brand: "Creed",
    name: "Virgin Island Water",
    description: "A photorealistic blast of lime, coconut, and white rum.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Citrus", "Fresh", "Sweet"],
    notes: {
      top: ["Lime", "Coconut", "Bergamot", "Mandarin"],
      middle: ["Ginger", "Jasmine", "Hibiscus", "Ylang-Ylang"],
      base: ["White Rum", "Sugar Cane", "Musk"],
    },
    accent: ["#B9D98C", "#7FB36B"],
  },
  {
    id: "xerjoff-torino21",
    brand: "Xerjoff",
    name: "Torino21",
    description: "A vibrant, icy mojito-like blend of mint, lemon, and basil.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Fresh", "Citrus"],
    notes: {
      top: ["Mint", "Lemon", "Basil", "Bergamot"],
      middle: ["Rosemary", "Lavender", "Geranium"],
      base: ["Musk", "Verbena", "Cedar"],
    },
    accent: ["#BFE3C9", "#7FC8A9"],
  },
  {
    id: "roja-elysium",
    brand: "Roja Parfums",
    name: "Elysium Pour Homme",
    description: "An effervescent burst of grapefruit, lemon, and vetiver.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Citrus", "Fresh", "Woody"],
    notes: {
      top: ["Grapefruit", "Bergamot", "Lemon", "Black Currant"],
      middle: ["Vetiver", "Cedar", "Cypress", "Juniper"],
      base: ["Ambergris", "Leather", "Musk"],
    },
    accent: ["#F2A6A0", "#D9786B"],
  },
  {
    id: "nishane-wulong-cha",
    brand: "Nishane",
    name: "Wulong Cha",
    description: "A powerhouse oolong tea fragrance with bright bergamot.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Citrus", "Fresh", "Woody"],
    notes: {
      top: ["Bergamot", "Orange", "Lemon"],
      middle: ["Oolong Tea", "Nutmeg", "Jasmine"],
      base: ["Musk", "Fig", "Amber"],
    },
    accent: ["#D9C58A", "#A88B4F"],
  },
  {
    id: "mfk-gentle-fluidity-silver",
    brand: "Maison Francis Kurkdjian",
    name: "Gentle Fluidity Silver",
    description: "A crisp, metallic blend of juniper berries and vanilla.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Fresh", "Woody", "Sweet"],
    notes: {
      top: ["Juniper Berries", "Coriander", "Nutmeg"],
      middle: ["Vanilla", "Amber Wood"],
      base: ["Musk", "Woods"],
    },
    accent: ["#D7DEE2", "#A9B4BC"],
  },
  {
    id: "amouage-beach-hut-man",
    brand: "Amouage",
    name: "Beach Hut Man",
    description: "Intense, heavy mint, ivy, and vetiver.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Fresh", "Woody"],
    notes: {
      top: ["Mint", "Galbanum", "Bergamot"],
      middle: ["Ivy", "Vetiver", "Geranium"],
      base: ["Myrrh", "Musk", "Woody Notes"],
    },
    accent: ["#9FBE9A", "#5E8F6E"],
  },
  {
    id: "goldfield-banks-bohemian-lime",
    brand: "Goldfield & Banks",
    name: "Bohemian Lime",
    description: "A woody citrus featuring Australian finger lime and vetiver.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Citrus", "Woody", "Fresh"],
    notes: {
      top: ["Finger Lime", "Coriander", "Bergamot"],
      middle: ["Vetiver", "Patchouli"],
      base: ["Cedarwood", "Sandalwood", "Musk"],
    },
    accent: ["#CFE08A", "#8FB14F"],
  },
  {
    id: "pdm-sedley",
    brand: "Parfums de Marly",
    name: "Sedley",
    description: "A sparkling opening of mint and citrus over smooth woods.",
    season: "summer",
    times: ["day"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Fresh", "Citrus", "Woody"],
    notes: {
      top: ["Mint", "Lemon", "Bergamot"],
      middle: ["Rosemary", "Lavender", "Watery Notes"],
      base: ["Ambroxan", "Cedarwood", "Vetiver"],
    },
    accent: ["#CFEAD8", "#93C4B0"],
  },
  {
    id: "bykilian-angels-share",
    brand: "By Kilian",
    name: "Angels' Share",
    description: "Warm apple pie soaked in high-end cognac and cinnamon.",
    season: "winter",
    times: ["night"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Gourmand", "Sweet", "Spicy"],
    notes: {
      top: ["Cognac"],
      middle: ["Cinnamon", "Tonka Bean", "Oak"],
      base: ["Vanilla", "Praline", "Sandalwood"],
    },
    accent: ["#C77A3E", "#8A3F1E"],
  },
  {
    id: "xerjoff-naxos",
    brand: "Xerjoff",
    name: "Naxos",
    description: "A smooth blend of sweet honey, tobacco, and lavender.",
    season: "winter",
    times: ["night"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Sweet", "Gourmand", "Spicy"],
    notes: {
      top: ["Lavender", "Bergamot", "Clary Sage"],
      middle: ["Honey", "Cinnamon", "Tobacco", "Jasmine"],
      base: ["Vanilla", "Tonka Bean", "Cashmeran"],
    },
    accent: ["#E0A84E", "#A66A23"],
  },
  {
    id: "mfk-grand-soir",
    brand: "Maison Francis Kurkdjian",
    name: "Grand Soir",
    description: "A warm, glowing cloud of rich amber and vanilla.",
    season: "winter",
    times: ["night"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Sweet", "Gourmand", "Woody"],
    notes: {
      top: ["Cistus Labdanum"],
      middle: ["Benzoin Siam", "Tonka Bean"],
      base: ["Amber", "Vanilla", "Sandalwood"],
    },
    accent: ["#E2A957", "#B06A24"],
  },
  {
    id: "pdm-layton",
    brand: "Parfums de Marly",
    name: "Layton",
    description:
      "An intoxicating blend of green apple, vanilla, cardamom, and woods.",
    season: "winter",
    times: ["night"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Sweet", "Spicy", "Floral"],
    notes: {
      top: ["Apple", "Lavender", "Bergamot", "Mandarin"],
      middle: ["Jasmine", "Violet", "Geranium"],
      base: ["Vanilla", "Cardamom", "Guaiac Wood", "Sandalwood"],
    },
    accent: ["#BFD08A", "#C99A57"],
  },
  {
    id: "initio-side-effect",
    brand: "Initio Parfums Privés",
    name: "Side Effect",
    description:
      "A dark, seductive powerhouse featuring rum, vanilla, and tobacco.",
    season: "winter",
    times: ["night"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Sweet", "Gourmand", "Spicy"],
    notes: {
      top: ["Rum", "Cinnamon"],
      middle: ["Tobacco", "Saffron", "Tuberose"],
      base: ["Vanilla", "Sandalwood", "Tonka Bean"],
    },
    accent: ["#8A4B2E", "#4A2418"],
  },
  {
    id: "amouage-interlude-man",
    brand: "Amouage",
    name: "Interlude Man",
    description:
      "An incredibly potent, smoky, incense-heavy winter fragrance.",
    season: "winter",
    times: ["night"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Spicy", "Leather", "Woody"],
    notes: {
      top: ["Oregano", "Pimento", "Bergamot"],
      middle: ["Incense", "Amber", "Opoponax"],
      base: ["Leather", "Oud", "Patchouli", "Sandalwood"],
    },
    accent: ["#8A8F86", "#3E443E"],
  },
  {
    id: "nishane-ani",
    brand: "Nishane",
    name: "Ani",
    description: "A dense, rich vanilla fragrance balanced with spicy ginger.",
    season: "winter",
    times: ["night"],
    houseType: "niche",
    priceTier: "premium",
    families: ["Sweet", "Spicy", "Woody"],
    notes: {
      top: ["Ginger", "Bergamot", "Pink Pepper"],
      middle: ["Black Currant", "Cardamom", "Jasmine"],
      base: ["Vanilla", "Benzoin", "Cedar", "Tonka Bean"],
    },
    accent: ["#E6CF9A", "#C79A4F"],
  },

  // ─────────────── DESIGNER HOUSES · PREMIUM ───────────────
  {
    id: "lv-imagination",
    brand: "Louis Vuitton",
    name: "Imagination",
    description: "A luxurious, soapy blend of citron, black tea, and ambroxan.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "premium",
    families: ["Citrus", "Spicy", "Woody"],
    notes: {
      top: ["Citron", "Bergamot", "Orange", "Petitgrain"],
      middle: ["Black Tea", "Nigerian Ginger", "Cinnamon"],
      base: ["Ambroxan", "Guaiac Wood", "Cypress"],
    },
    accent: ["#E8C766", "#C7A24A"],
  },
  {
    id: "tomford-neroli-portofino",
    brand: "Tom Ford",
    name: "Neroli Portofino",
    description: "A crisp, soapy blend of neroli and bergamot.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "premium",
    families: ["Citrus", "Floral", "Fresh"],
    notes: {
      top: ["Bergamot", "Mandarin", "Lemon", "Myrtle"],
      middle: ["African Orange Flower", "Neroli", "Jasmine"],
      base: ["Amber", "Ambrette", "Musk"],
    },
    accent: ["#EDE3C9", "#CFE0B0"],
  },
  {
    id: "tomford-tobacco-vanille",
    brand: "Tom Ford",
    name: "Tobacco Vanille",
    description:
      "A heavy, spicy blend of dried pipe tobacco and rich vanilla.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "premium",
    families: ["Sweet", "Spicy", "Gourmand"],
    notes: {
      top: ["Tobacco Leaf", "Spicy Notes", "Ginger"],
      middle: ["Vanilla", "Cacao", "Tonka Bean", "Tobacco Blossom"],
      base: ["Dried Fruits", "Woody Notes"],
    },
    accent: ["#B07A45", "#5E3A1E"],
  },
  {
    id: "creed-royal-oud",
    brand: "Creed",
    name: "Royal Oud",
    description:
      "A dry, sophisticated blend of cedarwood, pink pepper, and clean oud.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "premium",
    families: ["Woody", "Spicy"],
    notes: {
      top: ["Pink Pepper", "Lemon", "Bergamot"],
      middle: ["Cedar", "Angelica", "Galbanum"],
      base: ["Oud", "Sandalwood", "Musk", "Tonka Bean"],
    },
    accent: ["#B79B7A", "#6E523A"],
  },
  {
    id: "roja-enigma",
    brand: "Roja Parfums",
    name: "Enigma Pour Homme",
    description:
      "A wealthy-smelling blend of cognac, vanilla, and cherry-cola vibes.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "premium",
    families: ["Sweet", "Gourmand", "Spicy"],
    notes: {
      top: ["Bergamot", "Lemon"],
      middle: ["Heliotrope", "Jasmine", "Cinnamon"],
      base: ["Cognac", "Vanilla", "Tobacco", "Benzoin"],
    },
    accent: ["#B5454C", "#7C3238"],
  },

  // ─────────────── DESIGNER HOUSES · BUDGET ───────────────
  {
    id: "nautica-voyage",
    brand: "Nautica",
    name: "Voyage",
    description: "A fresh, salty, green-apple and cucumber aquatic.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Fresh", "Aquatic", "Woody"],
    notes: {
      top: ["Green Leaves", "Apple", "Water Notes"],
      middle: ["Lotus", "Mimosa", "Cedar"],
      base: ["Musk", "Amber", "Oakmoss"],
    },
    accent: ["#A9D9C0", "#6FB39A"],
  },
  {
    id: "versace-pour-homme",
    brand: "Versace",
    name: "Pour Homme",
    description:
      "A clean, professional office scent with bright lemon, neroli, and cedar.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Citrus", "Fresh", "Woody"],
    notes: {
      top: ["Lemon", "Neroli", "Bergamot", "Rose de Mai"],
      middle: ["Hyacinth", "Cedar", "Geranium", "Clary Sage"],
      base: ["Tonka Bean", "Amber", "Musk"],
    },
    accent: ["#D9E3A0", "#A8C46A"],
  },
  {
    id: "missoni-wave",
    brand: "Missoni",
    name: "Wave",
    description:
      "A smooth hybrid between Chanel Allure Homme Sport and Versace Pour Homme.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Aquatic", "Fresh", "Floral"],
    notes: {
      top: ["Sea Notes", "Mandarin", "Cardamom"],
      middle: ["Egyptian Jasmine", "Lavender", "Sage"],
      base: ["Vanilla", "Oakmoss", "Patchouli"],
    },
    accent: ["#A0C9D9", "#6F9FB3"],
  },
  {
    id: "issey-leau-dissey",
    brand: "Issey Miyake",
    name: "L'Eau d'Issey Pour Homme",
    description: "A tart, sharp yuzu mixed with floral and woody notes.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Aquatic", "Citrus", "Woody"],
    notes: {
      top: ["Yuzu", "Lemon", "Bergamot", "Tarragon"],
      middle: ["Blue Lotus", "Nutmeg", "Cinnamon", "Lily"],
      base: ["Cedar", "Sandalwood", "Vetiver", "Musk"],
    },
    accent: ["#BFE0D9", "#7FB3A8"],
  },
  {
    id: "davidoff-cool-water",
    brand: "Davidoff",
    name: "Cool Water",
    description: "A classic, minty, lavender-heavy fresh ocean breeze.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Aquatic", "Fresh", "Woody"],
    notes: {
      top: ["Mint", "Lavender", "Sea Water", "Coriander"],
      middle: ["Sandalwood", "Geranium", "Neroli", "Jasmine"],
      base: ["Musk", "Cedar", "Tobacco", "Oakmoss"],
    },
    accent: ["#A0C4E8", "#5E8FC7"],
  },
  {
    id: "montblanc-explorer",
    brand: "Montblanc",
    name: "Explorer",
    description:
      "A smooth take on the Aventus DNA, focusing on bergamot and ambroxan.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Woody", "Fresh", "Leather"],
    notes: {
      top: ["Bergamot", "Pink Pepper", "Clary Sage"],
      middle: ["Vetiver", "Leather"],
      base: ["Ambroxan", "Akigalawood", "Patchouli", "Cacao"],
    },
    accent: ["#BFD0A0", "#8AA86F"],
  },
  {
    id: "bentley-for-men-intense",
    brand: "Bentley",
    name: "For Men Intense",
    description:
      "A mature, masculine blend of rum, leather, and dark woods.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Spicy", "Leather", "Woody"],
    notes: {
      top: ["Black Pepper", "Bergamot", "Cardamom"],
      middle: ["Rum", "Leather", "Cedar", "Labdanum"],
      base: ["Incense", "Sandalwood", "Amber"],
    },
    accent: ["#8A5A3A", "#4A2E1E"],
  },
  {
    id: "halloween-man-x",
    brand: "Halloween",
    name: "Man X",
    description: "A rich blend of roasted coffee, whiskey, and leather.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Gourmand", "Leather", "Sweet"],
    notes: {
      top: ["Cardamom", "Lavender", "Bergamot"],
      middle: ["Coffee", "Whiskey", "Leather", "Cinnamon"],
      base: ["Tonka Bean", "Amber", "Sandalwood"],
    },
    accent: ["#6E4A30", "#2E1C12"],
  },
  {
    id: "burberry-london-for-men",
    brand: "Burberry",
    name: "London for Men",
    description: "A cozy blend of pine needles, cinnamon, and port wine.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Spicy", "Leather", "Woody"],
    notes: {
      top: ["Cinnamon", "Lavender", "Bergamot"],
      middle: ["Leather", "Mimosa", "Port Wine"],
      base: ["Tobacco Leaf", "Guaiac Wood", "Oakmoss", "Opoponax"],
    },
    accent: ["#7C5A4A", "#4A2E2E"],
  },
  {
    id: "mercedes-benz-club-black",
    brand: "Mercedes-Benz",
    name: "Club Black",
    description:
      "A remarkably high-quality, smoky, deep vanilla fragrance.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Sweet", "Woody", "Floral"],
    notes: {
      top: ["Bergamot", "Apple", "Mint"],
      middle: ["Jasmine", "Incense", "Patchouli"],
      base: ["Vanilla", "Benzoin", "Ambroxan", "Leather"],
    },
    accent: ["#6E665E", "#2E2A26"],
  },
  {
    id: "ck-one-shock",
    brand: "Calvin Klein",
    name: "CK One Shock",
    description:
      "A budget winter tobacco scent wrapped in sweet energy-drink notes.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Spicy", "Sweet", "Woody"],
    notes: {
      top: ["Lavender", "Clementine", "Cucumber", "Basil"],
      middle: ["Cardamom", "Pepper", "Tobacco", "Geranium"],
      base: ["Amber", "Musk", "Patchouli"],
    },
    accent: ["#C76F94", "#6E2A4A"],
  },
  {
    id: "franck-olivier-oud-touch",
    brand: "Franck Olivier",
    name: "Oud Touch",
    description:
      "A potent, dark, and syrupy blend of rose, caramel, and oud.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Sweet", "Floral", "Woody"],
    notes: {
      top: ["Caramel", "Raspberry", "Saffron"],
      middle: ["Rose", "Patchouli", "Olibanum"],
      base: ["Amber", "Vanilla", "Musk", "Oud"],
    },
    accent: ["#B7245C", "#5E2330"],
  },

  // ─────────────── MIDDLE EASTERN & ALTERNATIVE · BUDGET ───────────────
  {
    id: "rasasi-hawas",
    brand: "Rasasi",
    name: "Hawas for Men",
    description:
      "A powerhouse blend of sweet plum, aquatic notes, and cinnamon.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Fresh", "Aquatic", "Spicy"],
    notes: {
      top: ["Apple", "Bergamot", "Cinnamon"],
      middle: ["Water Notes", "Plum", "Cardamom"],
      base: ["Ambergris", "Musk", "Cedar"],
    },
    accent: ["#8AB0C9", "#5E7FA8"],
  },
  {
    id: "armaf-cdnim",
    brand: "Armaf",
    name: "Club de Nuit Intense Man",
    description:
      "A sharp lemon opening that dries down into a smoky pineapple and birch.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Citrus", "Woody", "Sweet"],
    notes: {
      top: ["Lemon", "Pineapple", "Blackcurrant", "Apple"],
      middle: ["Birch", "Jasmine", "Rose"],
      base: ["Musk", "Ambergris", "Vanilla", "Patchouli"],
    },
    accent: ["#D9C77A", "#A88B4F"],
  },
  {
    id: "afnan-9am-dive",
    brand: "Afnan",
    name: "9am Dive",
    description:
      "A fresh, fruity, shower-gel scent blending elements of Bleu de Chanel and YSL Y.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Fresh", "Citrus", "Woody"],
    notes: {
      top: ["Mint", "Black Currant", "Lemon"],
      middle: ["Apple", "Incense", "Lavender"],
      base: ["Ginger", "Sandalwood", "Amber"],
    },
    accent: ["#A6C9E8", "#6F94C7"],
  },
  {
    id: "lattafa-fakhar-black",
    brand: "Lattafa",
    name: "Fakhar Black",
    description:
      "A budget alternative to YSL Y EDP featuring sweet apple, ginger, and sage.",
    season: "summer",
    times: ["day"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Fresh", "Spicy", "Sweet"],
    notes: {
      top: ["Apple", "Ginger", "Bergamot"],
      middle: ["Sage", "Lavender", "Geranium"],
      base: ["Amberwood", "Tonka Bean", "Cedar"],
    },
    accent: ["#C9D98A", "#8AA84F"],
  },
  {
    id: "lattafa-khamrah",
    brand: "Lattafa",
    name: "Khamrah",
    description: "A viral, sweet, dates-and-praline powerhouse.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Gourmand", "Sweet", "Spicy"],
    notes: {
      top: ["Cinnamon", "Nutmeg", "Bergamot"],
      middle: ["Dates", "Praline", "Tuberose"],
      base: ["Vanilla", "Tonka Bean", "Amberwood", "Benzoin"],
    },
    accent: ["#C98A4E", "#7A4A28"],
  },
  {
    id: "afnan-9pm",
    brand: "Afnan",
    name: "9pm",
    description: "A loud, sweet, bubblegum-like vanilla and apple scent.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Sweet", "Floral", "Gourmand"],
    notes: {
      top: ["Apple", "Cinnamon", "Wild Lavender", "Bergamot"],
      middle: ["Orange Blossom", "Lily-of-the-Valley"],
      base: ["Vanilla", "Tonka Bean", "Amber", "Patchouli"],
    },
    accent: ["#E8A6C0", "#C76F94"],
  },
  {
    id: "cremo-spice-black-vanilla",
    brand: "Cremo",
    name: "Spice & Black Vanilla",
    description: "A warm, spicy vanilla and cardamom scent.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Sweet", "Spicy", "Gourmand"],
    notes: {
      top: ["Spices", "Bergamot"],
      middle: ["Cardamom", "Cinnamon"],
      base: ["Black Vanilla", "Amber", "Sandalwood"],
    },
    accent: ["#C9A06A", "#6E4A2E"],
  },
  {
    id: "lattafa-asad",
    brand: "Lattafa",
    name: "Asad",
    description:
      "A spicy, peppery, and ambery alternative to Dior Sauvage Elixir.",
    season: "winter",
    times: ["night"],
    houseType: "designer",
    priceTier: "budget",
    families: ["Spicy", "Gourmand", "Woody"],
    notes: {
      top: ["Black Pepper", "Pineapple", "Bergamot"],
      middle: ["Patchouli", "Coffee", "Lavender"],
      base: ["Vanilla", "Amber", "Labdanum", "Cedar"],
    },
    accent: ["#C98A5A", "#7C3238"],
  },
];

/** Full catalogue: original men's-leaning core + the expanded edit. */
export const fragrances: Fragrance[] = [...baseFragrances, ...extraFragrances];

/** Marketed gender, defaulting legacy (untagged) entries to men's. */
export function genderOf(f: Fragrance): Gender {
  return f.gender ?? "men";
}

/**
 * Default Amazon Associates store: the US marketplace. India visitors are
 * redirected to amazon.in (tag fragrandise-21) client-side; see the geo
 * localisation in index.astro. The archived per-product direct links live in
 * ./affiliate-links.backup.json.
 */
const AMAZON_TLD = "com";
const AMAZON_TAG = "fragrandise-20";

/**
 * Localized Amazon search link for a fragrance. Defaults to the US store; the
 * client swaps the domain + tag to amazon.in for India visitors (see
 * index.astro). Searching by brand + name lets the shopper pick the exact
 * concentration/size available in their marketplace.
 */
export function shopLinks(f: Fragrance): ShopLinks {
  const q = encodeURIComponent(`${f.brand} ${f.name}`);
  return {
    amazon: `https://www.amazon.${AMAZON_TLD}/s?k=${q}&tag=${AMAZON_TAG}`,
  };
}

/** Derive sillage (scent trail) + projection (push) from the scent profile. */
export function performanceOf(f: Fragrance): Performance {
  let s = f.season === "winter" ? 2 : -1;
  if (f.times.includes("night")) s += 1;
  const fam = f.families;
  if (fam.includes("Gourmand")) s += 2;
  if (fam.includes("Sweet")) s += 1;
  if (fam.includes("Spicy")) s += 1;
  if (fam.includes("Leather")) s += 2;
  if (fam.includes("Woody")) s += 1;
  if (fam.includes("Floral")) s += 0.5;
  if (fam.includes("Citrus")) s -= 2;
  if (fam.includes("Aquatic")) s -= 2;
  if (fam.includes("Fresh")) s -= 1;
  return {
    projection: s >= 3 ? "High" : "Low",
    sillage: s >= 2 ? "High" : "Low",
  };
}

/** Path to the product photo for a fragrance (transparent PNG in /public). */
export function fragranceImage(id: string): string {
  return `/perfumes/${id}.png`;
}

/** Two-letter house initials used on the bottle illustration. */
export function initials(brand: string): string {
  const words = brand.replace(/&/g, "").split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return brand.slice(0, 2).toUpperCase();
}

export function getFragrance(id: string): Fragrance | undefined {
  return fragrances.find((f) => f.id === id);
}
