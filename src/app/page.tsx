import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RoomsSection from "@/components/sections/RoomsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import DiscoverSection from "@/components/sections/DiscoverSection";
import GuidesSection from "@/components/sections/GuidesSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <ExperienceSection />
      <DiscoverSection />
      <GuidesSection />
      <PropertiesSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
