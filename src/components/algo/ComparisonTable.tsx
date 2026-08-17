import { ALGORITHMS } from "@/lib/sorting/info";
import type { AlgorithmKey } from "@/lib/sorting/types";

export function ComparisonTable({ active }: { active: AlgorithmKey }) {
  return (
    <div className="glass-card overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border/70 text-left text-xs tracking-wide text-muted-foreground uppercase">
            <th className="px-5 py-3 font-medium">Algorithm</th>
            <th className="px-5 py-3 font-medium">Best</th>
            <th className="px-5 py-3 font-medium">Average</th>
            <th className="px-5 py-3 font-medium">Worst</th>
            <th className="px-5 py-3 font-medium">Space</th>
          </tr>
        </thead>
        <tbody>
          {ALGORITHMS.map((a) => (
            <tr
              key={a.key}
              className={`border-b border-border/40 transition-colors last:border-0 hover:bg-accent/40 ${
                a.key === active ? "bg-primary/10" : ""
              }`}
            >
              <td className="px-5 py-3 font-medium text-foreground">{a.name}</td>
              <td className="px-5 py-3 font-mono text-muted-foreground">{a.best}</td>
              <td className="px-5 py-3 font-mono text-muted-foreground">{a.average}</td>
              <td className="px-5 py-3 font-mono text-muted-foreground">{a.worst}</td>
              <td className="px-5 py-3 font-mono text-muted-foreground">{a.space}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
