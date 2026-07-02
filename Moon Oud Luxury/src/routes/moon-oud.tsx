import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";
import { PRODUCT, formatPrice } from "@/lib/product";
import { useCart } from "@/lib/cart";
import realProduct from "@/assets/moon-oud-real.png";
import showcase from "@/assets/product-showcase.jpg";
import campaign from "@/assets/campaign-smoke.jpg";
import giftBox from "@/assets/gift-box.jpg";
import { Minus, Plus, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/moon-oud")({
  head: () => ({
    meta: [
      { title: "Moon Oud — SHIVRRA Luxury Eau De Parfum" },
      { name: "description", content: "Moon Oud by SHIVRRA — 50ml unisex Eau De Parfum with deep oud, amber and quiet smoke." },
      { property: "og:title", content: "Moon Oud — SHIVRRA" },
      { property: "og:description", content: "A signature unisex fragrance. Deep. Mysterious. Long-lasting." },
      { property: "og:image", content: realProduct },
    ],
  }),
  component: MoonOud,
});

function MoonOud() {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const gallery = [realProduct, showcase, giftBox, campaign];

  return (
    <div className="bg-charcoal text-ivory">
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20">
          <div>
            <div className="relative aspect-[4/5] bg-navy-deep border border-gold/20 overflow-hidden">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                src={gallery[active]}
                alt="Moon Oud"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 eyebrow bg-charcoal/70 px-3 py-1.5">{PRODUCT.collection}</div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden border transition ${active === i ? "border-gold" : "border-gold/20 hover:border-gold/50"}`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-8">
            <Reveal>
              <div className="eyebrow">Eau De Parfum · 50ml</div>
              <h1 className="font-display text-6xl lg:text-7xl mt-4 leading-none text-shimmer">Moon Oud</h1>
              <p className="font-display italic text-2xl text-ivory/80 mt-4">{PRODUCT.tagline}</p>
              <div className="hairline w-32 mt-8" />

              <p className="mt-8 text-ivory/70 leading-relaxed">{PRODUCT.description}</p>

              <div className="mt-10 flex items-end gap-4 flex-wrap">
                <div className="font-display text-4xl text-gold">{formatPrice(PRODUCT.price)}</div>
                <div className="font-display text-2xl text-ivory/40 line-through pb-1">{formatPrice(PRODUCT.originalPrice)}</div>
                <div className="px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase bg-gold/10 text-gold border border-gold/20">50% exclusive discount</div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-ivory/45 pb-2">Inclusive of all taxes</div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center border border-gold/30">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 hover:text-gold"><Minus className="w-4 h-4" /></button>
                  <span className="px-5 text-sm">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="p-3 hover:text-gold"><Plus className="w-4 h-4" /></button>
                </div>
                <button
                  onClick={() => add({ id: PRODUCT.id, name: PRODUCT.name, price: PRODUCT.price, image: realProduct }, qty)}
                  className="btn-gold btn-gold-hover gap-2 flex-1 min-w-[220px]"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Bag
                </button>
              </div>

              <ul className="mt-10 space-y-3 text-sm text-ivory/65">
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-gold/60" /> Hand-finished in small editions</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-gold/60" /> Alcohol-free formulation</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-gold/60" /> Presented in signature navy keepsake box</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-24 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="text-center">
            <div className="eyebrow">The Composition</div>
            <h2 className="font-display text-4xl sm:text-5xl mt-5">Three Movements</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {(["top", "heart", "base"] as const).map((k, i) => (
              <Reveal key={k} delay={i * 0.1}>
                <div className="border border-gold/20 p-8 bg-charcoal/50 h-full">
                  <div className="eyebrow">{k === "top" ? "I. Top" : k === "heart" ? "II. Heart" : "III. Base"}</div>
                  <ul className="mt-6 space-y-3 font-display text-xl text-ivory">
                    {PRODUCT.notes[k].map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-display italic text-3xl lg:text-4xl leading-snug text-ivory">
              "Worn at dusk. Remembered at dawn."
            </p>
            <div className="hairline w-40 mx-auto mt-10" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
