export const PRODUCT = {
  id: "moon-oud-50",
  name: "Moon Oud",
  tagline: "Deep. Mysterious. Unforgettable.",
  size: "50ml / 1.7 fl. oz.",
  price: 499,
  originalPrice: 999,
  collection: "Unisex Collection",
  description:
    "An olfactive nocturne built around the rare warmth of oud. Moon Oud opens with a cool, moonlit air before settling into a deep, resinous heart of agarwood, amber and quiet smoke — a fragrance crafted not merely to be worn, but remembered.",
  notes: {
    top: ["Bergamot", "Pink Pepper", "Saffron"],
    heart: ["Bulgarian Rose", "Cedarwood", "Iris"],
    base: ["Agarwood (Oud)", "Amber", "Musk", "Vanilla"],
  },
} as const;

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const INSTAGRAM = "https://www.instagram.com/shivrra_busi_ss";
export const INSTAGRAM_HANDLE = "@shivrra_busi_ss";
export const EMAIL = "shivrra.busi.ss@gmail.com";
