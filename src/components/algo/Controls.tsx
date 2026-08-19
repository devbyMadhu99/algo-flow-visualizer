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

export function Controls({
  algorithm,
  onAlgorithmChange,
  size,
  onSizeChange,
  speed,
  onSpeedChange,
  status,
  hasArray,
  onGenerate,
  onStart,
  onPauseToggle,
  onReset,
}: ControlsProps) {
  const isRunning = status === "running";
  const isPaused = status === "paused";
  const isBusy = isRunning || isPaused;

  return (
    <div className="glass-card grid gap-6 p-5 sm:p-6">
      {/* Settings */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Algorithm */}
        <div className="grid gap-2">
          <Label htmlFor="algorithm">Sorting Algorithm</Label>

          <Select
            value={algorithm}
            onValueChange={(value) =>
              onAlgorithmChange(value as AlgorithmKey)
            }
            disabled={isBusy}
          >
            <SelectTrigger id="algorithm" className="w-full">
              <SelectValue placeholder="Choose an algorithm" />
            </SelectTrigger>

            <SelectContent>
              {ALGORITHMS.map((item) => (
                <SelectItem key={item.key} value={item.key}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Array Size */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="size">Array Size</Label>

            <span className="chip">
              {size} elements
            </span>
          </div>

          <Slider
            id="size"
            min={10}
            max={100}
            step={1}
            value={[size]}
            disabled={isBusy}
            onValueChange={([value]) =>
              onSizeChange(value ?? size)
            }
            className="mt-2"
          />
        </div>

        {/* Animation Speed */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="speed">Animation Speed</Label>

            <span className="chip">
              {speedLabel(speed)}
            </span>
          </div>

          <Slider
            id="speed"
            min={1}
            max={100}
            step={1}
            value={[speed]}
            onValueChange={([value]) =>
              onSpeedChange(value ?? speed)
            }
            className="mt-2"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={onGenerate}
          disabled={isBusy}
          title="Generate a new random array"
        >
          <Shuffle />
          Generate Array
        </Button>

        <Button
          variant="hero"
          onClick={onStart}
          disabled={!hasArray || isBusy || status === "done"}
          title="Start sorting visualization"
        >
          <Play />
          {isRunning ? "Sorting..." : "Start Sorting"}
        </Button>

        <Button
          variant="secondary"
          onClick={onPauseToggle}
          disabled={!isBusy}
          title={isPaused ? "Resume sorting" : "Pause sorting"}
        >
          {isPaused ? <Play /> : <Pause />}
          {isPaused ? "Resume" : "Pause"}
        </Button>

        <Button
          variant="ghost"
          onClick={onReset}
          title="Reset the visualization"
        >
          <RotateCcw />
          Reset
        </Button>
      </div>
    </div>
  );
}