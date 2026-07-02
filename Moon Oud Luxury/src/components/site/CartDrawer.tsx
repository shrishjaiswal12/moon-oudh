import { useCart } from "@/lib/cart";
import { INSTAGRAM, formatPrice } from "@/lib/product";
import { X, Minus, Plus, Trash2, Instagram } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function CartDrawer() {
  const { open, setOpen, items, remove, setQty, subtotal } = useCart();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-charcoal/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[61] w-full sm:w-[440px] bg-charcoal border-l border-gold/20 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/10">
              <div className="font-display text-2xl text-ivory">Your Bag</div>
              <button onClick={() => setOpen(false)} aria-label="Close cart" className="text-ivory/70 hover:text-gold">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="text-center text-ivory/55 mt-20">
                  <div className="font-display text-2xl text-ivory mb-2">Your bag awaits</div>
                  <p className="text-sm">Begin with the signature scent.</p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((it) => (
                    <li key={it.id} className="flex gap-4 pb-6 border-b border-gold/10">
                      <img src={it.image} alt={it.name} className="w-20 h-24 object-cover rounded-sm border border-gold/20" />
                      <div className="flex-1">
                        <div className="font-display text-xl text-ivory">{it.name}</div>
                        <div className="text-xs text-ivory/55 mt-0.5">50ml Eau De Parfum</div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center border border-gold/30">
                            <button onClick={() => setQty(it.id, it.qty - 1)} className="p-1.5 text-ivory/70 hover:text-gold"><Minus className="w-3 h-3" /></button>
                            <span className="px-3 text-sm">{it.qty}</span>
                            <button onClick={() => setQty(it.id, it.qty + 1)} className="p-1.5 text-ivory/70 hover:text-gold"><Plus className="w-3 h-3" /></button>
                          </div>
                          <div className="text-gold text-sm">{formatPrice(it.price * it.qty)}</div>
                        </div>
                      </div>
                      <button onClick={() => remove(it.id)} aria-label="Remove" className="text-ivory/40 hover:text-gold"><Trash2 className="w-4 h-4" /></button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-gold/15 bg-navy-deep/40">
                <div className="flex items-center justify-between mb-5">
                  <span className="eyebrow">Subtotal</span>
                  <span className="font-display text-2xl text-gold">{formatPrice(subtotal)}</span>
                </div>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold btn-gold-hover w-full gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Continue Purchase on Instagram
                </a>
                <p className="text-[10px] tracking-[0.25em] uppercase text-ivory/40 text-center mt-3">
                  Orders confirmed directly with our atelier
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
