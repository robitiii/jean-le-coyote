"use client";

import { useState, useEffect } from "react";
import { TOKEN_CONFIG } from "@/config/token";

export interface LiveTokenData {
  isLive: boolean;
  priceUsd: string | null;
  priceNative: string | null;
  priceChange24h: number | null;
  marketCap: number | null;
  fdv: number | null;
  volume24h: number | null;
  liquidityUsd: number | null;
  pairAddress: string | null;
  dexId: string | null;
  chartEmbedUrl: string | null;
  loading: boolean;
}

export function useTokenData() {
  const ca = TOKEN_CONFIG.contractAddress;
  const isRealCA = Boolean(ca && ca !== "LAUNCHING_SOON_ON_PUMP_FUN" && ca.length > 20);

  const [data, setData] = useState<LiveTokenData>({
    isLive: false,
    priceUsd: null,
    priceNative: null,
    priceChange24h: null,
    marketCap: null,
    fdv: null,
    volume24h: null,
    liquidityUsd: null,
    pairAddress: null,
    dexId: null,
    chartEmbedUrl: isRealCA
      ? `https://dexscreener.com/solana/${ca}?embed=1&theme=dark&trades=0&info=0`
      : null,
    loading: isRealCA,
  });

  useEffect(() => {
    if (!isRealCA) {
      setData((prev) => ({
        ...prev,
        isLive: false,
        loading: false,
        chartEmbedUrl: null,
      }));
      return;
    }

    let isMounted = true;

    async function fetchDexData() {
      try {
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${ca}`);
        if (!res.ok) throw new Error("DexScreener fetch error");

        const json = await res.json();
        const primaryPair = json.pairs && json.pairs.length > 0 ? json.pairs[0] : null;

        if (primaryPair && isMounted) {
          setData({
            isLive: true,
            priceUsd: primaryPair.priceUsd ? `$${Number(primaryPair.priceUsd).toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 8 })}` : null,
            priceNative: primaryPair.priceNative || null,
            priceChange24h: primaryPair.priceChange?.h24 ?? null,
            marketCap: primaryPair.marketCap || primaryPair.fdv || null,
            fdv: primaryPair.fdv || null,
            volume24h: primaryPair.volume?.h24 || null,
            liquidityUsd: primaryPair.liquidity?.usd || null,
            pairAddress: primaryPair.pairAddress || null,
            dexId: primaryPair.dexId || "solana",
            chartEmbedUrl: `https://dexscreener.com/solana/${primaryPair.pairAddress || ca}?embed=1&theme=dark&trades=0&info=0`,
            loading: false,
          });
        }
      } catch (err) {
        console.error("DexScreener API polling error:", err);
      }
    }

    // Initial fetch
    fetchDexData();

    // Poll live price and marketcap every 6 seconds
    const interval = setInterval(fetchDexData, 6000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [ca, isRealCA]);

  return { ...data, contractAddress: ca, isRealCA };
}
