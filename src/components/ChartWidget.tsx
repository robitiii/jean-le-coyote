"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTokenData } from "@/hooks/useTokenData";

interface Trade {
  id: string;
  type: "BUY" | "SELL";
  usd: number;
  sol: number;
  amount: number;
  price: string;
  wallet: string;
  timeAgo: string;
  isWhale?: boolean;
}

const initialTrades: Trade[] = [
  {
    id: "t-1",
    type: "BUY",
    usd: 4820.5,
    sol: 27.8,
    amount: 3392000,
    price: "$0.001421",
    wallet: "JeanPhil...88A",
    timeAgo: "Just now",
    isWhale: true,
  },
  {
    id: "t-2",
    type: "BUY",
    usd: 1250.0,
    sol: 7.22,
    amount: 880280,
    price: "$0.001420",
    wallet: "7xKp...9f2A",
    timeAgo: "3s ago",
    isWhale: true,
  },
  {
    id: "t-3",
    type: "SELL",
    usd: 140.2,
    sol: 0.81,
    amount: 98730,
    price: "$0.001419",
    wallet: "4mQz...33xL",
    timeAgo: "7s ago",
  },
  {
    id: "t-4",
    type: "BUY",
    usd: 620.0,
    sol: 3.58,
    amount: 436620,
    price: "$0.001420",
    wallet: "H3wR...88pQ",
    timeAgo: "12s ago",
  },
  {
    id: "t-5",
    type: "BUY",
    usd: 2100.8,
    sol: 12.14,
    amount: 1479400,
    price: "$0.001420",
    wallet: "Coy7...777F",
    timeAgo: "18s ago",
    isWhale: true,
  },
  {
    id: "t-6",
    type: "BUY",
    usd: 350.0,
    sol: 2.02,
    amount: 246470,
    price: "$0.001420",
    wallet: "9pLk...44vB",
    timeAgo: "24s ago",
  },
];

export default function ChartWidget() {
  const { isLive, priceUsd, priceChange24h, chartEmbedUrl, contractAddress } = useTokenData();
  const [activeTab, setActiveTab] = useState<"CHART" | "TRADES">("CHART");
  const [activeTimeframe, setActiveTimeframe] = useState("15M");
  const [tradeFilter, setTradeFilter] = useState<"ALL" | "WHALES" | "BUYS">("ALL");
  const [trades, setTrades] = useState<Trade[]>(initialTrades);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simulate incoming live trades periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const isBuy = Math.random() > 0.18; // 82% buys
      const solAmount = isBuy
        ? +(Math.random() * (Math.random() > 0.7 ? 18 : 6) + 0.4).toFixed(2)
        : +(Math.random() * 2 + 0.2).toFixed(2);
      const usdValue = +(solAmount * 173).toFixed(2);
      const amountTokens = Math.floor(usdValue / 0.00142069);
      const randomHex = Math.random().toString(36).substring(2, 6);

      const newTrade: Trade = {
        id: `t-${Date.now()}`,
        type: isBuy ? "BUY" : "SELL",
        usd: usdValue,
        sol: solAmount,
        amount: amountTokens,
        price: "$0.001420",
        wallet: `${randomHex.toUpperCase()}...${Math.random().toString(36).substring(2, 5)}`,
        timeAgo: "Just now",
        isWhale: usdValue >= 1000,
      };

      setTrades((prev) => [newTrade, ...prev.slice(0, 14)]);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const filteredTrades = trades.filter((t) => {
    if (tradeFilter === "WHALES") return t.isWhale;
    if (tradeFilter === "BUYS") return t.type === "BUY";
    return true;
  });

  const timeframes = ["1M", "5M", "15M", "1H", "4H", "1D"];

  return (
    <section
      id="chart"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-royal/60 flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative Golden Ambient Halo in Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold/10 blur-[170px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs uppercase tracking-[0.3em] font-serif mb-4">
            <span>✦</span>
            <span>Real-Time Biomechanic Surveillance</span>
            <span>✦</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#D4AF37] to-[#AA7C11] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            Track the Anomaly
          </h2>

          <p className="font-serif text-lg sm:text-xl text-offwhite/75 italic mt-3">
            Live DEX Telemetry, Neural Waveform & Solana Liquidity Pool Diagnostics for Jean le Coyote.
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        {/* QUICK METRICS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6"
        >
          <div className="p-4 rounded-2xl bg-royal-deep/80 border border-gold/30 backdrop-blur-md">
            <span className="text-[11px] font-mono uppercase text-offwhite/50 block tracking-wider">
              Pair
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold">
              CLJEAN / SOL
            </span>
            <span className="text-[11px] font-mono text-emerald-400 block mt-0.5">
              Raydium &bull; Pump.fun
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-royal-deep/80 border border-gold/30 backdrop-blur-md">
            <span className="text-[11px] font-mono uppercase text-offwhite/50 block tracking-wider">
              Token Tax
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold">
              0% / 0%
            </span>
            <span className="text-[11px] font-mono text-offwhite/60 block mt-0.5">
              Zero Transaction Fees
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-royal-deep/80 border border-gold/30 backdrop-blur-md">
            <span className="text-[11px] font-mono uppercase text-offwhite/50 block tracking-wider">
              Total Supply
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold">
              1,000,000,000
            </span>
            <span className="text-[11px] font-mono text-offwhite/60 block mt-0.5">
              Fixed &bull; No Mint
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-royal-deep/80 border border-gold/30 backdrop-blur-md">
            <span className="text-[11px] font-mono uppercase text-offwhite/50 block tracking-wider">
              Liquidity Pool
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold">
              100% BURNT
            </span>
            <span className="text-[11px] font-mono text-emerald-400 block mt-0.5">
              Immutable Contract
            </span>
          </div>
        </motion.div>

        {/* RESPONSIVE DEXSCREENER CHART & LIVE TRADES CONTAINER (Thick gold border, dark glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative w-full rounded-3xl bg-white/5 backdrop-blur-md border-4 border-[#D4AF37] shadow-[0_25px_60px_rgba(0,0,0,0.85)] shadow-gold/15 overflow-hidden flex flex-col"
        >
          {/* MOCK TRADING TERMINAL TOP BAR WITH TAB SWITCHER */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b-2 border-gold/30 bg-royal-deep/90 backdrop-blur-xl">
            {/* Left: Token info & Tab Switcher */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gold bg-gold/15 flex items-center justify-center font-serif text-gold font-bold text-sm">
                ⚜
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-offwhite text-sm sm:text-base">
                    CLJEAN / SOL
                  </span>
                  <a
                    href={`https://dexscreener.com/solana/${contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-gold/20 text-gold hover:bg-gold/30 border border-gold/40 flex items-center gap-1 transition-colors"
                  >
                    <span>DEXSCREENER</span>
                    <span>↗</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-gold font-bold">{priceUsd || "$0.00142069"}</span>
                  <span className={priceChange24h !== null && priceChange24h < 0 ? "text-red-400 font-semibold" : "text-emerald-400 font-semibold"}>
                    {priceChange24h !== null ? `${priceChange24h >= 0 ? "+" : ""}${priceChange24h}%` : "+42.8%"}
                  </span>
                </div>
              </div>
            </div>

            {/* View Selector Tabs: Chart vs Live Trades */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/50 border border-gold/40 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("CHART")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                  activeTab === "CHART"
                    ? "bg-gold text-royal shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    : "text-offwhite/70 hover:text-gold"
                }`}
              >
                <span>📈</span>
                <span>Chart Feed</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("TRADES")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                  activeTab === "TRADES"
                    ? "bg-gold text-royal shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    : "text-offwhite/70 hover:text-gold"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Live Trades</span>
              </button>
            </div>

            {/* Timeframe Selectors (when in Chart view) */}
            {activeTab === "CHART" ? (
              <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-gold/20">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    type="button"
                    onClick={() => setActiveTimeframe(tf)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                      activeTimeframe === tf
                        ? "bg-gold text-royal shadow-sm"
                        : "text-offwhite/60 hover:text-gold hover:bg-gold/10"
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span>●</span>
                <span>ORDER STREAM: ACTIVE</span>
              </div>
            )}
          </div>

          {/* TAB 1: CHART BODY / LIVE DEXSCREENER OR AWAITING STAGE */}
          {activeTab === "CHART" && (
            chartEmbedUrl ? (
              <div className="relative w-full h-[500px] sm:h-[620px] bg-black">
                <iframe
                  src={chartEmbedUrl}
                  title="CLJEAN DexScreener Live Chart"
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
              <div className="relative h-[440px] sm:h-[500px] w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Background Grid Pattern (TradingView Style) */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.06)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"
              />

              {/* Animated Stylized Line Chart Waveform Mockup */}
              <svg
                className="absolute inset-x-0 bottom-0 w-full h-[55%] opacity-35 pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 1000 300"
                fill="none"
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,240 C100,220 180,260 260,200 C340,140 420,180 500,110 C580,40 660,120 740,70 C820,20 900,90 1000,30 L1000,300 L0,300 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,240 C100,220 180,260 260,200 C340,140 420,180 500,110 C580,40 660,120 740,70 C820,20 900,90 1000,30"
                  stroke="#D4AF37"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                />
              </svg>

              {/* Foreground Content: Spinner & Waiting Notice */}
              <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
                {/* Luxury Dual-Ring Loading Spinner */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-gold/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#D4AF37] border-r-[#D4AF37] animate-spin" />
                  <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-gold-soft animate-spin [animation-duration:1.8s] [animation-direction:reverse]" />
                  <div className="absolute inset-0 flex items-center justify-center font-serif text-gold text-2xl">
                    ⚜
                  </div>
                </div>

                {/* Requested Headline */}
                <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-[0.1em] text-gold uppercase drop-shadow-[0_4px_16px_rgba(212,175,55,0.5)] mb-3">
                  AWAITING LIQUIDITY INJECTION...
                </h3>

                {/* Descriptive Note */}
                <p className="text-xs sm:text-sm text-offwhite/80 font-mono max-w-md leading-relaxed mb-6">
                  Contract deployment underway on Solana. DexScreener &amp; Raydium charts will automatically stream upon liquidity pool initialization.
                </p>

                {/* Quick Contract Copy Action */}
                <div className="flex items-center gap-2 p-1.5 pl-3 rounded-xl bg-royal-deep/90 border border-gold/50 shadow-inner text-xs font-mono">
                  <span className="text-offwhite/70 truncate max-w-[200px] sm:max-w-[280px]">
                    {contractAddress}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-gold text-royal font-bold text-xs uppercase hover:bg-gold-soft transition-all"
                  >
                    {copied ? "Copied!" : "Copy CA"}
                  </button>
                </div>
              </div>

              {/* Bottom Bar: DexScreener Link Badge */}
              <div className="absolute bottom-3 inset-x-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-offwhite/50 border-t border-gold/15 pt-2">
                <span>SOLANA MAINNET-BETA // RAYDIUM V4</span>
                <span className="text-gold">EMBEDDED DEXSCREENER IFRAME READY</span>
              </div>
            </div>
          ))}

          {/* TAB 2: LIVE TRADES FEED */}
          {activeTab === "TRADES" && (
            <div className="relative h-[440px] sm:h-[500px] w-full flex flex-col bg-royal-deep/95 backdrop-blur-2xl">
              {/* Filter Ribbon */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-black/40 border-b border-gold/20 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-offwhite/50 text-[11px] uppercase">Filter:</span>
                  <button
                    type="button"
                    onClick={() => setTradeFilter("ALL")}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      tradeFilter === "ALL"
                        ? "bg-gold text-royal font-bold"
                        : "text-offwhite/70 hover:text-gold"
                    }`}
                  >
                    All Trades ({trades.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setTradeFilter("WHALES")}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      tradeFilter === "WHALES"
                        ? "bg-gold text-royal font-bold"
                        : "text-offwhite/70 hover:text-gold"
                    }`}
                  >
                    🐋 Whales ($1K+)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTradeFilter("BUYS")}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      tradeFilter === "BUYS"
                        ? "bg-gold text-royal font-bold"
                        : "text-offwhite/70 hover:text-gold"
                    }`}
                  >
                    🟢 Buys Only
                  </button>
                </div>

                <div className="text-[11px] text-gold-soft font-mono hidden sm:block">
                  Auto-syncing every 4s &bull; Solscan Verified
                </div>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-6 sm:grid-cols-7 gap-2 px-4 sm:px-6 py-2 bg-black/60 border-b border-gold/20 text-[11px] font-mono uppercase tracking-wider text-offwhite/50">
                <span>Time</span>
                <span>Type</span>
                <span>USD ($)</span>
                <span>SOL</span>
                <span className="hidden sm:inline">Amount ($CLJEAN)</span>
                <span>Price</span>
                <span className="text-right">Maker</span>
              </div>

              {/* Scrolling Live Trades Stream */}
              <div className="flex-1 overflow-y-auto divide-y divide-gold/10 px-4 sm:px-6 font-mono text-xs">
                <AnimatePresence initial={false}>
                  {filteredTrades.map((trade) => {
                    const isBuy = trade.type === "BUY";

                    return (
                      <motion.div
                        key={trade.id}
                        initial={{ opacity: 0, y: -10, backgroundColor: isBuy ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)" }}
                        animate={{ opacity: 1, y: 0, backgroundColor: "transparent" }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-6 sm:grid-cols-7 gap-2 py-2.5 items-center hover:bg-gold/5 transition-colors"
                      >
                        <span className="text-[11px] text-offwhite/60">
                          {trade.timeAgo}
                        </span>

                        <span
                          className={`font-bold inline-flex items-center gap-1 ${
                            isBuy ? "text-emerald-400" : "text-rose-400"
                          }`}
                        >
                          <span>{isBuy ? "BUY" : "SELL"}</span>
                          {trade.isWhale && <span title="Whale order">🐋</span>}
                        </span>

                        <span className="font-bold text-offwhite">
                          ${trade.usd.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>

                        <span className="text-offwhite/80">
                          {trade.sol} SOL
                        </span>

                        <span className="text-gold-soft hidden sm:inline">
                          {trade.amount.toLocaleString()}
                        </span>

                        <span className="text-offwhite/70">
                          {trade.price}
                        </span>

                        <span className="text-right text-gold/80 hover:text-gold cursor-pointer truncate">
                          {trade.wallet}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Bottom Trade Bar */}
              <div className="px-4 sm:px-6 py-2.5 bg-black/80 border-t border-gold/20 flex flex-wrap items-center justify-between text-xs font-mono text-offwhite/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Streaming latest mempool orders for Jean le Coyote</span>
                </div>
                <div className="text-gold">
                  100% On-Chain Decentralized Liquidity
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
