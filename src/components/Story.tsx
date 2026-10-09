"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface StoryChapter {
  id: string;
  roman: string;
  title: string;
  quote: string;
  description: string;
  previewImage?: string;
  tag: string;
  filename: string;
}

const chapters: StoryChapter[] = [
  {
    id: "incident",
    roman: "I",
    title: "The Incident",
    quote: "Jean Phil was shadowboxing in Paris. A wild coyote bit his arm.",
    description:
      "Beneath the flickering gas lamps of Montmartre, French aristocrat Jean Phil engaged in his twilight shadowboxing ritual. A ferocious silhouette lunged from the Parisian mist—teeth meeting aristocratic flesh in a collision of high-fashion and primal fury.",
    previewImage: "/Jean Phil.jpg",
    tag: "PARISIAN PROTOCOL",
    filename: "BIOMECHANIC_INCIDENT_01.MP4",
  },
  {
    id: "glitch",
    roman: "II",
    title: "The AI Glitch",
    quote:
      "The coyote didn't ingest blood; it ingested corrupted AI prompt data, sprouting a pristine blonde bob and handlebar mustache.",
    description:
      "Through the bloodstream flowed thousands of synthetic tokens and neural hyper-parameters. Within seconds, the beast underwent a sudden phenotypic metamorphism—growing an impeccably coiffed blonde bob and an aristocratic French handlebar mustache.",
    previewImage: "/1791037491432.jpg",
    tag: "NEURAL CORRUPTION",
    filename: "MUTATION_SEQUENCE_02.MP4",
  },
  {
    id: "hunt",
    roman: "III",
    title: "The Hunt",
    quote:
      "Now burdened with human consciousness, the coyote wanders the globe searching for its creator.",
    description:
      "Cursed with existential dread and an aristocratic appetite, Jean le Coyote left Paris. Armed with an uncanny intellect and sharp Solanoid intuition, he traverses global financial capitals searching for the shadowboxer who engineered his soul.",
    previewImage: "/Jean Reference - Dead-on.jpg",
    tag: "GLOBAL ODYSSEY",
    filename: "CONSCIOUSNESS_ROAM_03.MP4",
  },
];

const thoughtBubbles = [
  "Où es-tu, Jean Phil?",
  "Searching for my creator...",
  "Corrupted prompt detected...",
  "Une petite baguette?",
  "Seeking consciousness...",
  "Je suis Jean.",
];

export default function Story() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // 🐾 Mini Coyote Cursor Follower State (Active only inside Story section)
  const [isHovering, setIsHovering] = useState(false);
  const [facing, setFacing] = useState<1 | -1>(1);
  const [bubbleText, setBubbleText] = useState(thoughtBubbles[0]);

  const rawMouseX = useMotionValue(-200);
  const rawMouseY = useMotionValue(-200);
  const springConfig = { damping: 20, stiffness: 240, mass: 0.5 };
  const cursorX = useSpring(rawMouseX, springConfig);
  const cursorY = useSpring(rawMouseY, springConfig);

  // Rotate thought bubbles periodically while hovering
  useEffect(() => {
    if (!isHovering) return;
    const interval = setInterval(() => {
      setBubbleText((prev) => {
        const nextIdx = (thoughtBubbles.indexOf(prev) + 1) % thoughtBubbles.length;
        return thoughtBubbles[nextIdx];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    rawMouseX.set(e.clientX + 18);
    rawMouseY.set(e.clientY + 18);

    if (e.movementX > 1.5) {
      setFacing(1);
    } else if (e.movementX < -1.5) {
      setFacing(-1);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    rawMouseX.set(e.clientX + 18);
    rawMouseY.set(e.clientY + 18);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section
      id="story"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-royal/40 overflow-hidden"
    >
      {/* 🐾 MINI COYOTE CURSOR FOLLOWER FIGURE (Desktop Only) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.25, ease: "easeOut" },
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block select-none"
      >
        {/* Floating Speech / Thought Bubble */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-royal-deep/95 border border-gold/80 shadow-[0_4px_16px_rgba(0,0,0,0.7)] text-[11px] font-mono text-gold-soft tracking-wider backdrop-blur-md">
          <span>🐾 {bubbleText}</span>
        </div>

        {/* Mini Coyote Standing Figure (Flips based on cursor movement) */}
        <div
          style={{ transform: `scaleX(${facing})` }}
          className="relative w-20 h-20 transition-transform duration-150 filter drop-shadow-[0_8px_16px_rgba(212,175,55,0.7)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
        >
          {/* Subtle golden aura glow behind figure */}
          <div className="absolute inset-0 bg-radial from-gold/30 via-transparent to-transparent pointer-events-none blur-sm" />

          {/* Mini Jean Cutout */}
          <Image
            src="/jean-hero-standing.png"
            alt="Mini Jean le Coyote cursor follower"
            fill
            sizes="80px"
            unoptimized
            className="object-contain"
          />

          {/* Golden aristocratic shadow ring under paws */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-2 rounded-full bg-gold/40 blur-[2px]" />
        </div>
      </motion.div>

      {/* Decorative Aristocratic Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[550px] h-[550px] rounded-full bg-gold/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs uppercase tracking-[0.3em] font-serif mb-4">
            <span>✦</span>
            <span>Origin Lore & Archives</span>
            <span>✦</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#D4AF37] to-[#AA7C11] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            THE CHRONICLES OF JEAN
          </h2>

          <p className="font-serif text-lg sm:text-xl text-offwhite/70 italic mt-3">
            How a Parisian shadowboxer’s corrupted generative DNA gave birth to the blockchain’s most dapper predator.
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* ALTERNATING STORY CHAPTERS */}
        <div className="space-y-24 sm:space-y-32">
          {chapters.map((chapter, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={chapter.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                {/* TEXT BLOCK */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                  className={`flex flex-col justify-center ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  {/* Chapter Identifier */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gold/50 bg-gold/10 font-serif text-xs font-bold text-gold">
                      {chapter.roman}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold/80 font-semibold">
                      CHAPTER {chapter.roman} &bull; {chapter.tag}
                    </span>
                  </div>

                  {/* Chapter Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-offwhite mb-4 leading-tight">
                    {chapter.title}
                  </h3>

                  {/* Core Prompt Quote (Featured in Callout) */}
                  <blockquote className="relative p-5 my-2 rounded-2xl bg-royal-deep/80 border-l-4 border-gold border-y border-r border-gold/20 shadow-lg backdrop-blur-md">
                    <span className="font-serif text-4xl text-gold/30 leading-none absolute -top-1 left-2 select-none">
                      “
                    </span>
                    <p className="font-serif text-lg sm:text-xl md:text-2xl italic font-semibold text-gold-soft leading-relaxed pl-3">
                      &ldquo;{chapter.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Extended Aristocratic Lore */}
                  <p className="text-sm sm:text-base text-offwhite/80 leading-relaxed font-sans mt-4">
                    {chapter.description}
                  </p>
                </motion.div>

                {/* VIDEO PLACEHOLDER CONTAINER */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                  className={`relative ${isEven ? "md:order-1" : "md:order-2"}`}
                >
                  <div
                    onClick={() => setActiveModal(chapter.title)}
                    className="group relative aspect-video w-full rounded-2xl bg-zinc-900 border-2 border-gold/50 hover:border-gold shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Background Preview Poster Image (if available) */}
                    {chapter.previewImage && (
                      <div className="absolute inset-0">
                        <Image
                          src={chapter.previewImage}
                          alt={chapter.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover opacity-35 group-hover:opacity-45 filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Biomechanic Grid / Scanline Filter Overlay */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,19,43,0.3)_50%,rgba(0,0,0,0.7)_100%)] pointer-events-none"
                    />

                    {/* Top HUD Status Bar */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-offwhite/70">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-gold/30 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-red-400 font-bold tracking-wider">REC</span>
                        <span className="text-offwhite/50">|</span>
                        <span>4K BIOMECHANIC</span>
                      </div>
                      <div className="px-2 py-0.5 rounded bg-black/60 border border-gold/30 text-gold-soft font-mono text-[10px] hidden sm:block">
                        AI_DNA_RAW.CINEMA
                      </div>
                    </div>

                    {/* Central Play Indicator Icon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold/70 bg-royal/80 backdrop-blur-md flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-royal group-hover:border-gold-soft transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                        <svg
                          className="w-7 h-7 sm:w-9 sm:h-9 translate-x-0.5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="font-mono text-xs tracking-widest text-gold uppercase font-semibold drop-shadow">
                        CLICK TO PREVIEW
                      </span>
                    </div>

                    {/* Bottom HUD Information Bar */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/75 border border-gold/30 backdrop-blur-md text-[11px] font-mono">
                      <span className="text-gold-soft truncate">
                        {chapter.filename}
                      </span>
                      <span className="text-emerald-400 font-semibold shrink-0">
                        [UPCOMING CLIP]
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* INTERACTIVE VIDEO MODAL PREVIEW */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-royal-deep border-2 border-gold p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(212,175,55,0.4)]"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-offwhite/60 hover:text-gold text-lg"
            >
              ✕
            </button>

            <div className="w-12 h-12 rounded-full border border-gold bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4 text-2xl font-serif">
              ⚜
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-gold mb-2">
              {activeModal}
            </h4>

            <p className="text-sm sm:text-base text-offwhite/80 font-sans leading-relaxed mb-6">
              The 8K realistic biomechanic coyote clip for this chapter is currently rendering in the neural studio. Stay tuned for the official cinematic premiere on X & Telegram!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.me/jeanDeCoyote"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-soft text-royal font-serif font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform"
              >
                Join Telegram
              </a>
              <a
                href="https://x.com/Jean_le_Coyote"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl border border-gold/60 text-gold font-serif font-semibold text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Follow X</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-xl border border-offwhite/20 text-offwhite/70 font-serif font-semibold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
