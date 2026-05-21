"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const modes = [
  {
    name: "Overall",
    path: "/rankings",
    icon: "/images/gamemodes/overall.png",
  },

  {
    name: "Sword",
    path: "/rankings/sword",
    icon: "/images/gamemodes/sword.png",
  },

  {
    name: "Axe",
    path: "/rankings/axe",
    icon: "/images/gamemodes/axe.png",
  },

  {
    name: "Crystal",
    path: "/rankings/crystal",
    icon: "/images/gamemodes/crystal.png",
  },

  {
    name: "SMP",
    path: "/rankings/smp",
    icon: "/images/gamemodes/smp.png",
  },

  {
    name: "Pot",
    path: "/rankings/pot",
    icon: "/images/gamemodes/pots.png",
  },

  {
    name: "Mace",
    path: "/rankings/mace",
    icon: "/images/gamemodes/mace.png",
  },

  {
    name: "NethPot",
    path: "/rankings/nethpot",
    icon: "/images/gamemodes/nethpot.png",
  },
];

export default function GamemodeTabs() {
  const pathname = usePathname();

  return (
    <section className="py-8">

      <div className="max-w-[1600px] mx-auto px-6">

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">

          {modes.map((mode, index) => {

            const active = pathname === mode.path;

            return (
              <Link
                href={mode.path}
                key={index}
              >

                <div
                  className={`group rounded-2xl border transition-all duration-200 overflow-hidden ${
                    active
                      ? "border-yellow-400/40 bg-[#11131a]"
                      : "border-white/5 bg-[#0d0f14] hover:border-red-500/30"
                  }`}
                >

                  <div className="px-5 py-6 flex flex-col items-center justify-center">

                    {/* ICON */}
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                        active
                          ? "bg-yellow-400/10"
                          : "bg-black/30 group-hover:bg-red-500/10"
                      }`}
                    >

                      <img
                        src={mode.icon}
                        alt={mode.name}
                        className="w-8 h-8 object-contain"
                      />

                    </div>

                    {/* NAME */}
                    <h3
                      className={`mt-4 text-[17px] font-bold transition-all duration-200 ${
                        active
                          ? "text-yellow-400"
                          : "text-white"
                      }`}
                    >
                      {mode.name}
                    </h3>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}