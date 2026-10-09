import Hero from "@/components/Hero";
import Story from "@/components/Story";
import ChartWidget from "@/components/ChartWidget";

/**
 * Step 1: Layout & Nav
 * Step 2: Hero (#hero)
 * Step 3: Lore & Chronicles (#story)
 * Step 4: Live Target / Chart Widget (#chart)
 * Remaining sections (#bounty) staged for Step 5.
 */
const pendingSections = [
  { id: "bounty", title: "Bounty", step: "Step 5" },
];

export default function Home() {
  return (
    <>
      {/* Step 2: The Royal Hero Section */}
      <Hero />

      {/* Step 3: The Lore Section */}
      <Story />

      {/* Step 4: Live Target / Chart Widget */}
      <ChartWidget />

      {/* Placeholders for subsequent steps */}
      {pendingSections.map(({ id, title, step }) => (
        <section
          key={id}
          id={id}
          className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center"
        >
          <h2 className="font-serif text-5xl font-semibold text-gold">
            {title}
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-offwhite/50">
            Placeholder &middot; built in {step}
          </p>
        </section>
      ))}
    </>
  );
}
