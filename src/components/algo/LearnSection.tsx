import { ALGORITHMS } from "@/lib/sorting/info";

export function LearnSection() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {ALGORITHMS.map((algorithm) => (
        <article
          key={algorithm.key}
          className="glass-card group p-5 transition-all duration-200 hover:-translate-y-1"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground">
                {algorithm.name}
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                Average time complexity
              </p>
            </div>

            <span className="chip shrink-0 font-mono">
              {algorithm.average}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {algorithm.learn}
          </p>

          <div className="mt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Example
            </p>

            <pre className="overflow-x-auto rounded-xl border border-border/70 bg-card/50 px-4 py-3 font-mono text-xs leading-6 text-primary">
              {algorithm.example}
            </pre>
          </div>
        </article>
      ))}
    </div>
  );
}