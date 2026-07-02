import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Motion";
import { INSTAGRAM } from "@/lib/product";
import { Instagram, Mail, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SHIVRRA" },
      { name: "description", content: "Reach the atelier. For enquiries on Moon Oud, gifting, and collaborations." },
      { property: "og:title", content: "Contact — SHIVRRA" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <div className="bg-charcoal text-ivory">
      <section className="py-24 lg:py-32 bg-luxury-radial">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="eyebrow">Atelier</div>
            <h1 className="font-display text-5xl lg:text-7xl mt-5">Get in Touch</h1>
            <div className="hairline w-32 mx-auto mt-8" />
            <p className="mt-6 text-ivory/70">For enquiries on Moon Oud, gifting editions, press and partnerships.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-[1fr_1.4fr] gap-12">
          <Reveal>
            <div className="space-y-8">
              <div>
                <div className="eyebrow">Email</div>
                <a href="mailto:shivrra.busi.ss@gmail.com" className="mt-3 inline-flex items-center gap-2 font-display text-2xl text-ivory hover:text-gold transition">
                  <Mail className="w-5 h-5" /> shivrra.busi.ss@gmail.com
                </a>
              </div>
              <div>
                <div className="eyebrow">Instagram</div>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-display text-2xl text-ivory hover:text-gold transition">
                  <Instagram className="w-5 h-5" /> @shivrra_busi_ss
                </a>
              </div>
              <div>
                <div className="eyebrow">Atelier Hours</div>
                <p className="mt-3 text-ivory/70">Mon — Sat<br />10:00 — 19:00 IST</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.currentTarget);
                const name = String(form.get("name") || "").trim();
                const email = String(form.get("email") || "").trim();
                const message = String(form.get("message") || "").trim();
                const next: Record<string, string> = {};
                if (!name || name.length > 80) next.name = "Please enter your name (max 80).";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
                if (!message || message.length > 1500) next.message = "Message is required (max 1500).";
                setErrors(next);
                if (Object.keys(next).length === 0) {
                  (e.currentTarget as HTMLFormElement).reset();
                  setSent(true);
                  setTimeout(() => setSent(false), 5000);
                }
              }}
              className="border border-gold/15 bg-card/40 backdrop-blur-sm p-8 lg:p-10 space-y-6"
            >
              <Field label="Name" name="name" type="text" maxLength={80} error={errors.name} />
              <Field label="Email" name="email" type="email" maxLength={120} error={errors.email} />
              <div>
                <label className="eyebrow block mb-3">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1500}
                  className="w-full bg-transparent border border-gold/25 px-4 py-3 text-sm placeholder:text-ivory/35 focus:outline-none focus:border-gold transition"
                  placeholder="How can we help?"
                />
                {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-gold btn-gold-hover w-full">Send Enquiry</button>
              {sent && (
                <div className="flex items-center gap-2 text-gold text-sm">
                  <Check className="w-4 h-4" /> Thank you — we will respond shortly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type, maxLength, error }: { label: string; name: string; type: string; maxLength: number; error?: string }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={maxLength}
        required
        className="w-full bg-transparent border border-gold/25 px-4 py-3 text-sm placeholder:text-ivory/35 focus:outline-none focus:border-gold transition"
      />
      {error && <p className="text-destructive text-xs mt-2">{error}</p>}
    </div>
  );
}
