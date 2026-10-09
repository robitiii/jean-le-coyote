"use client";

import { motion } from "framer-motion";

export default function BountyLeaderboard() {
  return (
    <section
      id="bounty"
      className="relative min-h-[80vh] w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-royal/80 flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative Golden Ambient Halo in Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full bg-gold/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs uppercase tracking-[0.3em] font-serif mb-4">
            <span>⚜</span>
            <span>Feature Coming Soon</span>
            <span>⚜</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#D4AF37] to-[#AA7C11] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            The Royal Bounty
          </h2>

          <p className="font-serif text-lg sm:text-xl text-offwhite/75 italic mt-3">
            A premier feature coming soon — track verified sightings and claim on-chain bounties in $CLJEAN.
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* PROMINENT COMING SOON SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border-2 border-gold/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] shadow-gold/15 overflow-hidden p-8 sm:p-12 text-center"
        >
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-royal-deep border border-gold/50 text-gold shadow-[0_0_15px_rgba(212,175,55,0.35)] mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em]">
              FEATURE COMING SOON
            </span>
          </div>

          {/* Central Coming Soon Headline */}
          <h3 className="font-serif text-3xl sm:text-5xl font-bold text-offwhite tracking-wide mb-4">
            Bounty System — Coming Soon
          </h3>

          <p className="font-sans text-sm sm:text-base text-offwhite/80 max-w-xl mx-auto leading-relaxed mb-8">
            This feature is currently coming soon as the full verification and claiming functionalities are being integrated. In Phase 2, members of the court will be able to submit verified sightings of Jean le Coyote, complete intelligence missions, and earn rewards in $CLJEAN.
          </p>

          {/* ACTION BUTTONS */}
          <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/jeanDeCoyote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-gold via-gold-soft to-gold text-royal font-serif font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.45)]"
            >
              Get Notified on Telegram
            </a>

            <a
              href="https://x.com/Jean_le_Coyote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl border border-gold/60 text-gold font-serif font-bold text-xs uppercase tracking-wider hover:bg-gold/10 transition-all"
            >
              Follow Announcements on X
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
