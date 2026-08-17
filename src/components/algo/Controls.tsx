import { Pause, Play, RotateCcw, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ALGORITHMS } from "@/lib/sorting/info";
import type { AlgorithmKey } from "@/lib/sorting/types";
import { speedLabel, speedToDelay } from "@/lib/sorting/utils";

export interface ControlsProps {
  algorithm: AlgorithmKey;
  onAlgorithmChange: (key: AlgorithmKey) => void;
  size: number;
  onSizeChange: (n: number) => void;
  speed: number;
  onSpeedChange: (n: number) => void;
  status: "idle" | "running" | "paused" | "done";
  hasArray: boolean;
  onGenerate: () => void;
  onStart: () => void;
  onPauseToggle: () => void;
  onReset: () => void;
}

export function Controls(p: ControlsProps) {
  const running = p.status === "running";
  const paused = p.status === "paused";
  const busy = running || paused;

  return (
    <div className="glass-card grid gap-6 p-5 sm:p-6">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Algorithm selector */}
        <div className="grid gap-2">
          <Label htmlFor="algorithm">Algorithm</Label>
          <Select
            value={p.algorithm}
            onValueChange={(v) => p.onAlgorithmChange(v as AlgorithmKey)}
            disabled={busy}
          >
            <SelectTrigger id="algorithm" className="w-full">
              <SelectValue placeholder="Select algorithm" />
            </SelectTrigger>
            <SelectContent>
              {ALGORITHMS.map((a) => (
                <SelectItem key={a.key} value={a.key}>
                  {a.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Array size */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="size">Array Size</Label>
            <span className="chip">{p.size} bars</span>
          </div>
          <Slider
            id="size"
            min={10}
            max={100}
            step={1}
            value={[p.size]}
            disabled={busy}
            onValueChange={([v]) => p.onSizeChange(v ?? p.size)}
            className="mt-2"
          />
        </div>

        {/* Speed */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="speed">Speed</Label>
            <span className="chip">
              {speedLabel(p.speed)} · {speedToDelay(p.speed)} ms
            </span>
          </div>
          <Slider
            id="speed"
            min={1}
            max={100}
            step={1}
            value={[p.speed]}
            onValueChange={([v]) => p.onSpeedChange(v ?? p.speed)}
            className="mt-2"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={p.onGenerate}
          disabled={busy}
          title="Create a new random array"
        >
          <Shuffle /> Generate Array
        </Button>
        <Button
          variant="hero"
          onClick={p.onStart}
          disabled={!p.hasArray || busy || p.status === "done"}
          title="Run the selected algorithm"
        >
          <Play /> {running ? "Sorting…" : "Start Sorting"}
        </Button>
        <Button
          variant="secondary"
          onClick={p.onPauseToggle}
          disabled={!busy}
          title={paused ? "Resume the animation" : "Pause the animation"}
        >
          {paused ? <Play /> : <Pause />} {paused ? "Resume" : "Pause"}
        </Button>
        <Button
          variant="ghost"
          onClick={p.onReset}
          title="Stop and restore an unsorted array"
        >
          <RotateCcw /> Reset
        </Button>
      </div>
    </div>
  );
}
