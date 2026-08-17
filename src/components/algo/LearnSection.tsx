import { ALGORITHMS } from "@/lib/sorting/info";

export function LearnSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {ALGORITHMS.map((a) => (
        <article
          key={a.key}
          className="glass-card p-5 transition-transform duration-200 hover:-translate-y-1"
        >
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-semibold text-foreground">{a.name}</h3>
            <span className="chip font-mono">{a.average}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.learn}</p>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-border/70 bg-card/50 px-3 py-2 font-mono text-xs text-primary">
            {a.example}
          </pre>
        </article>
      ))}
    </div>
  );
}
