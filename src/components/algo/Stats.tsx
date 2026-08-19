import {
  ArrowLeftRight,
  CheckCircle2,
  Clock,
  GitCompare,
} from "lucide-react";
import { formatMs } from "@/lib/sorting/utils";

interface StatsProps {
  comparisons: number;
  swaps: number;
  elapsed: number;
  finished: boolean;
}

export function Stats({
  comparisons,
  swaps,
  elapsed,
  finished,
}: StatsProps) {
  const stats = [
    {
      icon: GitCompare,
      label: "Comparisons",
      value: comparisons.toLocaleString(),
    },
    {
      icon: ArrowLeftRight,
      label: "Swaps",
      value: swaps.toLocaleString(),
    },
    {
      icon: Clock,
      label: "Execution Time",
      value: formatMs(elapsed),
    },
  ];

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="glass-card p-5 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Icon className="size-4 text-primary" />
              {label}
            </div>

            <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-foreground">
              {value}
            </p>
          </div>
        ))}
      </div>

      {finished && (
        <div className="flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
          <CheckCircle2 className="size-4" />
          Sorting completed successfully.
        </div>
      )}
    </div>
  );
}