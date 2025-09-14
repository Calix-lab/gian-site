import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://gian-site.vercel.app"),
  title: "Gian Calixto — Web3 Advisor (Tokenomics, Partnerships, Lead Gen)",
  description: "I help Web3 teams with tokenomics, partnerships, listings/liquidity, and multi-channel lead gen. Book a 30-minute intro.",
  openGraph: {
    title: "Gian Calixto — Web3 Advisor",
    description: "Tokenomics • Partnerships • Pitch Decks • Lead Gen",
    url: "https://gian-site.vercel.app",
    siteName: "Gian Calixto",
    images: ["/og-image.png"]
  },
  twitter: { card: "summary_large_image", title: "Gian Calixto — Web3 Advisor", images: ["/og-image.png"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white/10 focus:px-3 focus:py-2">Skip to content</a>
        {children}
        <Script defer data-domain="gian-site.vercel.app" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  );
}
