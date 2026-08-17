import { Zap } from "lucide-react";

const NAV = [
  { label: "Visualizer", href: "#visualizer" },
  { label: "Algorithms", href: "#algorithms" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand shadow-glow">
            <Zap className="size-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-gradient sm:text-xl">
              AlgoVisualizer
            </h1>
            <p className="text-xs text-muted-foreground">
              Visualize how sorting algorithms work
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-1 overflow-x-auto text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
