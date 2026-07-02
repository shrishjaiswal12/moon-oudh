import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, Parallax } from "@/components/site/Motion";
import { PRODUCT } from "@/lib/product";
import { useCart } from "@/lib/cart";
import heroImg from "@/assets/hero-moon-oud.jpg";
import showcaseImg from "@/assets/product-showcase.jpg";
import campaignImg from "@/assets/campaign-smoke.jpg";
import realProduct from "@/assets/moon-oud-real.png";
import { ArrowRight, Sparkles, Leaf, Award, Gift, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHIVRRA — Moon Oud | Luxury Unisex Eau De Parfum" },
      { name: "description", content: "Discover Moon Oud by SHIVRRA. A deep, mysterious unisex fragrance built on rare oud, amber, and quiet smoke." },
      { property: "og:title", content: "SHIVRRA — Moon Oud" },
      { property: "og:description", content: "Deep. Mysterious. Unforgettable." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-charcoal text-ivory overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[92vh] min-h-[640px] flex items-center justify-center">
        <motion.div style={{ y: yBg }} className="absolute inset-0">
          <img src={heroImg} alt="Moon Oud campaign" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/30" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.32em" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="eyebrow"
          >
            SHIVRRA · Unisex Collection
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[18vw] sm:text-[12vw] lg:text-[9.5rem] leading-[0.95] mt-6 text-shimmer"
          >
            Moon Oud
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.9 }}
            className="mt-6 font-display italic text-2xl sm:text-3xl text-ivory/85"
          >
            Deep. Mysterious. Unforgettable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/moon-oud" className="btn-gold btn-gold-hover">Explore Fragrance</Link>
            <Link to="/moon-oud" className="btn-outline-gold hover:bg-ivory/5">Shop Now</Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-ivory/55"
        >
          Scroll
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 lg:py-40 bg-luxury-radial">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="eyebrow">A Signature Fragrance</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05]">
              A fragrance born of <em className="text-gold-gradient not-italic font-display">moonlit silence</em> and rare oud.
            </h2>
            <div className="hairline mx-auto w-40 mt-10" />
            <p className="mt-8 text-ivory/70 leading-relaxed text-lg max-w-2xl mx-auto">
              Crafted in small editions for those who choose presence over noise.
              Moon Oud is the embodiment of SHIVRRA — depth, restraint, and a quiet kind of luxury.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* FRAGRANCE NOTES */}
      <NotesSection />

      {/* WHY MOON OUD */}
      <WhySection />

      {/* CAMPAIGN QUOTE */}
      <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <Parallax offset={120} className="absolute inset-0">
          <img src={campaignImg} alt="" className="w-full h-[120%] object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 max-w-4xl text-center px-6">
          <Reveal>
            <Sparkles className="w-6 h-6 text-gold mx-auto mb-6" />
            <p className="font-display italic text-3xl sm:text-5xl lg:text-6xl leading-[1.15] text-ivory">
              "Some fragrances are worn.
              <br />
              <span className="text-gold-gradient">Moon Oud is remembered.</span>"
            </p>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  );
}

function ProductShowcase() {
  const { add } = useCart();
  return (
    <section className="py-28 lg:py-40 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="relative">
          <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={realProduct}
              alt="Moon Oud bottle"
              className="w-full max-w-md mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </Reveal>
        <div>
          <Reveal>
            <div className="eyebrow">{PRODUCT.collection}</div>
            <h2 className="font-display text-5xl sm:text-6xl mt-5 leading-tight">The House Fragrance</h2>
            <div className="hairline w-32 mt-8" />
            <p className="mt-8 text-ivory/70 leading-relaxed">
              {PRODUCT.description}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {[
                ["Eau De Parfum", "Concentration"],
                ["50 ml", "Volume"],
                ["Unisex", "Wear"],
                ["12+ hours", "Sillage"],
              ].map(([v, k]) => (
                <li key={k} className="border-l border-gold/30 pl-3">
                  <div className="text-ivory">{v}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-ivory/45 mt-0.5">{k}</div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link to="/moon-oud" className="btn-gold btn-gold-hover gap-2">
                Discover <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => add({ id: PRODUCT.id, name: PRODUCT.name, price: PRODUCT.price, image: realProduct })}
                className="btn-outline-gold hover:bg-ivory/5"
              >
                Add to Bag
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NotesSection() {
  const notes = [
    { label: "Top Notes", items: PRODUCT.notes.top, desc: "The first encounter — cool, luminous, fleeting." },
    { label: "Heart Notes", items: PRODUCT.notes.heart, desc: "The story unfolding — floral warmth and depth." },
    { label: "Base Notes", items: PRODUCT.notes.base, desc: "The memory that remains — oud, amber, quiet smoke." },
  ];
  return (
    <section className="py-28 lg:py-36 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={campaignImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">The Olfactive Composition</div>
          <h2 className="font-display text-4xl sm:text-5xl mt-5">A Fragrance Pyramid</h2>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-3 gap-8 lg:gap-12">
          {notes.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.12}>
              <div className="relative h-full border border-gold/20 bg-charcoal/40 backdrop-blur-sm p-8 lg:p-10 hover:border-gold/50 transition-all duration-500 group">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
                <div className="font-display text-7xl text-gold/20 group-hover:text-gold/30 transition leading-none">0{i + 1}</div>
                <div className="eyebrow mt-4">{n.label}</div>
                <p className="mt-4 text-sm text-ivory/55 italic font-display text-lg">{n.desc}</p>
                <ul className="mt-6 space-y-2">
                  {n.items.map((it) => (
                    <li key={it} className="text-ivory/85 flex items-center gap-3">
                      <span className="h-px w-4 bg-gold/60" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const features = [
    { icon: Clock, title: "Long Lasting", desc: "12+ hours of evolving presence." },
    { icon: Sparkles, title: "Unisex", desc: "Crafted to honor any wearer." },
    { icon: Leaf, title: "Premium Ingredients", desc: "Rare oud, Bulgarian rose, real amber." },
    { icon: Award, title: "Signature Scent", desc: "A statement, not a trend." },
    { icon: Gift, title: "Elegant Packaging", desc: "Designed to be remembered." },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <div className="eyebrow">Why Moon Oud</div>
          <h2 className="font-display text-4xl sm:text-5xl mt-5">An Edition Worth Keeping</h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group h-full p-8 border border-gold/15 bg-card/40 hover:bg-card/70 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1">
                <f.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                <div className="font-display text-2xl mt-6 text-ivory">{f.title}</div>
                <p className="text-sm text-ivory/55 mt-2">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { name: "Ananya R.", role: "Mumbai", quote: "Moon Oud has become my signature. Strangers stop me to ask what I'm wearing." },
    { name: "Rohan K.", role: "Bengaluru", quote: "It opens cool and luminous, then settles into something profoundly warm. Hours later, still there." },
    { name: "Maya S.", role: "Delhi", quote: "Finally, a fragrance that feels considered. Every detail — the bottle, the box, the scent — is quiet luxury." },
  ];
  return (
    <section className="py-28 lg:py-36 bg-luxury-radial">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <div className="eyebrow">In Their Words</div>
          <h2 className="font-display text-4xl sm:text-5xl mt-5">An Impression That Lingers</h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.1}>
              <figure className="h-full p-8 lg:p-10 border border-gold/15 bg-card/50 backdrop-blur-sm">
                <div className="text-gold text-4xl font-display leading-none">"</div>
                <blockquote className="mt-4 text-ivory/80 italic font-display text-xl leading-snug">
                  {it.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-gold/15">
                  <div className="text-ivory">{it.name}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-ivory/45 mt-1">{it.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={showcaseImg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <div className="eyebrow">Private List</div>
          <h2 className="font-display text-4xl sm:text-5xl mt-5">First to the Next Edition</h2>
          <p className="mt-5 text-ivory/65">
            Quiet correspondence on new releases, gifting editions, and limited drops.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); }}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              maxLength={120}
              placeholder="Your email"
              className="flex-1 bg-transparent border border-gold/30 px-4 py-3 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-gold transition"
            />
            <button className="btn-gold btn-gold-hover">Subscribe</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
