import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "./gifting";
import showcase from "@/assets/product-showcase.jpg";

export const Route = createFileRoute("/corporate-gifting")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting — SHIVRRA" },
      { name: "description", content: "Bespoke corporate gifting from SHIVRRA. Coming soon." },
      { property: "og:title", content: "Corporate Gifting — SHIVRRA" },
      { property: "og:image", content: showcase },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="For Houses & Brands"
      title="Corporate Gifting"
      body="Bespoke editions for clients, partners and milestones. Custom monograms, sleeves and presentation — crafted in confidence."
      image={showcase}
    />
  ),
});
