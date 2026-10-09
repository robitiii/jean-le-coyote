"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "LAUNCHING_SOON_ON_PUMP_FUN";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 🥐 FLOATING 3D CROISSANTS (Background Parallax / Drift) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Croissant 1: Top Left */}
        <div className="absolute top-[18%] left-[6%] sm:left-[12%] text-4xl sm:text-5xl filter drop-shadow-[0_12px_24px_rgba(212,175,55,0.35)] animate-float-croissant-1 opacity-70">
          🥐
        </div>
        {/* Croissant 2: Top Right */}
        <div className="absolute top-[22%] right-[8%] sm:right-[14%] text-3xl sm:text-4xl filter drop-shadow-[0_12px_24px_rgba(212,175,55,0.3)] animate-float-croissant-2 opacity-65">
          🥐
        </div>
        {/* Croissant 3: Mid-Lower Left */}
        <div className="absolute bottom-[28%] left-[4%] sm:left-[10%] text-5xl sm:text-6xl filter drop-shadow-[0_16px_32px_rgba(212,175,55,0.4)] animate-float-croissant-3 opacity-75">
          🥐
        </div>
        {/* Croissant 4: Mid-Lower Right */}
        <div className="absolute bottom-[24%] right-[5%] sm:right-[11%] text-4xl sm:text-5xl filter drop-shadow-[0_14px_28px_rgba(212,175,55,0.35)] animate-float-croissant-1 opacity-70">
          🥐
        </div>
      </div>

      {/* 1. TOP LIVE STATUS & MARKETCAP BAR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto mb-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-royal-deep/80 border border-gold/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Status Live Indicator */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </span>
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase">
              STATUS: LIVE
            </span>
          </div>

          {/* Central Divider / Token Tag */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gold-soft/80 tracking-wider">
            <span className="text-gold">✦</span>
            <span>$JEAN</span>
            <span className="text-gold/50">|</span>
            <span>SOLANA</span>
          </div>

          {/* Live Marketcap */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-offwhite/60 font-medium">
              Marketcap:
            </span>
            <span className="font-mono text-sm sm:text-base font-bold text-gold tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
              $1,420,690
            </span>
            <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              +42.8%
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. GRAND REGAL TITLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold-soft text-xs sm:text-sm tracking-[0.3em] uppercase font-serif mb-3">
          <span>⚜</span>
          <span>The Aristocratic Anomaly</span>
          <span>⚜</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#D4AF37] to-[#996515] drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
          JEAN LE COYOTE
        </h1>

        <p className="font-serif text-lg sm:text-2xl md:text-3xl tracking-[0.35em] text-gold-soft font-light mt-3 uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          The AI-DNA Glitch.
        </p>
      </motion.div>

      {/* 3. CENTER STAGE: COYOTE VISUAL WITH CREATIVE TEXT & CONTROLS OVERLAP */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-4 sm:mt-6">
        {/* Golden Sunburst Aura behind Coyote */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[650px] h-[340px] sm:h-[520px] md:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(212,175,55,0.08)_45%,transparent_70%)] blur-2xl pointer-events-none"
        />

        {/* The Coyote Cutout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative w-[300px] sm:w-[420px] md:w-[500px] lg:w-[560px] aspect-[4/5] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] select-none"
        >
          <Image
            src="/hero-Jean.png"
            alt="Jean le Coyote wearing a blonde bob wig and French handlebar mustache"
            fill
            sizes="(max-width: 640px) 300px, (max-width: 768px) 420px, 560px"
            priority
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* CREATIVE OVERLAPPING LUXURY CARD (Draped gracefully over the lower body) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="relative -mt-16 sm:-mt-24 md:-mt-32 w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-royal-deep/85 border-2 border-gold/45 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] animate-gold-pulse text-center"
        >
          {/* Subtle Corner Accents */}
          <span className="absolute top-3 left-4 text-xs text-gold/60">✦</span>
          <span className="absolute top-3 right-4 text-xs text-gold/60">✦</span>
          <span className="absolute bottom-3 left-4 text-xs text-gold/60">✦</span>
          <span className="absolute bottom-3 right-4 text-xs text-gold/60">✦</span>

          {/* Narrative Line */}
          <p className="font-serif italic text-base sm:text-xl text-offwhite/90 max-w-xl mx-auto leading-relaxed">
            &ldquo;Burdened with human consciousness after a fateful bite in Paris. Now roaming the blockchain in search of his creator.&rdquo;
          </p>

          {/* Contract Address Display Box with Copy Tooltip */}
          <div className="mt-5 max-w-xl mx-auto">
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-royal/90 border border-gold/40 shadow-inner">
              <div className="flex items-center gap-2 overflow-hidden text-left">
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold shrink-0">
                  CA:
                </span>
                <span className="font-mono text-xs sm:text-sm text-offwhite/90 truncate select-all">
                  {contractAddress}
                </span>
              </div>

              {/* Copy Button */}
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold/15 hover:bg-gold/25 border border-gold/50 text-gold text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>

                {/* Floating Tooltip feedback */}
                {copied && (
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gold text-royal text-[11px] font-bold rounded shadow-lg whitespace-nowrap animate-bounce">
                    Copied to Clipboard!
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Luxury CTA Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA 1: Join the Hunt */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-medium tracking-wider uppercase text-sm text-royal bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 font-serif font-bold"
            >
              <span>✦</span>
              <span>Join the Hunt (Telegram)</span>
            </a>

            {/* CTA 2: Track on X */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-medium tracking-wider uppercase text-sm text-gold border-2 border-gold/70 bg-royal/40 hover:bg-gold/15 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 font-serif font-bold"
            >
              <span>Track on X</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
