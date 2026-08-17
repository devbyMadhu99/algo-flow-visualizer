import { ArrowLeftRight, CheckCircle2, Clock, GitCompare } from "lucide-react";
import { formatMs } from "@/lib/sorting/utils";

interface StatsProps {
  comparisons: number;
  swaps: number;
  elapsed: number;
  finished: boolean;
}

export function Stats({ comparisons, swaps, elapsed, finished }: StatsProps) {
  const cards = [
    { icon: GitCompare, label: "Comparisons", value: comparisons.toLocaleString() },
    { icon: ArrowLeftRight, label: "Swaps", value: swaps.toLocaleString() },
    { icon: Clock, label: "Time", value: formatMs(elapsed) },
  ];

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.label} className="glass-card p-4 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <c.icon className="size-4 text-primary" />
              {c.label}
            </div>
            <p className="mt-2 font-mono text-2xl font-semibold text-foreground tabular-nums">
              {c.value}
            </p>
          </div>
        ))}
      </div>
      {finished && (
        <div className="flex animate-fade-in items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
          <CheckCircle2 className="size-4" />
          Sorting completed successfully!
        </div>
      )}
    </div>
  );
}
