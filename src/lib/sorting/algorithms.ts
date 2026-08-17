import type { AlgorithmKey, SortStep } from "./types";

/**
 * Every algorithm below is a generator that yields a snapshot of the array
 * after each meaningful comparison / swap / write. Nothing is faked: the
 * yielded arrays come from the real sorting work.
 */

/** Shared mutable counters so each generator reports live statistics. */
interface Counters {
  comparisons: number;
  swaps: number;
}

function frame(
  array: number[],
  c: Counters,
  extra: Partial<SortStep> = {},
): SortStep {
  return {
    array: [...array],
    comparisons: c.comparisons,
    swaps: c.swaps,
    ...extra,
  };
}

// ---------------------------------------------------------------- Bubble Sort
function* bubbleSort(input: number[]): Generator<SortStep> {
  const a = [...input];
  const c: Counters = { comparisons: 0, swaps: 0 };
  const sorted: number[] = [];

  for (let i = 0; i < a.length - 1; i++) {
    let swappedThisPass = false;
    for (let j = 0; j < a.length - i - 1; j++) {
      c.comparisons++;
      yield frame(a, c, { comparing: [j, j + 1], sorted: [...sorted] });
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        c.swaps++;
        swappedThisPass = true;
        yield frame(a, c, { swapping: [j, j + 1], sorted: [...sorted] });
      }
    }
    // Largest remaining element has bubbled to its final position.
    sorted.unshift(a.length - i - 1);
    if (!swappedThisPass) break;
  }
  yield frame(a, c, { sorted: a.map((_, i) => i) });
}

// ------------------------------------------------------------- Selection Sort
function* selectionSort(input: number[]): Generator<SortStep> {
  const a = [...input];
  const c: Counters = { comparisons: 0, swaps: 0 };
  const sorted: number[] = [];

  for (let i = 0; i < a.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      c.comparisons++;
      yield frame(a, c, {
        comparing: [j],
        special: [min],
        sorted: [...sorted],
      });
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
      c.swaps++;
      yield frame(a, c, { swapping: [i, min], sorted: [...sorted] });
    }
    sorted.push(i);
  }
  yield frame(a, c, { sorted: a.map((_, i) => i) });
}

// ------------------------------------------------------------- Insertion Sort
function* insertionSort(input: number[]): Generator<SortStep> {
  const a = [...input];
  const c: Counters = { comparisons: 0, swaps: 0 };

  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    const sortedPrefix = () => Array.from({ length: i }, (_, k) => k);
    yield frame(a, c, { special: [i], sorted: sortedPrefix() });

    // Shift every larger element one slot to the right.
    while (j >= 0) {
      c.comparisons++;
      yield frame(a, c, { comparing: [j], special: [i], sorted: sortedPrefix() });
      if (a[j] <= key) break;
      a[j + 1] = a[j];
      c.swaps++;
      yield frame(a, c, { swapping: [j, j + 1], sorted: sortedPrefix() });
      j--;
    }
    a[j + 1] = key;
    yield frame(a, c, { swapping: [j + 1] });
  }
  yield frame(a, c, { sorted: a.map((_, i) => i) });
}

// ----------------------------------------------------------------- Merge Sort
function* mergeSort(input: number[]): Generator<SortStep> {
  const a = [...input];
  const c: Counters = { comparisons: 0, swaps: 0 };

  function* merge(lo: number, mid: number, hi: number): Generator<SortStep> {
    const left = a.slice(lo, mid + 1);
    const right = a.slice(mid + 1, hi + 1);
    const range = Array.from({ length: hi - lo + 1 }, (_, k) => lo + k);
    let i = 0;
    let j = 0;
    let k = lo;

    while (i < left.length && j < right.length) {
      c.comparisons++;
      yield frame(a, c, { comparing: [lo + i, mid + 1 + j], special: range });
      a[k] = left[i] <= right[j] ? left[i++] : right[j++];
      c.swaps++;
      yield frame(a, c, { swapping: [k], special: range });
      k++;
    }
    while (i < left.length) {
      a[k] = left[i++];
      c.swaps++;
      yield frame(a, c, { swapping: [k], special: range });
      k++;
    }
    while (j < right.length) {
      a[k] = right[j++];
      c.swaps++;
      yield frame(a, c, { swapping: [k], special: range });
      k++;
    }
  }

  function* sort(lo: number, hi: number): Generator<SortStep> {
    if (lo >= hi) return;
    const mid = Math.floor((lo + hi) / 2);
    yield* sort(lo, mid);
    yield* sort(mid + 1, hi);
    yield* merge(lo, mid, hi);
  }

  yield* sort(0, a.length - 1);
  yield frame(a, c, { sorted: a.map((_, i) => i) });
}

// ----------------------------------------------------------------- Quick Sort
function* quickSort(input: number[]): Generator<SortStep> {
  const a = [...input];
  const c: Counters = { comparisons: 0, swaps: 0 };
  const sorted: number[] = [];

  function* partition(lo: number, hi: number): Generator<SortStep, number> {
    const pivot = a[hi]; // Lomuto partition scheme, last element as pivot.
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
      c.comparisons++;
      yield frame(a, c, { comparing: [j], special: [hi], sorted: [...sorted] });
      if (a[j] < pivot) {
        i++;
        if (i !== j) {
          [a[i], a[j]] = [a[j], a[i]];
          c.swaps++;
          yield frame(a, c, {
            swapping: [i, j],
            special: [hi],
            sorted: [...sorted],
          });
        }
      }
    }
    if (i + 1 !== hi) {
      [a[i + 1], a[hi]] = [a[hi], a[i + 1]];
      c.swaps++;
      yield frame(a, c, { swapping: [i + 1, hi], sorted: [...sorted] });
    }
    return i + 1;
  }

  function* sort(lo: number, hi: number): Generator<SortStep> {
    if (lo >= hi) {
      if (lo === hi) sorted.push(lo);
      return;
    }
    const p = yield* partition(lo, hi);
    sorted.push(p);
    yield* sort(lo, p - 1);
    yield* sort(p + 1, hi);
  }

  yield* sort(0, a.length - 1);
  yield frame(a, c, { sorted: a.map((_, i) => i) });
}

export const SORTERS: Record<
  AlgorithmKey,
  (input: number[]) => Generator<SortStep>
> = {
  bubble: bubbleSort,
  selection: selectionSort,
  insertion: insertionSort,
  merge: mergeSort,
  quick: quickSort,
};

/** Materialize all frames for an array + algorithm. */
export function buildSteps(
  key: AlgorithmKey,
  array: number[],
): SortStep[] {
  return Array.from(SORTERS[key](array));
}
