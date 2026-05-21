"use client";

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import PlayerModal from "./PlayerModal";
import { getPlayerTitle } from "@/lib/titles";

const gamemodeIcons = [
  {
    key: "Sword",
    icon: "/images/gamemodes/sword.png",
  },

  {
    key: "Crystal",
    icon: "/images/gamemodes/crystal.png",
  },

  {
    key: "Pots",
    icon: "/images/gamemodes/pots.png",
  },

  {
    key: "Mace",
    icon: "/images/gamemodes/mace.png",
  },

  {
    key: "SMP",
    icon: "/images/gamemodes/smp.png",
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

const tierPoints: any = {
  HT1: 60,
  HT2: 30,
  HT3: 10,
  HT4: 4,
  HT5: 2,

  LT1: 45,
  LT2: 20,
  LT3: 6,
  LT4: 3,
  LT5: 1,

  UR: 0,
  Unranked: 0,
  unranked: 0,
};

export default function RankingTable() {
  const [players, setPlayers] =
    useState<any[]>([]);

  const [selectedPlayer, setSelectedPlayer] =
    useState<any>(null);
  
  const [search, setSearch] =
  useState("");

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch(
          "/api/players"
        );

        const data = await res.json();

        const formatted =
          Array.isArray(data)
            ? data.map(
                (player: any) => {
                  const username =
                    player.username ||
                    player.ign ||
                    "Unknown";

                  const skin =
                    player.skin ||
                    username;

                  const points =
                    Object.values(
                      player.tiers ||
                        {}
                    ).reduce(
                      (
                        total: number,
                        tier: any
                      ) =>
                        total +
                        (tierPoints[
                          String(
                            tier
                          ).trim()
                        ] || 0),
                      0
                    );

                     const testedModesCount =
            Object.values(
              player.tiers || {}
            ).filter((tier: any) => {
              const cleanTier =
                String(tier)
                  .trim()
                  .toUpperCase();
              


              return (
                cleanTier !==
                  "UR" &&
                cleanTier !==
                  "UNRANKED"
              );
            }).length;

                  return {
                    ...player,
                    username,
                    skin,
                    points,
                    testedModesCount,
                  };
                }
              )
              // REMOVE ZERO POINT PLAYERS
        .filter(
          (player: any) =>
            player.points > 0 &&
            player.testedModesCount > 0
        )


              
            : [];

        formatted.sort(
          (a: any, b: any) =>
            b.points -
            a.points
        );

        setPlayers(formatted);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  const filteredPlayers =
  players.filter((player) =>
    String(
      player.username ||
      player.ign ||
      ""
    )
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );

  return (
    <section className="pb-20">
      <div className="max-w-[1700px] mx-auto px-6">

        {/* SEARCH */}
<div className="mb-6">

  <div className="relative">

    <input
      type="text"
      placeholder="Search players..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
w-full
h-[70px]
rounded-[24px]
bg-[#0d1016]
border
border-white/5
px-6
text-white
text-lg
font-bold
outline-none
focus:border-yellow-400/30
transition-all
placeholder:text-gray-500
"
    />

  </div>

</div>

        {/* TABLE */}
        <div className="relative overflow-hidden rounded-[34px] border border-white/5 bg-[#080b12]/95 backdrop-blur-2xl shadow-[0_0_100px_rgba(255,0,0,0.04)]">

          {/* TOP GLOW */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />

          {/* HEADER */}
          <div className="hidden lg:grid grid-cols-[70px_1.8fr_0.7fr_2fr_110px] px-6 py-5 border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent text-gray-500 text-xs uppercase tracking-[4px]">

            <div>#</div>

            <div>Player</div>

            <div>Region</div>

            <div>Tier</div>

            <div className="text-right">
              Points
            </div>

          </div>

          {/* EMPTY */}
          {filteredPlayers.length ===
            0 && (
            <div className="py-28 text-center text-gray-500 text-2xl font-black">
              No Players Found
            </div>
          )}

          {/* PLAYERS */}
          {filteredPlayers.map(
            (
              player,
              index
            ) => {
              const rank =
  players.findIndex(
    (p) =>
      p.username ===
      player.username
  ) + 1;

              const playerTitle =
                getPlayerTitle(
                  player.points
                );

              const testedModes =
                gamemodeIcons.filter(
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
                      cleanTier !==
                        "UR" &&
                      cleanTier !==
                        "UNRANKED"
                    );
                  }
                );

              return (
                <motion.div
                  key={
                    player._id ||
                    index
                  }
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  whileHover={{
                    scale: 1.003,
                  }}
                  onClick={() =>
                    setSelectedPlayer({
                      ...player,
                      rank,
                    })
                  }
                  className={`
relative
grid
lg:grid-cols-[70px_1.8fr_0.7fr_2fr_110px]
items-center
px-4
py-2
border-b
border-white/5
transition-all
duration-300
cursor-pointer
overflow-hidden

hover:bg-white/[0.025]

${
  rank === 1
    ? "bg-gradient-to-r from-yellow-400/[0.08] via-transparent to-transparent"
    : ""
}

${
  rank === 2
    ? "bg-gradient-to-r from-gray-400/[0.06] via-transparent to-transparent"
    : ""
}

${
  rank === 3
    ? "bg-gradient-to-r from-orange-500/[0.08] via-transparent to-transparent"
    : ""
}
`}
                >

                  {/* TOP PLAYER GLOW */}
                  {rank <=
                    3 && (
                    <div className="absolute inset-0 pointer-events-none">

                      <div
                        className={`
absolute inset-y-0 left-0 w-[350px] blur-3xl opacity-20

${
  rank === 1
    ? "bg-yellow-400"
    : ""
}

${
  rank === 2
    ? "bg-gray-300"
    : ""
}

${
  rank === 3
    ? "bg-orange-500"
    : ""
}
`}
                      />

                    </div>
                  )}

                  {/* RANK */}
                  <div className="relative z-10">

                    <div
                      className={`
text-3xl
font-black
tracking-[-2px]

${
  rank === 1
    ? "text-yellow-400"
    : ""
}

${
  rank === 2
    ? "text-gray-200"
    : ""
}

${
  rank === 3
    ? "text-orange-400"
    : ""
}

${
  rank > 3
    ? "text-white"
    : ""
}
`}
                    >
                      {rank}.
                    </div>

                  </div>

                  {/* PLAYER */}
                  <div className="relative z-10 flex items-center gap-4">

                    {/* SKIN */}
                    <div className="relative w-[52px] h-[62px] overflow-hidden flex-shrink-0">

                      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-red-500/10 to-transparent blur-3xl" />

                      <img
                        src={
                          player.premium !== false &&
                          player.username
                            ? `https://visage.surgeplay.com/full/512/${player.username}`
                            : `https://visage.surgeplay.com/full/512/Steve`
                        }
                        alt={
                          player.username
                        }
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
translate-y-5
"
                      />

                    </div>

                    {/* INFO */}
                    <div>

                      {/* USERNAME */}
                      <h2 className="text-[24px] leading-none tracking-[-1px] font-black text-white">
                        {
                          player.username
                        }
                      </h2>

                      {/* TITLE */}
                      <div className="mt-2 flex items-center gap-2">

                        <img
                          src={
                            playerTitle.icon
                          }
                          alt={
                            playerTitle.title
                          }
                          className="w-4 h-4 object-contain"
                        />

                        <span className="text-sm text-gray-300 font-bold">
                          {
                            playerTitle.title
                          }
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* REGION */}
                  <div className="relative z-10">

                    <div
                      className={`
w-fit
px-3
py-2
rounded-xl
font-black
text-sm
border

${
  player.region ===
  "EU"
    ? "bg-green-500/10 text-green-400 border-green-500/20"
    : ""
}

${
  player.region ===
  "NA"
    ? "bg-red-500/10 text-red-400 border-red-500/20"
    : ""
}

${
  player.region !==
    "EU" &&
  player.region !==
    "NA"
    ? "bg-white/[0.04] text-gray-200 border-white/5"
    : ""
}
`}
                    >
                      {player.region ||
                        "AS"}
                    </div>

                  </div>

                  {/* MODES */}
                  <div className="relative z-10 flex gap-2 flex-wrap">

                    {testedModes.map(
                      (
                        mode,
                        index
                      ) => (
                        <motion.div
                          key={
                            index
                          }
                          whileHover={{
                            y: -2,
                            scale: 1.04,
                          }}
                          className="
w-[50px]
h-[62px]
rounded-[18px]
bg-gradient-to-b
from-[#141926]
to-[#090d15]
border
border-white/5
flex
flex-col
items-center
justify-center
gap-1
shadow-[0_0_25px_rgba(0,0,0,0.35)]
hover:border-yellow-400/30
transition-all
duration-300
"
                        >

                          {/* ICON */}
                          <div className="w-6 h-6 rounded-full bg-black/30 flex items-center justify-center">

                            <img
                              src={
                                mode.icon
                              }
                              alt={
                                mode.key
                              }
                              className="w-3.5 h-3.5 object-contain"
                            />

                          </div>

                          {/* TIER */}
                          <span className="text-yellow-400 font-black text-[10px]">
                            {
                              player
                                .tiers?.[
                                mode.key
                              ]
                            }
                          </span>

                        </motion.div>
                      )
                    )}

                  </div>

                  {/* POINTS */}
                  <div className="relative z-10 text-right">

                    <div
                      className={`
text-3xl
font-black

${
  rank === 1
    ? "text-yellow-400"
    : "text-white"
}
`}
                    >
                      {
                        player.points
                      }
                    </div>

                    <div className="text-[10px] uppercase tracking-[3px] text-gray-500 mt-1">
                      Points
                    </div>

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

      </div>

      {/* MODAL */}
      {selectedPlayer && (
        <PlayerModal
          player={
            selectedPlayer
          }
          onClose={() =>
            setSelectedPlayer(
              null
            )
          }
        />
      )}
    </section>
  );
}