import { BarChart3, Github } from "lucide-react";

const NAV = [
  { label: "Visualizer", href: "#visualizer" },
  { label: "Algorithms", href: "#algorithms" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">

        {/* Brand */}
        <div className="flex items-center gap-3">

          <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand shadow-glow">
            <BarChart3
              className="size-5 text-primary-foreground"
              strokeWidth={2.5}
            />
          </span>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-gradient sm:text-xl">
              SortingVisualizer
            </h1>

            <p className="text-xs text-muted-foreground">
              Explore algorithms. Understand sorting.
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto text-sm">

          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 font-medium text-muted-foreground transition-all hover:bg-accent/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          {/* GitHub-style project link */}
          <a
            href="#about"
            className="ml-1 inline-flex items-center gap-2 rounded-lg border border-border/70 px-3 py-2 font-medium text-muted-foreground transition-all hover:bg-accent/60 hover:text-foreground"
          >
            <Github className="size-4" />
            Project
          </a>

        </nav>
      </div>
    </header>
  );
}