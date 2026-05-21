"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Disc3 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center justify-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f] via-[#0b1020] to-[#07090f]" />

        {/* Glow */}
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-red-500/10 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-yellow-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* SMALL BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 text-sm font-semibold mb-8"
        >

          <Trophy size={16} />

          Competitive Minecraft PvP Rankings

        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-6xl md:text-8xl font-black tracking-tight"
        >

          <span className="text-white">
            TIERS
          </span>{" "}

          <span className="text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.55)]">
            HUB
          </span>

        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mt-8 text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          The Ultimate Minecraft PvP Ranking Platform.
          <br />
          Competitive tiers, player rankings
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >

          {/* VIEW RANKINGS */}
          <Link href="/rankings">

            <button className="group px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-400 transition-all duration-300 text-white font-bold text-lg flex items-center gap-3 shadow-[0_0_40px_rgba(239,68,68,0.35)] hover:scale-[1.03]">

              View Rankings

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-all duration-300"
              />

            </button>

          </Link>

          {/* DISCORD */}
          <a
            href="https://discord.gg/qFZtwEwwkR"
            target="_blank"
          >

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-white font-bold text-lg flex items-center gap-3 hover:border-red-500/30">

              <Disc3 size={20} />

              Join Discord

            </button>

          </a>

        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5"
        >





        </motion.div>

      </div>

    </section>
  );
}