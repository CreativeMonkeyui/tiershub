import Navbar from "@/components/Navbar";
import GamemodeTabs from "@/components/GamemodeTabs";
import RankingTable from "@/components/RankingTable";

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-[#050505]">

      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-10">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-red-500 uppercase tracking-[4px] font-semibold">
            Rankings
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Global PvP Leaderboards
          </h1>

        </div>

      </section>

      <GamemodeTabs />

      <RankingTable />

    </main>
  );
}