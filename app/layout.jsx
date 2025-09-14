import "./globals.css";

export const metadata = {
  title: "Gian Calixto — Web3 Advisor (Tokenomics, Partnerships, Lead Gen)",
  description:
    "I help Web3 teams with tokenomics, partnerships, listings/liquidity, and multi-channel lead gen. Book a 20-minute intro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
