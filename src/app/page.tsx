import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturedModes from "@/components/FeaturedModes";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">

      <Navbar />

      <Hero />

      <StatsSection />

      <FeaturedModes />

    </main>
  );
}