import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { INSTAGRAM } from "@/lib/product";

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-ivory/80 border-t border-gold/15 mt-32">
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.25em] text-ivory">SHIVRRA</div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
            A house of signature fragrance. Crafted in small editions, designed to linger long after the moment has passed.
          </p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-soft transition">
            <Instagram className="w-4 h-4" /> @shivrra_busi_ss
          </a>
        </div>
        <div>
          <div className="eyebrow mb-4">Discover</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/moon-oud" className="hover:text-gold transition">Moon Oud</Link></li>
            <li><Link to="/our-story" className="hover:text-gold transition">Our Story</Link></li>
            <li><Link to="/gifting" className="hover:text-gold transition">Gifting</Link></li>
            <li><Link to="/corporate-gifting" className="hover:text-gold transition">Corporate Gifting</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="hover:text-gold transition">Inquiries</Link></li>
            <li>
              <a href="mailto:shivrra.busi.ss@gmail.com" className="hover:text-gold transition inline-flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> shivrra.busi.ss@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-[11px] tracking-[0.3em] uppercase text-ivory/45">
        © {new Date().getFullYear()} SHIVRRA — Crafted with intention
      </div>
    </footer>
  );
}
