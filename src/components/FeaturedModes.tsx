"use client";

import { motion } from "framer-motion";

const modes = [
  {
    name: "Sword",
    image: "/images/gamemodes/sword.png",
    description: "Competitive sword PvP rankings.",
  },

  {
    name: "Axe",
    image: "/images/gamemodes/axe.png",
    description: "Precision axe combat leaderboards.",
  },

  {
    name: "Crystal",
    image: "/images/gamemodes/crystal.png",
    description: "Advanced crystal PvP rankings.",
  },

  {
    name: "SMP",
    image: "/images/gamemodes/smp.png",
    description: "Survival multiplayer combat tiers.",
  },

  {
    name: "Pot",
    image: "/images/gamemodes/pots.png",
    description: "Potion PvP competitive rankings.",
  },

  {
    name: "Mace",
    image: "/images/gamemodes/mace.png",
    description: "Modern mace combat rankings.",
  },
  {
  name: "NethPot",
  image: "/images/gamemodes/nethpot.png",
  description: "Netherite potion PvP rankings.",
},
];

export default function FeaturedModes() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">

          <p className="text-red-500 uppercase tracking-[4px] font-semibold">
            Gamemodes
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Featured PvP Modes
          </h2>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass hover-card red-glow rounded-3xl p-8 cursor-pointer group"
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-4xl mb-7 group-hover:scale-110 transition">

                <img src={mode.image} alt={mode.name} className="w-full h-full object-cover" />

              </div>

              {/* Name */}
              <h3 className="text-3xl font-black group-hover:text-red-500 transition">

                {mode.name}

              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-7">

                {mode.description}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}