"use client";

import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Swords,
  Globe,
  Shield,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "400+",
    label: "Registered Players",
  },

  {
    icon: Trophy,
    value: "90+",
    label: "Ranked Players",
  },

  {
    icon: Swords,
    value: "16",
    label: "Active Testers",
  },


  {
    icon: Globe,
    value: "5",
    label: "Regions",
  },


];

export default function StatsSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">

          <p className="text-red-500 uppercase tracking-[4px] font-semibold">
            Statistics
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Competitive PvP Network
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass hover-card red-glow rounded-3xl p-7"
              >

                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">

                  <Icon className="text-red-500" size={28} />

                </div>

                <h3 className="text-4xl font-black text-yellow-400">
                  {item.value}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.label}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}