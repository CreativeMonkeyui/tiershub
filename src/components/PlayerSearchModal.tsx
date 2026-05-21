"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  username: string | null;
  onClose: () => void;
}

export default function PlayerSearchModal({
  username,
  onClose,
}: Props) {
  if (!username) return null;

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4"
      >

        {/* MODAL */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: 40,
          }}
          transition={{
            duration: 0.25,
          }}
          className="relative w-full max-w-[520px] rounded-[32px] overflow-hidden border border-white/10 bg-[#0b1020] shadow-[0_0_80px_rgba(0,0,0,0.65)]"
        >

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition text-3xl text-white"
          >
            ×
          </button>

          {/* CONTENT */}
          <div className="p-8 flex flex-col items-center">

            {/* SKIN */}
            <div className="relative w-[130px] h-[130px] rounded-full border-4 border-yellow-400 overflow-hidden bg-[#101828]">

              <div className="absolute inset-0 bg-yellow-400/20 blur-2xl" />

              <img
                src={`https://mc-heads.net/body/${username}/right`}
                alt={username}
                className="absolute inset-0 w-full h-full object-contain scale-[1.45] translate-y-5"
              />

            </div>

            {/* NAME */}
            <h1 className="mt-5 text-5xl font-black text-white">
              {username}
            </h1>

            {/* TITLE */}
            <div className="mt-3 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 font-bold">
              ✦ Competitive PvP Player
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 w-full mt-10">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-gray-400 text-sm">
                  Global Rank
                </p>

                <h2 className="text-3xl font-black text-yellow-400 mt-2">
                  #1
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-gray-400 text-sm">
                  Points
                </p>

                <h2 className="text-3xl font-black text-white mt-2">
                  2450
                </h2>
              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}