
import Navbar from "@/components/Navbar";
import GamemodeTabs from "@/components/GamemodeTabs";
import TierColumns from "@/components/TierColumns";

export default function NethPotPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <GamemodeTabs />

      <div className="max-w-[1600px] mx-auto px-6 pb-8">

        <h1 className="text-5xl font-black">
    
        </h1>

        <p className="text-gray-400 mt-3 text-lg">

        </p>

      </div>

      <TierColumns gamemode="NethPot" />

    </main>
  );
}