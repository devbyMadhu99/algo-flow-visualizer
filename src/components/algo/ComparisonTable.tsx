import { ALGORITHMS } from "@/lib/sorting/info";
import type { AlgorithmKey } from "@/lib/sorting/types";

export function ComparisonTable({
  active,
}: {
  active: AlgorithmKey;
}) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border/70 bg-card/30 text-left">
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Algorithm
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Best
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Average
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Worst
              </th>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Space
              </th>
            </tr>
          </thead>

          <tbody>
            {ALGORITHMS.map((algorithm) => {
              const isActive = algorithm.key === active;

              return (
                <tr
                  key={algorithm.key}
                  className={`border-b border-border/40 last:border-0 transition-colors ${
                    isActive
                      ? "bg-primary/10"
                      : "hover:bg-accent/30"
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-foreground">
                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-primary" />
                      )}

                      {algorithm.name}
                    </div>
                  </td>

                  <td className="px-5 py-4 font-mono text-muted-foreground">
                    {algorithm.best}
                  </td>

                  <td className="px-5 py-4 font-mono text-muted-foreground">
                    {algorithm.average}
                  </td>

                  <td className="px-5 py-4 font-mono text-muted-foreground">
                    {algorithm.worst}
                  </td>

                  <td className="px-5 py-4 font-mono text-muted-foreground">
                    {algorithm.space}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}