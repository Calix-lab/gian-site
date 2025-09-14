export const metadata = {
  title: "Gian Calixto — Web3 Advisor",
  description: "Tokenomics • Partnerships • Pitch Decks • Lead Gen (International)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
