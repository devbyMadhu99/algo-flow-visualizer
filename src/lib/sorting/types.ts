export type AlgorithmKey =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick";

/**
 * A single frame of the visualization.
 * Algorithms are implemented as generators that yield these frames, so the UI
 * can replay them at any speed, pause, or stop without touching the logic.
 */
export interface SortStep {
  /** Full array snapshot for this frame. */
  array: number[];
  /** Indices currently being compared. */
  comparing?: number[];
  /** Indices currently being written/swapped. */
  swapping?: number[];
  /** Special index (current minimum, pivot, key being inserted...). */
  special?: number[];
  /** Indices known to be in final position. */
  sorted?: number[];
  comparisons: number;
  swaps: number;
}
