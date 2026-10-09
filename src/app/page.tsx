import Hero from "@/components/Hero";
import Story from "@/components/Story";
import ChartWidget from "@/components/ChartWidget";
import BountyLeaderboard from "@/components/BountyLeaderboard";

/**
 * Step 1: Layout & Nav
 * Step 2: Hero (#hero)
 * Step 3: Lore & Chronicles (#story)
 * Step 4: Live Target / Chart Widget (#chart)
 * Step 5: Bounty Hunter Leaderboard (#bounty)
 * Step 6: Footer (The Vault) - upcoming
 */
export default function Home() {
  return (
    <>
      {/* Step 2: The Royal Hero Section */}
      <Hero />

      {/* Step 3: The Lore Section */}
      <Story />

      {/* Step 4: Live Target / Chart Widget */}
      <ChartWidget />

      {/* Step 5: The Bounty Hunter Leaderboard */}
      <BountyLeaderboard />
    </>
  );
}
