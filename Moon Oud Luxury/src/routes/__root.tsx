import { Outlet, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { CartProvider } from "@/lib/cart";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-luxury-radial flex items-center justify-center px-4">
      <div className="text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="font-display text-5xl text-ivory">Page not found</h1>
        <p className="mt-3 text-ivory/60 text-sm">The page you sought has drifted into the night.</p>
        <a href="/" className="btn-gold btn-gold-hover mt-8">Return Home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="min-h-screen bg-luxury-radial flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl text-ivory">Something interrupted the moment</h1>
        <p className="mt-3 text-ivory/60 text-sm">Try again, or return to the beginning.</p>
        <div className="mt-8 flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold btn-gold-hover">Try again</button>
          <a href="/" className="btn-outline-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SHIVRRA — Moon Oud Luxury Eau De Parfum" },
      { name: "description", content: "SHIVRRA presents Moon Oud — a deep, mysterious unisex luxury fragrance crafted to leave a lasting impression." },
      { name: "theme-color", content: "#1E1A1B" },
      { property: "og:title", content: "SHIVRRA — Moon Oud" },
      { property: "og:description", content: "Deep. Mysterious. Unforgettable. A signature unisex Eau De Parfum." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-charcoal">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
