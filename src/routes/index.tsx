import { createFileRoute } from "@tanstack/react-router";
import { Activity, Info, Sparkles } from "lucide-react";
import { Header } from "@/components/algo/Header";
import { BarChart, Legend } from "@/components/algo/BarChart";
import { Controls } from "@/components/algo/Controls";
import { Stats } from "@/components/algo/Stats";
import { AlgorithmInfoPanel } from "@/components/algo/AlgorithmInfoPanel";
import { ComparisonTable } from "@/components/algo/ComparisonTable";
import { LearnSection } from "@/components/algo/LearnSection";
import { useSortVisualizer } from "@/hooks/useSortVisualizer";
import { ALGO_MAP } from "@/lib/sorting/info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SortingVisualizer — Interactive Sorting Algorithm Visualizer",
      },
      {
        name: "description",
        content:
          "Explore Bubble, Selection, Insertion, Merge and Quick Sort through interactive step-by-step visualizations.",
      },
      {
        property: "og:title",
        content: "SortingVisualizer — Sorting Algorithm Visualizer",
      },
      {
        property: "og:description",
        content:
          "Interactive sorting algorithm visualizations with live comparisons, swaps and complexity information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-border/70 bg-card/50">
        <Icon className="size-4 text-primary" />
      </span>

      <div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>

        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function Index() {
  const v = useSortVisualizer();
  const info = ALGO_MAP[v.algorithm];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 sm:py-14">

        {/* Visualizer */}
        <section id="visualizer" className="scroll-mt-28 space-y-6">

          <div className="max-w-2xl space-y-3">

            <span className="chip">
              <Sparkles className="size-3" />
              Interactive Sorting Lab
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              <span className="text-gradient">
                Visualize Sorting
              </span>{" "}
              Algorithms
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Experiment with different sorting algorithms, watch every
              comparison and swap, and understand how data gets organized
              step by step.
            </p>

          </div>

          <Controls
            algorithm={v.algorithm}
            onAlgorithmChange={v.setAlgorithm}
            size={v.size}
            onSizeChange={v.setSize}
            speed={v.speed}
            onSpeedChange={v.setSpeed}
            status={v.status}
            hasArray={v.hasArray}
            onGenerate={v.generate}
            onStart={v.start}
            onPauseToggle={v.togglePause}
            onReset={v.reset}
          />

          <div className="glass-card space-y-4 p-4 sm:p-6">

            <div className="flex flex-wrap items-center justify-between gap-3">

              <h3 className="text-sm font-medium text-muted-foreground">
                {info.name}

                {v.status === "running" && " · sorting…"}

                {v.status === "paused" && " · paused"}
              </h3>

              <Legend />

            </div>

            <BarChart
              step={v.step}
              finished={v.status === "done"}
            />

          </div>

          <Stats
            comparisons={v.step?.comparisons ?? 0}
            swaps={v.step?.swaps ?? 0}
            elapsed={v.elapsed}
            finished={v.status === "done"}
          />

        </section>

        {/* Algorithms */}
        <section id="algorithms" className="scroll-mt-28 space-y-6">

          <SectionHeading
            icon={Activity}
            title="Algorithm Information"
            subtitle="Explore how the selected sorting algorithm works."
          />

          <AlgorithmInfoPanel info={info} />

          <h3 className="pt-2 text-lg font-semibold text-foreground">
            Algorithm Complexity Comparison
          </h3>

          <ComparisonTable active={v.algorithm} />

          <h3 className="pt-2 text-lg font-semibold text-foreground">
            Learn Sorting Algorithms
          </h3>

          <LearnSection />

        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 space-y-6">

          <SectionHeading
            icon={Info}
            title="About SortingVisualizer"
            subtitle="Learn sorting through interactive visualization."
          />

          <div className="glass-card grid gap-4 p-5 sm:p-6">

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              SortingVisualizer is an interactive learning tool that makes
              sorting algorithms easier to understand through real-time
              visualization. Watch comparisons, swaps and algorithm
              decisions happen step by step.
            </p>

            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">

              {[
                "How comparisons drive every decision",
                "When and why elements get swapped",
                "How time complexity affects performance",
                "How different algorithms behave on different data",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </section>

      </main>

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        ⚡ SortingVisualizer — built with React, TypeScript and Tailwind CSS.
      </footer>

    </div>
  );
}