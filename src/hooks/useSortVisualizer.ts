import { useCallback, useEffect, useRef, useState } from "react";
import { buildSteps } from "@/lib/sorting/algorithms";
import type { AlgorithmKey, SortStep } from "@/lib/sorting/types";
import { generateArray, sleep, speedToDelay } from "@/lib/sorting/utils";

export type SortStatus = "idle" | "running" | "paused" | "done";

/**
 * Owns all visualizer state: the array, the animation loop, and statistics.
 * The animation loop reads mutable refs so speed/pause/stop take effect
 * immediately without restarting the algorithm.
 */
export function useSortVisualizer() {
  const [algorithm, setAlgorithm] = useState<AlgorithmKey>("bubble");
  const [size, setSize] = useState(40);
  const [speed, setSpeed] = useState(55);
  const [array, setArray] = useState<number[] | null>(null);
  const [step, setStep] = useState<SortStep | null>(null);
  const [status, setStatus] = useState<SortStatus>("idle");
  const [elapsed, setElapsed] = useState(0);

  const speedRef = useRef(speed);
  const pausedRef = useRef(false);
  /** Incremented on every stop/reset so stale loops exit. */
  const runIdRef = useRef(0);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const makeArray = useCallback((n: number) => {
    runIdRef.current++;
    pausedRef.current = false;
    const next = generateArray(n);
    setArray(next);
    setStep({ array: next, comparisons: 0, swaps: 0 });
    setElapsed(0);
    setStatus("idle");
  }, []);

  // Initial array + regeneration whenever the size slider changes.
  useEffect(() => {
    makeArray(size);
  }, [size, makeArray]);

  // Switching algorithms safely resets the visualization.
  useEffect(() => {
    runIdRef.current++;
    pausedRef.current = false;
    setStatus("idle");
    setElapsed(0);
    setArray((current) => {
      if (current) setStep({ array: current, comparisons: 0, swaps: 0 });
      return current;
    });
  }, [algorithm]);

  const start = useCallback(async () => {
    if (!array || status === "running" || status === "paused") return;

    const steps = buildSteps(algorithm, array);
    const runId = ++runIdRef.current;
    pausedRef.current = false;
    setStatus("running");
    setElapsed(0);

    const startedAt = performance.now();
    for (const frame of steps) {
      // Honour pause without blocking the UI thread.
      while (pausedRef.current && runIdRef.current === runId) {
        await sleep(60);
      }
      if (runIdRef.current !== runId) return; // reset/stopped
      setStep(frame);
      setElapsed(performance.now() - startedAt);
      await sleep(speedToDelay(speedRef.current));
    }

    if (runIdRef.current !== runId) return;
    const last = steps[steps.length - 1];
    if (last) setArray(last.array);
    setElapsed(performance.now() - startedAt);
    setStatus("done");
  }, [algorithm, array, status]);

  const togglePause = useCallback(() => {
    setStatus((s) => {
      if (s === "running") {
        pausedRef.current = true;
        return "paused";
      }
      if (s === "paused") {
        pausedRef.current = false;
        return "running";
      }
      return s;
    });
  }, []);

  const reset = useCallback(() => makeArray(size), [makeArray, size]);
  const generate = useCallback(() => makeArray(size), [makeArray, size]);

  // Stop any running animation when the component unmounts.
  useEffect(() => () => void runIdRef.current++, []);

  return {
    algorithm,
    setAlgorithm,
    size,
    setSize,
    speed,
    setSpeed,
    step,
    status,
    elapsed,
    hasArray: !!array,
    start,
    togglePause,
    reset,
    generate,
  };
}
