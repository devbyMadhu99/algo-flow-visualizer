import { BarChart3 } from "lucide-react";
import type { SortStep } from "@/lib/sorting/types";
import { MAX_VALUE } from "@/lib/sorting/utils";

interface BarChartProps {
  step: SortStep | null;
  finished: boolean;
}

/** Reusable bar renderer: one <div> per array value, height scaled to max. */
export function BarChart({ step, finished }: BarChartProps) {
  if (!step) {
    return (
      <div className="flex h-[46vh] min-h-[260px] flex-col items-center justify-center gap-3 text-center">
        <BarChart3 className="size-10 text-muted-foreground/60" />
        <p className="text-sm text-muted-foreground">
          No array yet — hit <span className="font-medium text-foreground">Generate Array</span> to
          begin.
        </p>
      </div>
    );
  }

  const { array, comparing = [], swapping = [], special = [], sorted = [] } = step;
  const gap = array.length > 60 ? 1 : array.length > 30 ? 2 : 4;

  return (
    <div
      className="flex h-[46vh] min-h-[260px] w-full items-end justify-center"
      style={{ gap: `${gap}px` }}
      role="img"
      aria-label={`Array of ${array.length} values being sorted`}
    >
      {array.map((value, i) => {
        let tone = "bar-idle";
        if (finished || sorted.includes(i)) tone = "bar-sorted";
        if (special.includes(i)) tone = "bar-special";
        if (comparing.includes(i)) tone = "bar-compare";
        if (swapping.includes(i)) tone = "bar-swap";

        return (
          <div
            key={i}
            className={`${tone} min-w-[2px] flex-1 rounded-t-[3px] transition-[height,background-color] duration-100 ease-out`}
            style={{ height: `${(value / MAX_VALUE) * 100}%` }}
            title={`Index ${i} · value ${value}`}
          />
        );
      })}
    </div>
  );
}

export function Legend() {
  const items = [
    { cls: "bar-idle", label: "Unsorted" },
    { cls: "bar-compare", label: "Comparing" },
    { cls: "bar-swap", label: "Swapping" },
    { cls: "bar-special", label: "Pivot / Min / Key" },
    { cls: "bar-sorted", label: "Sorted" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
      {items.map((i) => (
        <span key={i.label} className="flex items-center gap-2">
          <span className={`${i.cls} size-3 rounded-[3px]`} />
          {i.label}
        </span>
      ))}
    </div>
  );
}
