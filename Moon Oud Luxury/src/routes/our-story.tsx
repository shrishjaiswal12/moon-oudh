import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Parallax } from "@/components/site/Motion";
import storyMood from "@/assets/story-mood.jpg";
import campaign from "@/assets/campaign-smoke.jpg";
import showcase from "@/assets/product-showcase.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — SHIVRRA" },
      { name: "description", content: "SHIVRRA was born from the belief that fragrance is more than scent — it is memory, identity, and presence." },
      { property: "og:title", content: "Our Story — SHIVRRA" },
      { property: "og:image", content: storyMood },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <div className="bg-charcoal text-ivory">
      <section className="relative h-[70vh] min-h-[460px] flex items-center justify-center overflow-hidden">
        <Parallax offset={100} className="absolute inset-0">
          <img src={storyMood} alt="" className="w-full h-[120%] object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative text-center px-6 max-w-3xl">
          <Reveal>
            <div className="eyebrow">Our Story</div>
            <h1 className="font-display text-6xl lg:text-8xl mt-6 leading-[0.95]">
              <span className="text-gold-gradient">Presence</span>, not attention.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          {[
            "SHIVRRA was born from the belief that fragrance is more than scent — it is memory, identity, and presence.",
            "The founder spent years fascinated by how a single fragrance could transport someone back to a forgotten moment, a distant place, or a cherished memory. Moon Oud became the embodiment of that philosophy: a fragrance crafted not merely to be worn, but to leave an impression that lingers long after the moment has passed.",
            "Inspired by quiet moonlit nights, timeless elegance, and the richness of oud, SHIVRRA was created for individuals who seek depth over noise and presence over attention.",
            "Every bottle represents craftsmanship, emotion, and the pursuit of creating a signature scent that becomes part of a person's story.",
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-xl lg:text-2xl leading-relaxed text-ivory/80 font-display">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-deep">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal className="text-center">
            <div className="eyebrow">The Journey</div>
            <h2 className="font-display text-4xl sm:text-5xl mt-5">A Patient Craft</h2>
          </Reveal>
          <div className="mt-20 relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gold/25" />
            {[
              { year: "Origin", title: "A Quiet Obsession", body: "Years spent studying how scent becomes memory." },
              { year: "Sourcing", title: "Rare Materials", body: "Agarwood, Bulgarian rose, real amber — selected with intention." },
              { year: "Composition", title: "Moon Oud", body: "A nocturne in three movements: top, heart, base." },
              { year: "Today", title: "An Edition Released", body: "Small batches. Considered packaging. A signature begun." },
            ].map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className={`relative mb-14 lg:grid lg:grid-cols-2 lg:gap-12 ${i % 2 ? "lg:[&>div]:order-2" : ""}`}>
                  <div className="pl-12 lg:pl-0 lg:pr-12 lg:text-right">
                    <div className="eyebrow">{t.year}</div>
                    <div className="font-display text-3xl mt-3">{t.title}</div>
                    <p className="mt-3 text-ivory/65">{t.body}</p>
                  </div>
                  <div className="hidden lg:block" />
                  <span className="absolute left-4 lg:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-charcoal" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center justify-center">
        <Parallax className="absolute inset-0" offset={80}>
          <img src={campaign} alt="" className="w-full h-[120%] object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative text-center px-6 max-w-3xl">
          <Reveal>
            <p className="font-display italic text-3xl sm:text-5xl leading-tight text-ivory">
              "Crafted not to be noticed —<br /><span className="text-gold-gradient">to be remembered.</span>"
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={showcase} alt="" className="w-full aspect-[4/5] object-cover border border-gold/20" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">The Philosophy</div>
            <h2 className="font-display text-4xl lg:text-5xl mt-5">Depth over noise.</h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">
              At SHIVRRA we measure success not in volume, but in the impression we leave. Every detail —
              the cut of the bottle, the weight of the box, the hush of the scent — is an answer to the same question:
              <em className="font-display"> will this be remembered?</em>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
