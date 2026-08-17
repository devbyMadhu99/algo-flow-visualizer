import type { AlgorithmInfo } from "@/lib/sorting/info";

export function AlgorithmInfoPanel({ info }: { info: AlgorithmInfo }) {
  const rows = [
    { label: "Best Case", value: info.best },
    { label: "Average Case", value: info.average },
    { label: "Worst Case", value: info.worst },
    { label: "Space", value: info.space },
    { label: "Stable", value: info.stable ? "Yes" : "No" },
    { label: "In-place", value: info.inPlace ? "Yes" : "No" },
  ];

  return (
    <div className="glass-card grid gap-5 p-5 sm:p-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{info.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{info.summary}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {rows.map((r) => (
          <div key={r.label} className="rounded-xl border border-border/70 bg-card/40 p-3">
            <p className="text-[11px] tracking-wide text-muted-foreground uppercase">{r.label}</p>
            <p className="mt-1 font-mono text-sm font-semibold text-primary">{r.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
