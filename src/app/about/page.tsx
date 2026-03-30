import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import SectionBanner from "@/components/SectionBanner";
import DesignedAroundBinginSection from "@/components/about/DesignedAroundBinginSection";
import WhatDefinesSection from "@/components/about/WhatDefinesSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us — NUHO Living",
  description:
    "Learn about NUHO Living — a boutique stay in Bingin, Uluwatu, where modern tropical design meets the calm rhythm of coastal Bali.",
  openGraph: {
    title: "About Us — NUHO Living",
    description:
      "A thoughtfully crafted boutique stay in Bingin, blending comfort, design, and local culture.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <SectionBanner
        title="About Us"
        imageSrc="/images/section-banner.png"
        imageAlt="NUHO Living"
      />
      <DesignedAroundBinginSection />
      <WhatDefinesSection />
      <PropertiesSection />
      <CTABanner />
      <Footer />
      <FloatingContactButton />
    </main>
  );
}
