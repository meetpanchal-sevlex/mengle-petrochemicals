import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ─── Premium Display Font (Headlines / Brand) ─── */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ─── Premium Body Font (UI text / paragraphs) ─── */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ─── Monospace (product codes / spec tables) ─── */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Engle Petrochemicals | Industrial Oil & Chemical Solutions",
  description:
    "M. Engle Petrochemicals (M. Engle Traders) is a PESO-authorized supplier of Light Diesel Oil (LDO), Furnace Oil, Solvents (MTO, C9, C10), Base Oils, and Aromatic Petrochemicals across India with depots in Ahmedabad & Indore.",
  keywords: [
    "M Engle Petrochemicals",
    "M Engle Traders",
    "Light Diesel Oil supplier",
    "Furnace Oil supplier",
    "LDO supplier Ahmedabad",
    "LDO supplier Indore",
    "C9 Solvent",
    "C10 Solvent",
    "Mineral Turpentine Oil MTO",
    "Base Oil supplier",
    "PESO authorized oil supplier",
    "industrial fuel oil India",
  ],
  authors: [{ name: "M. Engle Petrochemicals" }],
  openGraph: {
    title: "M. Engle Petrochemicals | Industrial Oil & Chemical Solutions",
    description:
      "PESO Authorized Supplier of LDO, Furnace Oil, Solvents, Base Oils & Petrochemicals.",
    url: "https://www.menglepetro.com",
    siteName: "M. Engle Petrochemicals",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAFAFA] text-[#0B1120] antialiased">
        {children}
      </body>
    </html>
  );
}
