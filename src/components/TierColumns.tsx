"use client";

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";
import PlayerModal from "./PlayerModal";
import { getPlayerTitle } from "@/lib/titles";

interface TierColumnsProps {
  gamemode: string;
}

const tierStyles: any = {
  "Tier 1": {
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    glow:
      "shadow-[0_0_30px_rgba(255,215,0,0.08)]",
  },

  "Tier 2": {
    color: "text-gray-300",
    border: "border-gray-400/20",
    glow:
      "shadow-[0_0_30px_rgba(255,255,255,0.05)]",
  },

  "Tier 3": {
    color: "text-orange-400",
    border: "border-orange-400/20",
    glow:
      "shadow-[0_0_30px_rgba(255,140,0,0.08)]",
  },

  "Tier 4": {
    color: "text-blue-400",
    border: "border-blue-400/20",
    glow:
      "shadow-[0_0_30px_rgba(0,140,255,0.08)]",
  },

  "Tier 5": {
    color: "text-zinc-400",
    border: "border-zinc-400/20",
    glow:
      "shadow-[0_0_30px_rgba(255,255,255,0.03)]",
  },
};

export default function TierColumns({
  gamemode,
}: TierColumnsProps) {
  const [players, setPlayers] =
    useState<any[]>([]);
  const [selectedPlayer, setSelectedPlayer] =
  useState<any>(null);

  useEffect(() => {
    const fetchPlayers =
      async () => {
        try {
          const res =
            await fetch(
              "/api/players"
            );

          const data =
            await res.json();

          setPlayers(
            Array.isArray(data)
              ? data
              : []
          );
        } catch (err) {
          console.error(err);
        }
      };

    fetchPlayers();
  }, []);

  const tiers = [
    {
      label: "Tier 1",
      ranks: ["HT1", "LT1"],
    },

    {
      label: "Tier 2",
      ranks: ["HT2", "LT2"],
    },

    {
      label: "Tier 3",
      ranks: ["HT3", "LT3"],
    },

    {
      label: "Tier 4",
      ranks: ["HT4", "LT4"],
    },

    {
      label: "Tier 5",
      ranks: ["HT5", "LT5"],
    },
  ];

  return (
    <section className="pb-20">

      <div className="max-w-[1700px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-5">

          {tiers.map(
            (tier, index) => {
              const style =
                tierStyles[
                  tier.label
                ];

              const filteredPlayers =
                players.filter(
                  (player) => {
                    const value =
                      player
                        .tiers?.[
                        gamemode
                      ];

                    if (!value)
                      return false;

                    const clean =
                      String(
                        value
                      )
                        .trim()
                        .toUpperCase();

                    return tier.ranks.includes(
                      clean
                    );
                  }
                );

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      index * 0.08,
                  }}
                  className={`
bg-[#0d1016]/90
backdrop-blur-xl
rounded-[28px]
border
${style.border}
overflow-hidden
${style.glow}
`}
                >

                  {/* HEADER */}
                  <div className="px-6 py-5 border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent">

                    <div className="flex items-center justify-between">

                      <div>

                        <h2
                          className={`text-[38px] leading-none font-black tracking-tight ${style.color}`}
                        >
                          {tier.label}
                        </h2>

                        <p className="text-gray-500 text-sm mt-2">
                          {gamemode} Players
                        </p>

                      </div>

                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] ${style.color}`}
                      >
                        🏆
                      </div>

                    </div>

                  </div>

                  {/* PLAYERS */}
                  <div className="p-4 flex flex-col gap-2">

                    {filteredPlayers.length ===
                    0 ? (
                      <div className="text-center text-gray-500 py-10 font-bold">
                        No Players
                      </div>
                    ) : (
                      filteredPlayers.map(
                        (
                          player,
                          i
                        ) => {
                          const username =
  String(
    player.username ||
    player.ign ||
    player.name ||
    "Steve"
  ).trim();

const skin =
  encodeURIComponent(username);
                            

                          const rank =
                            player
                              .tiers?.[
                              gamemode
                            ];

                          return (
                            <motion.div
  key={i}
  whileHover={{
    scale: 1.02,
    x: 4,
  }}
onClick={() => {
  const tierPoints: any = {
    HT1: 60,
    LT1: 45,
    HT2: 30,
    LT2: 20,
    HT3: 10,
    LT3: 6,
    HT4: 4,
    LT4: 3,
    HT5: 2,
    LT5: 1,
  };

  const sortedPlayers = [...players]
    .map((p) => {
      const points = Object.values(
        p.tiers || {}
      ).reduce(
        (
          total: number,
          tier: any
        ) =>
          total +
          (tierPoints[
            String(tier)
              .trim()
              .toUpperCase()
          ] || 0),
        0
      );

      return {
        ...p,
        points,
      };
    })
    .sort(
      (a, b) =>
        b.points - a.points
    );

  const realRank =
    sortedPlayers.findIndex(
      (p) =>
        p._id === player._id
    ) + 1;

  const fullPlayer =
    sortedPlayers.find(
      (p) =>
        p._id === player._id
    );

  setSelectedPlayer({
    ...player,
    username,
    skin: username,
    rank: realRank,
    points:
      fullPlayer?.points || 0,
  });
}}
  className="group flex items-center justify-between rounded-2xl px-3 py-3 hover:bg-white/[0.03] transition-all duration-200 border border-transparent hover:border-white/5 cursor-pointer"
>

                              {/* LEFT */}
                              <div className="flex items-center gap-3 min-w-0">


{/* SKIN */}
<div className="relative w-[58px] h-[68px] overflow-hidden">

  {/* GLOW */}
  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-red-500/10 to-transparent blur-3xl" />

  {/* SKIN */}
  <img
  src={`https://visage.surgeplay.com/full/512/${skin}`}
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
scale-[1.6]
translate-y-5
"
/>

</div>

                                {/* NAME */}
                                <div className="min-w-0">

                                  <h3 className="text-white font-bold text-[15px] truncate">
                                    {
                                      username
                                    }
                                  </h3>

                                  <p className="text-gray-500 text-xs">
                                    Ranked Player
                                  </p>

                                </div>

                              </div>

                              {/* BADGE */}
                              <div
                                className={`
px-3
py-1.5
rounded-xl
text-xs
font-black
tracking-wide
border

${
  rank?.includes(
    "HT"
  )
    ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    : "bg-orange-500/10 text-orange-300 border-orange-500/20"
}
`}
                              >
                                {rank}
                              </div>

                            </motion.div>
                          );
                        }
                      )
                    )}

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

      </div>

      {/* PLAYER MODAL */}
{selectedPlayer && (
  <PlayerModal
    player={selectedPlayer}
    onClose={() =>
      setSelectedPlayer(null)
    }
  />
)}

    </section>
  );
}