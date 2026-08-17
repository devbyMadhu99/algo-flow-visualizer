# Algo Flow Visualizer

Build a polished, portfolio-ready web application called AlgoVisualizer — an interactive sorting algorithm visualization platform for students and developers.

1. Tech Stack

Use:

- HTML5

- CSS3

- JavaScript

- React if needed for clean component-based architecture

- No backend required

- Keep the code clean, modular, readable, and easy to understand

- Do NOT use fake/demo functionality. Every button and control must actually work.

2. Overall Design

Create a modern, premium developer-tool style interface.

Theme:

- Dark background

- Beautiful blue/purple accent colors

- Glassmorphism cards

- Smooth gradients

- Subtle shadows and borders

- Clean typography

- Professional spacing

- Smooth hover and transition effects

- Responsive on laptop, tablet, and mobile

The application should look like a real developer product, not a basic college project.

3. Header

Create a professional header containing:

⚡ AlgoVisualizer

Subtitle:

"Visualize how sorting algorithms work"

Add navigation links:

- Visualizer

- Algorithms

- About

Keep the header clean and responsive.

4. Main Visualizer

Create a large visualization panel in the center.

Display an array as vertical animated bars.

Requirements:

- Bars should have different heights based on array values.

- Bars should animate smoothly during sorting.

- Highlight the bars currently being compared.

- Highlight the bar being swapped.

- Highlight the currently selected/minimum element where appropriate.

- After sorting, show a clear completed state.

5. Controls

Create a beautiful control panel containing:

Algorithm selector

Dropdown with:

- Bubble Sort

- Selection Sort

- Insertion Sort

- Merge Sort

- Quick Sort

Array Size

Create a functional slider:

- Minimum: 10

- Maximum: 100

- Default: 40

- Show the current value beside the slider.

Speed

Create a functional speed slider:

- Slow

- Medium

- Fast

- Show the current speed/delay value.

Do NOT keep these values fixed. Changing the sliders must immediately affect the visualization.

6. Buttons

Create these fully functional buttons:

Generate Array

- Generates a new random array.

- Clears previous statistics.

- Updates the visualization immediately.

Start Sorting

- Runs the selected algorithm.

- Animates every important comparison/swap.

- Disables conflicting controls while sorting.

Pause

- Temporarily pauses the sorting animation.

- Allow the user to resume.

Reset

- Stops the current animation.

- Generates/restores a fresh unsorted state.

- Resets statistics.

7. Sorting Algorithms

Actually implement these algorithms in JavaScript:

Bubble Sort

Show comparisons and swaps.

Selection Sort

Show the current minimum element and swaps.

Insertion Sort

Show the element being inserted and the shifting process.

Merge Sort

Visualize the divide and merge process.

Quick Sort

Visualize pivot selection, comparisons, and swaps.

Do NOT simply instantly sort the array.

The visualization must show the algorithm step-by-step.

8. Statistics

Create attractive statistics cards showing:

Comparisons

0

Swaps

0

Time

0 ms

Update these values dynamically while sorting.

After sorting, display a small message such as:

"Sorting completed successfully!"

9. Algorithm Information

Below the visualizer, create an Algorithm Information section.

When the user selects an algorithm, dynamically show:

- Algorithm name

- Short explanation

- Best Case

- Average Case

- Worst Case

- Space Complexity

- Stable: Yes/No

- In-place: Yes/No

Example:

Bubble Sort

Best: O(n)

Average: O(n²)

Worst: O(n²)

Space: O(1)

Use clean cards/table-style presentation.

10. Algorithm Comparison

Add a section called:

Algorithm Complexity Comparison

Create a professional comparison table:

| Algorithm | Best | Average | Worst | Space |

| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |

| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |

| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |

| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |

| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |

Make the table responsive on mobile.

11. Learning Section

Add a section:

Learn Sorting Algorithms

Include short beginner-friendly explanations of each algorithm.

Use simple language and small visual examples where appropriate.

12. About Section

Create an About section explaining:

"AlgoVisualizer is an interactive learning tool designed to help students understand sorting algorithms through real-time visualization."

Mention that it helps users understand:

- Comparisons

- Swaps

- Time complexity

- Algorithm behavior

13. UX Requirements

Make sure:

- Generate Array works.

- Array Size slider works.

- Speed slider works.

- Algorithm dropdown works.

- Start Sorting works.

- Pause works.

- Reset works.

- Statistics update correctly.

- Sorting cannot be started multiple times simultaneously.

- Switching algorithms resets the visualization safely.

- No console errors.

- No broken buttons.

- No placeholder functionality.

14. Responsive Design

The application must work properly on:

- Desktop

- Laptop

- Tablet

- Mobile

On smaller screens, stack controls vertically and make the visualization readable.

15. Visual Polish

Add:

- Smooth transitions

- Button hover effects

- Subtle bar animations

- Loading/sorting state

- Empty-state message before generating an array

- Clear disabled states

- Tooltips where useful

- Consistent spacing

- Professional icons

Avoid excessive animations that make the interface distracting.

16. Code Quality

Keep the project structure clean.

Separate:

- Components

- Sorting algorithms

- Styles

- Utility functions

Add comments explaining the important sorting logic.

Do not hard-code the generated array.

Use reusable functions for:

- Array generation

- Animation delay

- Updating statistics

- Rendering bars

- Sorting steps

17. Final Quality Check

Before finishing, test every algorithm and every control.

Verify:

1. Generate Array creates random bars.

2. Array Size changes the number of bars.

3. Speed changes animation speed.

4. Every algorithm actually sorts correctly.

5. Comparisons increase correctly.

6. Swaps increase correctly.

7. Pause works.

8. Reset works.

9. Refreshing the page does not break the application.

10. There are no console errors.

The final result should feel like a real portfolio project suitable for a Full Stack/Software Developer resume, with a polished UI and genuinely working algorithm visualizations.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9b548f7b-fa27-413e-97c7-5766b59591b6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
