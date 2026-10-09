"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/** Slow floating gold/blue glow orbs with a subtle scroll parallax. */
export default function AmbientBackground() {
  const { scrollY } = useScroll();
  const slow = useTransform(scrollY, [0, 3000], [0, -240]);
  const slower = useTransform(scrollY, [0, 3000], [0, -120]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#14214a_0%,#0b132b_55%,#070d20_100%)]" />

      <motion.div style={{ y: slow }} className="absolute inset-0">
        <div className="animate-drift-slow absolute -left-32 top-[12%] h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[110px]" />
        <div className="animate-drift-slower absolute -right-24 top-[55%] h-[26rem] w-[26rem] rounded-full bg-gold/[0.07] blur-[120px]" />
      </motion.div>

      <motion.div style={{ y: slower }} className="absolute inset-0">
        <div className="animate-drift-slower absolute left-[35%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-[#2a4390]/25 blur-[120px]" />
        <div className="animate-drift-slow absolute right-[20%] top-[5%] h-[18rem] w-[18rem] rounded-full bg-[#2a4390]/20 blur-[100px]" />
      </motion.div>
    </div>
  );
}
