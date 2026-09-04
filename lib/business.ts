export const business = {
  name: "Dose of V Cafe",
  tagline: "Specialty Coffee",
  city: "Glendale",
  state: "CA",
  locationLabel: "Glendale, CA",
  order: {
    method: "DM to place an order",
    payment: ["Zelle", "Cash"],
    fulfillment: "Pickup only",
  },
  description:
    "A small-batch specialty coffee shop pouring carefully sourced, thoughtfully brewed coffee in Glendale, California. Every order is placed by DM and picked up in person — no middlemen, no markup, just a genuine cup made to order.",
};

export type Business = typeof business;
