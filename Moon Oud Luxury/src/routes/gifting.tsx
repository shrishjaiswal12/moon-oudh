import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Motion";
import giftBox from "@/assets/gift-box.jpg";

export const Route = createFileRoute("/gifting")({
  head: () => ({
    meta: [
      { title: "Gifting — SHIVRRA" },
      { name: "description", content: "Curated gifting editions from SHIVRRA. Coming soon." },
      { property: "og:title", content: "Gifting — SHIVRRA" },
      { property: "og:image", content: giftBox },
    ],
  }),
  component: () => <ComingSoon eyebrow="Personal Gifting" title="Gifting" body="Curated editions, signature wrapping, handwritten notes. A new way to give what is remembered." image={giftBox} />,
});

export function ComingSoon({ eyebrow, title, body, image }: { eyebrow: string; title: string; body: string; image: string }) {
  return (
    <div className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
      </div>
      <div className="relative text-center px-6 max-w-3xl">
        <Reveal>
          <div className="eyebrow">{eyebrow}</div>
        </Reveal>
        <motion.h1
          initial={{ opacity: 0, y: 30, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl sm:text-8xl lg:text-[10rem] mt-6 leading-none text-shimmer"
        >
          {title}
        </motion.h1>
        <Reveal delay={0.5}>
          <div className="hairline w-40 mx-auto mt-10" />
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1.2 }}
            className="mt-10 font-display italic text-3xl sm:text-4xl text-gold-gradient tracking-[0.3em] uppercase"
            style={{ letterSpacing: "0.4em" }}
          >
            Coming Soon
          </motion.div>
          <p className="mt-8 max-w-xl mx-auto text-ivory/65 leading-relaxed">{body}</p>
        </Reveal>
      </div>
    </div>
  );
}
