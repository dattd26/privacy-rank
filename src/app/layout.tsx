import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "PrivacyRank | Analytic Laboratory of Digital Sovereignty",
  description:
    "We audit, stress-test, and rank VPN networks. Transparent metrics. Zero provider influence. Our analytical laboratory ensures digital sovereignty through high-precision cybersecurity reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-frost-canvas text-midnight-slate min-h-full flex flex-col font-body antialiased">
        {children}
      </body>
    </html>
  );
}

