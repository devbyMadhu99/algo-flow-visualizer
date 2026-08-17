/** Random array generation + small shared helpers. */

export const MIN_VALUE = 5;
export const MAX_VALUE = 100;

/** Generate a fresh random array — never hard-coded. */
export function generateArray(size: number): number[] {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE,
  );
}

/** Cancellable animation delay. */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Speed slider (1 = slow … 100 = fast) mapped to a per-frame delay in ms. */
export function speedToDelay(speed: number): number {
  return Math.round(2 + (100 - speed) ** 1.5 / 55);
}

export function speedLabel(speed: number): string {
  if (speed < 34) return "Slow";
  if (speed < 70) return "Medium";
  return "Fast";
}

export function formatMs(ms: number): string {
  return `${Math.round(ms)} ms`;
}
