# SortingVisualizer

An interactive sorting algorithm visualization platform built with React, TypeScript, and Tailwind CSS.

SortingVisualizer helps students and developers understand how sorting algorithms work by visualizing comparisons, swaps, pivots, and sorted elements step by step.

## Features

- Interactive sorting visualization
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Adjustable array size
- Adjustable animation speed
- Generate random arrays
- Start, pause, resume, and reset controls
- Live comparison and swap statistics
- Execution time tracking
- Algorithm complexity information
- Responsive design for desktop, tablet, and mobile
- Beginner-friendly algorithm explanations

## Algorithms

| Algorithm | Best | Average | Worst | Space |
|---|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- TanStack Router
- Lucide React

## Project Structure

```text
src/
├── components/
│   └── algo/
│       ├── Header.tsx
│       ├── BarChart.tsx
│       ├── Controls.tsx
│       ├── Stats.tsx
│       ├── AlgorithmInfoPanel.tsx
│       ├── ComparisonTable.tsx
│       └── LearnSection.tsx
│
├── hooks/
│   └── useSortVisualizer.ts
│
├── lib/
│   └── sorting/
│       ├── algorithms/
│       ├── info.ts
│       ├── types.ts
│       └── utils.ts
│
└── routes/
    └── index.tsx