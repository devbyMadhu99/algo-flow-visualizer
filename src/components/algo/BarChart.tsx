import { BarChart3 } from "lucide-react";
import type { SortStep } from "@/lib/sorting/types";
import { MAX_VALUE } from "@/lib/sorting/utils";

interface BarChartProps {
  step: SortStep | null;
  finished: boolean;
}

export function BarChart({ step, finished }: BarChartProps) {
  if (!step) {
    return (
      <div className="flex min-h-[260px] h-[46vh] flex-col items-center justify-center gap-3 text-center">
        <BarChart3 className="size-10 text-muted-foreground/50" />

        <p className="text-sm text-muted-foreground">
          Generate an array to start the visualization.
        </p>
      </div>
    );
  }

  const {
    array,
    comparing = [],
    swapping = [],
    special = [],
    sorted = [],
  } = step;

  const gap =
    array.length > 60
      ? 1
      : array.length > 30
        ? 2
        : 4;

  return (
    <div
      className="flex h-[46vh] min-h-[260px] w-full items-end justify-center"
      style={{ gap: `${gap}px` }}
      role="img"
      aria-label={`Sorting visualization containing ${array.length} elements`}
    >
      {array.map((value, index) => {
        let barStyle = "bar-idle";

        if (finished || sorted.includes(index)) {
          barStyle = "bar-sorted";
        }

        if (special.includes(index)) {
          barStyle = "bar-special";
        }

        if (comparing.includes(index)) {
          barStyle = "bar-compare";
        }

        if (swapping.includes(index)) {
          barStyle = "bar-swap";
        }

        const height = Math.max(
          3,
          (value / MAX_VALUE) * 100
        );

        return (
          <div
            key={index}
            className={`${barStyle} min-w-[2px] flex-1 rounded-t-[4px] transition-all duration-100 ease-out`}
            style={{
              height: `${height}%`,
            }}
            title={`Value: ${value} | Index: ${index}`}
          />
        );
      })}
    </div>
  );
}

export function Legend() {
  const items = [
    {
      className: "bar-idle",
      label: "Unsorted",
    },
    {
      className: "bar-compare",
      label: "Comparing",
    },
    {
      className: "bar-swap",
      label: "Swapping",
    },
    {
      className: "bar-special",
      label: "Pivot / Minimum / Key",
    },
    {
      className: "bar-sorted",
      label: "Sorted",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
      {items.map((item) => (
        <span
          key={item.label}
          className="flex items-center gap-2"
        >
          <span
            className={`${item.className} size-3 rounded-[3px]`}
          />

          {item.label}
        </span>
      ))}
    </div>
  );
}