export const business = {
  name: "Dose of V Cafe",
  tagline: "Specialty Coffee",
  city: "Glendale",
  state: "CA",
  locationLabel: "Glendale, CA",
  instagram: {
    handle: "@doseofvcafe",
    url: "https://www.instagram.com/doseofvcafe/",
  },
  order: {
    method: "DM to place an order",
    payment: ["Zelle", "Cash"],
    fulfillment: "Pickup only",
  },
  pricing: "16oz $7  ·  20oz $8  ·  Iced only",
  milkOptions: ["Oat", "Whole", "Almond"],
  description:
    "A small-batch specialty coffee shop pouring carefully sourced, thoughtfully brewed coffee in Glendale, California. Every order is placed by DM and picked up in person — no middlemen, no markup, just a genuine cup made to order.",
};

export type SignatureItem = {
  name: string;
  description: string;
  photo?: string;
};

export const signatureLattes: SignatureItem[] = [
  {
    name: "Mazapan Latte",
    description:
      "Double shot of espresso with mazapan pieces and cinnamon, your choice of milk topped off with a foam of your choice (mazapan or horchata).",
  },
  {
    name: "Dose Of Mocha",
    description:
      "Double shot of espresso with white chocolate syrup, your choice of milk topped off with a vanilla foam and cocoa puffs.",
    photo: "/photos/cocoa-puffs.jpg",
  },
  {
    name: "Cookie Butter",
    description:
      "Double shot of espresso with brown sugar and biscoff, your choice of milk topped off with a cookie butter foam.",
  },
  {
    name: "Cinnamon Roll",
    description:
      "Double shot of espresso with brown sugar and cinnamon, your choice of milk topped off with a cinnamon roll foam.",
  },
  {
    name: "Banana Dose",
    description:
      "Double shot of espresso with brown sugar and cinnamon, your choice of milk topped off with a banana foam.",
    photo: "/photos/must-have.jpg",
  },
  {
    name: "Dirty Dose",
    description:
      "Double shot of espresso with horchata and your choice of milk, topped off with your choice of foam — horchata, banana, strawberry, or mazapan.",
  },
  {
    name: "Cereal Milk",
    description:
      "Double shot of espresso with brown sugar, cap'n crunch cereal pieces, and your choice of milk. Lavender or vanilla foam if wanted.",
  },
];

export const fallMenu: SignatureItem[] = [
  {
    name: "Pumpkin Dose",
    description:
      "Double shot of espresso with hints of brown sugar and pumpkin spice, your choice of milk topped off with a sweet cream foam.",
    photo: "/photos/pumpkin-dose.jpg",
  },
  {
    name: "Spiced Cookie",
    description:
      "Double shot of espresso with hints of brown sugar and pumpkin spice, your choice of milk topped off with a cookie butter foam.",
  },
  {
    name: "V's Spice",
    description:
      "Double shot of espresso with horchata, your choice of milk, topped off with a pumpkin foam.",
  },
];

export const fanFavorites: SignatureItem[] = [
  {
    name: "Banana Dose",
    description: "Brown sugar, cinnamon and banana foam.",
    photo: "/photos/must-have.jpg",
  },
  {
    name: "Dose Of Mocha",
    description: "White chocolate, vanilla foam and cocoa puffs.",
    photo: "/photos/cocoa-puffs.jpg",
  },
  {
    name: "Caramel Crème Brûlée",
    description: "Torched sugar top over a silky iced latte.",
    photo: "/photos/caramel-creme-brulee.jpg",
  },
  {
    name: "Cinnamon Toast Latte",
    description: "Cinnamon toast crunch and warm spice.",
    photo: "/photos/cinnamon-toast-latte.jpg",
  },
  {
    name: "Cookies and Cream",
    description: "Chocolate drizzle, oreo pieces on top.",
    photo: "/photos/cookies-and-cream.jpg",
  },
  {
    name: "Pumpkin Dose",
    description: "Pumpkin spice and brown sugar crumble.",
    photo: "/photos/pumpkin-dose.jpg",
  },
];

export const lovedByEveryoneClips = [
  "/video/loved/banana-dose.mp4",
  "/video/loved/cookie-butter-pumpkin.mp4",
  "/video/loved/fruity-pebble.mp4",
  "/video/loved/abuelita-latte.mp4",
  "/video/loved/churro-latte.mp4",
  "/video/loved/ferrero-rocher.mp4",
];

export type Business = typeof business;
