"use client";

import Link from "next/link";

import {
  Home,
  Trophy,
  Disc3,
} from "lucide-react";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#07090f]/70 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]">

        {/* TOP GLOW */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6 h-[88px] flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-14">

            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-4"
            >

              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="relative w-12 h-12 rounded-2xl overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-90" />

                <div className="absolute inset-0 blur-xl bg-yellow-400/40 group-hover:bg-yellow-400/60 transition-all duration-300" />

                <div className="relative w-full h-full flex items-center justify-center">

                  <Trophy
                    size={22}
                    className="text-black"
                  />

                </div>

              </motion.div>

              {/* TEXT */}
              <div className="leading-none">

                <h1 className="text-[34px] font-black tracking-tight">

                  <span className="text-white">
                    TIERS
                  </span>{" "}

                  <span className="text-red-500">
                    HUB
                  </span>

                </h1>

                <p className="text-[11px] tracking-[4px] uppercase text-gray-500 mt-1">
                  Minecraft PvP Rankings
                </p>

              </div>

            </Link>

            {/* NAV */}
            <div className="hidden md:flex items-center gap-2">

              {/* HOME */}
              <Link
                href="/"
                className={`group relative px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 overflow-hidden ${
                  pathname === "/"
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >

                <div className="absolute inset-0 rounded-2xl bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {pathname === "/" && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-2xl bg-yellow-400/10 border border-yellow-400/20"
                  />
                )}

                <Home
                  size={18}
                  className="relative z-10"
                />

                <span className="relative z-10 font-semibold">
                  Home
                </span>

              </Link>

              {/* RANKINGS */}
              <Link
                href="/rankings"
                className={`group relative px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 overflow-hidden ${
                  pathname.startsWith(
                    "/rankings"
                  )
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >

                <div className="absolute inset-0 rounded-2xl bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {pathname.startsWith(
                  "/rankings"
                ) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-2xl bg-yellow-400/10 border border-yellow-400/20"
                  />
                )}

                <Trophy
                  size={18}
                  className="relative z-10"
                />

                <span className="relative z-10 font-semibold">
                  Rankings
                </span>

              </Link>

              {/* DISCORD */}
              <a
                href="https://discord.gg/qFZtwEwwkR"
                target="_blank"
                className="group relative px-5 py-3 rounded-2xl flex items-center gap-3 text-gray-300 hover:text-[#5865F2] transition-all duration-300 overflow-hidden"
              >

                <div className="absolute inset-0 rounded-2xl bg-[#5865F2]/0 group-hover:bg-[#5865F2]/10 transition-all duration-300" />

                <Disc3
                  size={18}
                  className="relative z-10"
                />

                <span className="relative z-10 font-semibold">
                  Discord
                </span>

              </a>

            </div>

          </div>

        </div>

      </nav>
    </>
  );
}