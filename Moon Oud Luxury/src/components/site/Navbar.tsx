import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { ShoppingBag, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/moon-oud", label: "Moon Oud" },
  { to: "/our-story", label: "Our Story" },
  { to: "/gifting", label: "Gifting" },
  { to: "/corporate-gifting", label: "Corporate" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setOpen } = useCart();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <div className="w-full bg-navy-deep text-ivory/85 text-[11px] tracking-[0.3em] uppercase text-center py-2.5 border-b border-gold/15">
        Experience the Signature of Moon Oud
      </div>
      <header
        className={`fixed top-[37px] inset-x-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-charcoal/90 backdrop-blur-xl border-b border-gold/15"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="font-display text-2xl lg:text-3xl tracking-[0.25em] text-ivory">
            SHIVRRA
          </Link>
          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[11px] tracking-[0.25em] uppercase text-ivory/80 hover:text-gold transition-colors relative group"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
                <span className="absolute left-0 -bottom-2 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="relative p-2 text-ivory hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-charcoal text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen((m) => !m)}
              aria-label="Menu"
              className="lg:hidden p-2 text-ivory"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-charcoal/95 backdrop-blur-xl border-t border-gold/10">
            <nav className="flex flex-col px-5 py-6 gap-5">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="text-sm tracking-[0.25em] uppercase text-ivory/85"
                  activeProps={{ className: "text-gold" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      <div className="h-[101px] lg:h-[117px]" />
    </>
  );
}
