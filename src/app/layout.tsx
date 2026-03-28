import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "NUHO Living — Stay Where Comfort Meets Culture",
  description:
    "NUHO Living is a boutique stay in Bingin, Uluwatu, designed for modern tropical living. A thoughtfully crafted space that blends comfort, design, and the calm rhythm of coastal Bali.",
  keywords: [
    "NUHO Living",
    "Bingin",
    "Uluwatu",
    "Bali",
    "boutique stay",
    "tropical living",
  ],
  openGraph: {
    title: "NUHO Living — Stay Where Comfort Meets Culture",
    description:
      "A boutique stay in Bingin, Uluwatu, designed for modern tropical living.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
