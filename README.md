# ⚡ SortingVisualizer

**SortingVisualizer** is a modern, interactive sorting algorithm visualization platform built to help students and developers understand how sorting algorithms work through real-time animations.

Instead of only showing the final sorted result, the application visually demonstrates **comparisons, swaps, pivots, minimum elements, sorting steps, and algorithm behavior**.

---

## ✨ Features

* 📊 Interactive sorting visualization
* 🔵 Bubble Sort
* 🟣 Selection Sort
* 🟢 Insertion Sort
* 🟠 Merge Sort
* 🔴 Quick Sort
* 🎚️ Adjustable array size
* ⚡ Adjustable animation speed
* 🔄 Generate random arrays
* ▶️ Start sorting
* ⏸️ Pause / Resume
* 🔁 Reset visualization
* 📈 Live comparison statistics
* 🔄 Live swap statistics
* ⏱️ Execution time tracking
* 📚 Dynamic algorithm information
* 📖 Beginner-friendly learning section
* 📱 Fully responsive design
* 🌙 Modern dark developer-tool interface
* ✨ Smooth animations and transitions

---

## 🖼️ Project Preview

### Main Dashboard

![SortingVisualizer Dashboard](./screenshots/01-home.png)

### Sorting Visualization

![Sorting Visualization](./screenshots/02-visualizer.png)

### Algorithm Information

![Algorithm Information](./screenshots/03-algorithms.png)

### Learning Section

![Learning Section](./screenshots/04-learning.png)

---

## 🧠 Supported Algorithms

| Algorithm      | Best Case  | Average Case | Worst Case | Space    |
| -------------- | ---------- | ------------ | ---------- | -------- |
| Bubble Sort    | O(n)       | O(n²)        | O(n²)      | O(1)     |
| Selection Sort | O(n²)      | O(n²)        | O(n²)      | O(1)     |
| Insertion Sort | O(n)       | O(n²)        | O(n²)      | O(1)     |
| Merge Sort     | O(n log n) | O(n log n)   | O(n log n) | O(n)     |
| Quick Sort     | O(n log n) | O(n log n)   | O(n²)      | O(log n) |

---

## ⚙️ How It Works

SortingVisualizer represents an array as animated vertical bars.

During sorting:

* Compared elements are highlighted.
* Swapped elements are highlighted.
* Minimum elements are highlighted during Selection Sort.
* Pivots are highlighted during Quick Sort.
* Merge operations are visualized during Merge Sort.
* Insertion and shifting operations are visualized during Insertion Sort.
* Sorted elements receive a completed state.
* Comparisons and swaps are tracked dynamically.
* Execution time is measured during the sorting process.

Each algorithm produces individual visualization steps, allowing users to understand the actual behavior of the algorithm rather than instantly seeing the final result.

---

## 🎛️ Controls

### Generate Array

Generates a new random array and resets the current statistics.

### Start Sorting

Starts the selected sorting algorithm and displays its operations step by step.

### Pause / Resume

Temporarily pauses the sorting animation and allows the user to continue from the same point.

### Reset

Stops the current animation and restores a fresh unsorted state.

### Array Size

Controls the number of elements displayed in the visualization.

### Animation Speed

Controls how quickly each sorting step is displayed.

### Algorithm Selector

Allows users to switch between the five supported sorting algorithms.

---

## 📊 Statistics

The visualization provides real-time statistics including:

* **Comparisons**
* **Swaps**
* **Execution Time**

After the algorithm finishes, the application displays a successful sorting completion state.

---

## 📚 Learning Section

The Learning Section provides beginner-friendly explanations and examples for:

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort

The goal is to make algorithm concepts easier to understand through **visual interaction and practical examples**.

---

## 📱 Responsive Design

SortingVisualizer is designed to work across:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Tablet
* 📲 Mobile

The controls, visualization area, information cards, learning content, and comparison table automatically adapt to different screen sizes.

---

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **TanStack Router**
* **Lucide React**

No backend or database is required.

---

## 📁 Project Structure

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
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd algo-flow-visualizer
```

Install dependencies:

```bash
npm install
```

If PowerShell blocks the `npm` command on Windows, use:

```powershell
npm.cmd install
```

### Development

Start the development server:

```powershell
npm.cmd run dev
```

Open the local URL displayed in the terminal.

### Production Build

Create a production build:

```powershell
npm.cmd run build
```

The project should complete the build without errors.

---

## 🔍 Quality & Reliability

The application focuses on:

* Real sorting algorithm implementations
* Functional controls
* Dynamic statistics
* Safe sorting state management
* Reusable React components
* TypeScript type safety
* Responsive UI
* Clean component structure
* No backend dependency
* No placeholder sorting functionality

Every supported algorithm is implemented to perform actual sorting operations and generate visualization steps.

---

## 🔮 Future Improvements

Possible future improvements include:

* 🔎 Searching algorithm visualizations
* ✏️ Custom array input
* 📜 Algorithm pseudocode display
* 📊 Detailed performance charts
* 🕒 Algorithm execution history
* 🎨 Additional theme customization
* 🧩 More sorting algorithms
* 📈 Advanced algorithm performance comparison

---

## 🎯 About

SortingVisualizer is an interactive learning tool designed to help students understand sorting algorithms through real-time visualization.

It helps users understand:

* Comparisons
* Swaps
* Time complexity
* Algorithm behavior
* Differences between sorting techniques
* Step-by-step sorting processes

The project is designed as both a **learning tool** and a **portfolio project** demonstrating modern frontend development skills.

---

## 👩‍💻 Author

**Madhu Yadav**

Built as a portfolio and learning project using modern frontend technologies.

⭐ If you find this project useful, consider giving it a star on GitHub.

---

## 📄 License

This project is created for learning and portfolio purposes.
