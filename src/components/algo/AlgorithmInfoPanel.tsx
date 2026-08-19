import type { AlgorithmInfo } from "@/lib/sorting/info";

export function AlgorithmInfoPanel({
  info,
}: {
  info: AlgorithmInfo;
}) {
  const details = [
    {
      label: "Best Case",
      value: info.best,
    },
    {
      label: "Average Case",
      value: info.average,
    },
    {
      label: "Worst Case",
      value: info.worst,
    },
    {
      label: "Space Complexity",
      value: info.space,
    },
    {
      label: "Stable",
      value: info.stable ? "Yes" : "No",
    },
    {
      label: "In-place",
      value: info.inPlace ? "Yes" : "No",
    },
  ];

  return (
    <div className="glass-card grid gap-6 p-5 sm:p-6">
      {/* Algorithm description */}
      <div className="max-w-3xl">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {info.name}
        </h3>

        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {info.summary}
        </p>
      </div>

      {/* Complexity details */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {details.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border/70 bg-card/40 p-4 transition-colors hover:bg-card/70"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {item.label}
            </p>

            <p className="mt-2 font-mono text-sm font-semibold text-primary">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}