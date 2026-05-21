"use client";

import Link from "next/link";
import {
  Disc3,
  Shield,
  FileText,
  Copyright,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#05070d] overflow-hidden">

      {/* TOP GLOW */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* BRAND */}
          <div>

            <h2 className="text-4xl font-black tracking-tight">

              <span className="text-white">
                TIERS
              </span>{" "}

              <span className="text-red-500">
                HUB
              </span>

            </h2>

            <p className="text-gray-400 mt-4 max-w-[420px] leading-relaxed">
              Competitive Minecraft PvP rankings,
              live tester ecosystem, and premium
              leaderboard experience.
            </p>

          </div>

          {/* LINKS */}
          <div className="flex flex-wrap items-center gap-4">

            {/* DISCORD */}
            <motion.a
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              href="https://discord.gg/qFZtwEwwkR"
              target="_blank"
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#5865F2]/20 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-all duration-300"
            >

              <Disc3
                size={18}
                className="text-[#5865F2]"
              />

              <span className="font-semibold text-white">
                Discord
              </span>

            </motion.a>

            {/* TERMS */}
            <motion.div
              whileHover={{
                y: -3,
              }}
            >

              <Link
                href="/terms"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.05] bg-white/[0.03] hover:border-yellow-400/20 hover:bg-white/[0.05] transition-all duration-300"
              >

                <FileText
                  size={18}
                  className="text-yellow-400"
                />

                <span className="font-semibold text-gray-300 hover:text-white transition-all">
                  Terms
                </span>

              </Link>

            </motion.div>

            {/* PRIVACY */}
            <motion.div
              whileHover={{
                y: -3,
              }}
            >

              <Link
                href="/privacy"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.05] bg-white/[0.03] hover:border-yellow-400/20 hover:bg-white/[0.05] transition-all duration-300"
              >

                <Shield
                  size={18}
                  className="text-yellow-400"
                />

                <span className="font-semibold text-gray-300 hover:text-white transition-all">
                  Privacy
                </span>

              </Link>

            </motion.div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/[0.05] my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* COPYRIGHT */}
          <div className="flex items-center gap-3 text-gray-500">

            <Copyright size={16} />

            <span>
              2026 TiersHub. All rights reserved.
            </span>

          </div>

          {/* CREDITS */}
          <div className="text-gray-500 text-center md:text-right">

            Built with ❤️ for the competitive
            Minecraft PvP community.

          </div>

        </div>

      </div>

    </footer>
  );
}