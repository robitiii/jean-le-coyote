"use client";

import { motion } from "framer-motion";

const courtRanksPreview = [
  {
    title: "Bounty King",
    icon: "👑",
    tier: "Rank #1",
    reward: "1,000,000 $JEAN",
    badge: "Supreme Sovereign of Reconnaissance",
    color: "border-gold text-gold bg-gold/10",
  },
  {
    title: "Royal Duke",
    icon: "⚜️",
    tier: "Ranks #2 - #5",
    reward: "500,000 $JEAN",
    badge: "Master of Parisian Scent Trails",
    color: "border-amber-400/50 text-amber-300 bg-amber-400/10",
  },
  {
    title: "Knight",
    icon: "⚔️",
    tier: "Ranks #6 - #15",
    reward: "250,000 $JEAN",
    badge: "Defender of the French Mustache",
    color: "border-cyan-400/50 text-cyan-300 bg-cyan-400/10",
  },
  {
    title: "Squire",
    icon: "📜",
    tier: "Ranks #16 - #50",
    reward: "100,000 $JEAN",
    badge: "Apprentice Meme Cartographer",
    color: "border-purple-400/50 text-purple-300 bg-purple-400/10",
  },
  {
    title: "Peasant",
    icon: "🌾",
    tier: "All Verified Participants",
    reward: "25,000 $JEAN",
    badge: "Faithful Believer in the Glitch",
    color: "border-zinc-500/50 text-zinc-300 bg-zinc-500/10",
  },
];

export default function BountyLeaderboard() {
  return (
    <section
      id="bounty"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-royal/80 flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative Golden Ambient Halo in Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full bg-gold/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
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
            A premier feature coming soon — track verified sightings and claim on-chain bounties in $JEAN.
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* PROMINENT COMING SOON SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative w-full rounded-3xl bg-white/5 backdrop-blur-xl border-2 border-gold/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] shadow-gold/15 overflow-hidden p-6 sm:p-10 text-center"
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

          <p className="font-sans text-sm sm:text-base text-offwhite/80 max-w-2xl mx-auto leading-relaxed mb-10">
            This feature is currently coming soon as the full verification and claiming functionalities are being integrated. In Phase 2, members of the court will be able to submit verified sightings of Jean le Coyote, complete intelligence missions, and earn rewards across all royal ranks.
          </p>

          {/* PREVIEW OF UPCOMING COURT RANKS */}
          <div className="mb-10 text-left">
            <div className="flex items-center justify-between mb-4 border-b border-gold/20 pb-2">
              <span className="font-serif text-lg font-bold text-gold">
                Preview of Upcoming Court Tiers
              </span>
              <span className="font-mono text-xs text-offwhite/50">
                Total Bounty Reserve: 5,000,000 $JEAN
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {courtRanksPreview.map((rank) => (
                <div
                  key={rank.title}
                  className={`p-4 rounded-2xl border backdrop-blur-md bg-royal-deep/60 ${rank.color} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xl">{rank.icon}</span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-black/40 border border-current">
                      {rank.tier}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-offwhite">
                    {rank.title}
                  </h4>

                  <span className="font-mono text-xs font-semibold block text-gold mt-1">
                    Reward: {rank.reward}
                  </span>

                  <p className="text-[11px] text-offwhite/60 font-sans mt-1">
                    {rank.badge}
                  </p>
                </div>
              ))}

              {/* Extra Teaser Box */}
              <div className="p-4 rounded-2xl border border-dashed border-gold/40 bg-royal-deep/30 flex flex-col justify-center items-center text-center">
                <span className="text-xl text-gold mb-1">✦</span>
                <span className="font-serif text-base font-bold text-offwhite">
                  Automated X Verification
                </span>
                <span className="text-[11px] font-mono text-gold-soft mt-1">
                  Tagging @JeanLeCoyote with #JeanLeCoyote
                </span>
              </div>
            </div>
          </div>

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
