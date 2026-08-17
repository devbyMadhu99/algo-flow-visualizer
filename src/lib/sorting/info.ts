import type { AlgorithmKey } from "./types";

export interface AlgorithmInfo {
  key: AlgorithmKey;
  name: string;
  summary: string;
  best: string;
  average: string;
  worst: string;
  space: string;
  stable: boolean;
  inPlace: boolean;
  /** Beginner-friendly explanation for the learning section. */
  learn: string;
  example: string;
}

export const ALGORITHMS: AlgorithmInfo[] = [
  {
    key: "bubble",
    name: "Bubble Sort",
    summary:
      "Repeatedly steps through the list, comparing adjacent pairs and swapping them when they are out of order. After each pass the largest remaining value has 'bubbled' to the end.",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: true,
    inPlace: true,
    learn:
      "Imagine bubbles rising in a glass: on every pass the biggest value floats to the right. It is the simplest sort to reason about, but it does a lot of redundant work.",
    example: "[5, 3, 8, 1] → [3, 5, 1, 8] → [3, 1, 5, 8] → [1, 3, 5, 8]",
  },
  {
    key: "selection",
    name: "Selection Sort",
    summary:
      "Scans the unsorted region to find the smallest element, then swaps it into the boundary position. It performs at most n − 1 swaps.",
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: false,
    inPlace: true,
    learn:
      "Like picking cards: look through everything left, grab the smallest, put it down. Comparisons are always O(n²), but the low swap count makes it useful when writes are expensive.",
    example: "[5, 3, 8, 1] → pick 1 → [1, 3, 8, 5] → pick 3 → [1, 3, 5, 8]",
  },
  {
    key: "insertion",
    name: "Insertion Sort",
    summary:
      "Builds a sorted prefix one element at a time, shifting larger elements to the right to open a slot for the current key.",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: true,
    inPlace: true,
    learn:
      "Exactly how most people sort a hand of playing cards. Extremely fast on small or nearly-sorted arrays, which is why real libraries fall back to it for tiny partitions.",
    example: "[5, 3, 8, 1] → [3, 5, 8, 1] → [3, 5, 8, 1] → [1, 3, 5, 8]",
  },
  {
    key: "merge",
    name: "Merge Sort",
    summary:
      "Divide and conquer: splits the array in half recursively, sorts each half, then merges the two sorted halves back together in linear time.",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)",
    space: "O(n)",
    stable: true,
    inPlace: false,
    learn:
      "Split until every piece has one element (already sorted), then repeatedly zip two sorted lists into one. Guaranteed O(n log n) — the trade-off is extra memory for the merge buffer.",
    example: "[5, 3 | 8, 1] → [3, 5] + [1, 8] → merge → [1, 3, 5, 8]",
  },
  {
    key: "quick",
    name: "Quick Sort",
    summary:
      "Picks a pivot, partitions the array so smaller values sit left and larger values right, then recurses into both sides. Uses the Lomuto scheme with the last element as pivot.",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
    stable: false,
    inPlace: true,
    learn:
      "Choose a pivot and shove everything smaller to its left. The pivot then sits in its final place forever. Fastest in practice, but a bad pivot on sorted data degrades it to O(n²).",
    example: "[5, 3, 8, 1] pivot 1 → [1 | 5, 3, 8] → pivot 8 → [1, 3, 5, 8]",
  },
];

export const ALGO_MAP = Object.fromEntries(
  ALGORITHMS.map((a) => [a.key, a]),
) as Record<AlgorithmKey, AlgorithmInfo>;
