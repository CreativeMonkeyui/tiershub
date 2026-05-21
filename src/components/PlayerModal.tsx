"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { getPlayerTitle } from "@/lib/titles";

interface PlayerModalProps {
  player: any;
  onClose: () => void;
}

const gamemodes = [
  {
    key: "Sword",
    icon: "/images/gamemodes/sword.png",
  },
  {
    key: "Pots",
    icon: "/images/gamemodes/pots.png",
  },
  {
    key: "Crystal",
    icon: "/images/gamemodes/crystal.png",
  },
  {
    key: "SMP",
    icon: "/images/gamemodes/smp.png",
  },
  {
    key: "Mace",
    icon: "/images/gamemodes/mace.png",
  },
  {
    key: "Axe",
    icon: "/images/gamemodes/axe.png",
  },
  {
    key: "NethPot",
    icon: "/images/gamemodes/nethpot.png",
  },
];

export default function PlayerModal({
  player,
  onClose,
}: PlayerModalProps) {
  if (!player) return null;

  const username =
    player.username ||
    player.ign ||
    "Unknown";

  const skin =
    player.skin ||
    player.username ||
    "Steve";

  const points =
    player.points || 0;

  const playerTitle =
    getPlayerTitle(points);

  const testedModes =
    gamemodes.filter(
      (mode) => {
        const tier =
          player.tiers?.[
            mode.key
          ];

        if (!tier)
          return false;

        const cleanTier =
          String(tier)
            .trim()
            .toUpperCase();

        return (
          cleanTier !== "UR" &&
          cleanTier !==
            "UNRANKED"
        );
      }
    );

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={onClose}
        className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-xl flex items-center justify-center px-3 py-4"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          transition={{
            duration: 0.22,
          }}
          onClick={(e) =>
            e.stopPropagation()
          }
          className="
relative
w-full
max-w-[560px]
max-h-[92vh]
overflow-y-auto
rounded-[28px]
border
border-yellow-500/10
bg-[#06080f]
shadow-[0_0_80px_rgba(255,0,0,0.08)]
"
        >
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.10),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,0,0,0.10),transparent_35%)]" />

          {/* TOP BORDER */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="
absolute
top-4
right-4
z-30
w-10
h-10
rounded-full
bg-white/5
border
border-white/10
hover:bg-white/10
transition-all
text-white
text-2xl
flex
items-center
justify-center
"
          >
            ×
          </button>

          <div className="relative z-10 p-5">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row items-center gap-4">

              {/* SKIN */}
              <div className="relative w-[110px] h-[135px] overflow-hidden flex-shrink-0">

                <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full" />

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90px] h-[90px] bg-red-500/15 blur-3xl rounded-full" />

                <img
                  src={
                    player.premium !== false &&
                    player.username
                      ? `https://visage.surgeplay.com/full/512/${player.username}`
                      : `https://mc-heads.net/body/Steve/right`
                  }
                  alt={username}
                  onError={(e) => {
                    (
                      e.currentTarget as HTMLImageElement
                    ).src =
                      "https://visage.surgeplay.com/full/512/Steve";
                  }}
                  className="
relative
z-10
w-full
h-full
object-contain
scale-[1.5]
translate-y-10
drop-shadow-[0_0_18px_rgba(255,215,0,0.25)]
"
                />

              </div>

              {/* INFO */}
              <div className="flex-1 text-center md:text-left">

                {/* RANK */}
                <div
                  className={`
inline-flex
items-center
gap-2
px-4
py-2
rounded-2xl
border
mb-4

${
  player.rank === 1
    ? "bg-yellow-500/10 border-yellow-400/30 text-yellow-300"
    : ""
}

${
  player.rank === 2
    ? "bg-gray-400/10 border-gray-300/20 text-gray-200"
    : ""
}

${
  player.rank === 3
    ? "bg-orange-500/10 border-orange-400/20 text-orange-300"
    : ""
}

${
  player.rank > 3
    ? "bg-white/5 border-white/10 text-gray-200"
    : ""
}
`}
                >
                  <span className="text-xs uppercase tracking-[3px] font-bold">
                    Rank
                  </span>

                  <span className="text-xl font-black">
                    #{player.rank}
                  </span>
                </div>

                {/* USERNAME */}
                <h1 className="text-4xl md:text-5xl leading-none font-black text-white">
                  {username}
                </h1>

                {/* TITLE */}
                <div className="mt-4 flex items-center justify-center md:justify-start gap-3">

                  <img
                    src={playerTitle.icon}
                    alt={playerTitle.title}
                    className="w-7 h-7 object-contain"
                  />

                  <span className="text-lg font-bold text-yellow-300">
                    {playerTitle.title}
                  </span>

                </div>

                {/* REGION */}
                <div className="mt-4">
                  <span className="px-4 py-2 rounded-2xl border border-red-500/20 bg-red-500/10 text-red-300 font-black tracking-[2px] text-sm">
                    {player.region || "AS"}
                  </span>
                </div>

              </div>

            </div>

            {/* STATS */}
            <div className="mt-5 grid grid-cols-2 gap-4">

              <div className="relative overflow-hidden rounded-[24px] border border-yellow-500/10 bg-gradient-to-b from-[#11141d] to-[#090b10] p-5">

                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

                <p className="text-[11px] uppercase tracking-[3px] text-gray-500 font-bold">
                  Total Points
                </p>

                <div className="mt-3 flex items-end gap-2">

                  <h2 className="text-5xl font-black text-white">
                    {points}
                  </h2>

                  <span className="text-gray-500 font-bold mb-1 text-sm">
                    PTS
                  </span>

                </div>

              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-red-500/10 bg-gradient-to-b from-[#11141d] to-[#090b10] p-5">

                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

                <p className="text-[11px] uppercase tracking-[3px] text-gray-500 font-bold">
                  Leaderboard
                </p>

                <div className="mt-3 flex items-end gap-2">

                  <h2 className="text-5xl font-black text-white">
                    #{player.rank}
                  </h2>

                  <span className="text-gray-500 font-bold mb-1 text-sm">
                    GLOBAL
                  </span>

                </div>

              </div>

            </div>

            {/* MODES */}
            <div className="mt-6">

              <div className="flex items-center justify-between mb-4">

                <h2 className="text-xl font-black text-white">
                  Tested Modes
                </h2>

                <span className="text-xs uppercase tracking-[3px] text-gray-500 font-bold">
                  {testedModes.length} Modes
                </span>

              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">

                {testedModes.map(
                  (
                    mode,
                    index
                  ) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="
relative
overflow-hidden
rounded-[22px]
border
border-white/5
bg-gradient-to-b
from-[#151925]
to-[#0a0c12]
p-3
"
                    >

                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

                      <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-center">

                        <img
                          src={mode.icon}
                          alt={mode.key}
                          className="w-6 h-6 object-contain"
                        />

                      </div>

                      <h3 className="mt-3 text-sm font-black text-white">
                        {mode.key}
                      </h3>

                      <div className="mt-2 inline-flex px-3 py-1 rounded-xl bg-yellow-500/10 border border-yellow-500/20">

                        <span className="text-yellow-300 text-xs font-black tracking-[1px]">
                          {
                            player
                              .tiers?.[
                              mode.key
                            ]
                          }
                        </span>

                      </div>

                    </motion.div>
                  )
                )}

              </div>

            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}