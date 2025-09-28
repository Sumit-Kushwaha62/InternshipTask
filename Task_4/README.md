## Responsive Website — Task 4
- A desktop-only page converted to a mobile-friendly layout using CSS media queries, flexible units, and a lightweight, CSS-only collapsible navigation.


## Breakpoints
- ≤ 1024px: Reduce grid density for card lists to improve readability.

- ≤ 768px: Stack multi-column layouts into a single column, collapse navigation into a vertical drawer, and tighten spacing for comfortable mobile reading.

## Layout changes on mobile
- Header: Horizontal nav converts to a vertical menu toggled by a hamburger control.
- Hero: Two-column grid becomes a single column; media sits below text to reduce initial load height.
- Content: Cards shift from three columns to one; sidebar stacks after main content.
- Images: Constrained with max-width: 100% and height: auto to prevent horizontal scrolling.


## Testing 
- Open index.html and activate the device toolbar in browser devtools.
- Confirm at ≤ 768px:
- The hero and content grids stack into one column.
- Sidebar appears below cards.
- Navigation collapses into a hamburger and reveals a vertical menu on toggle.
- No horizontal scrollbar is present.
- Images scale fluidly and maintain aspect ratio.
- Verify at intermediate widths that grids reduce column counts smoothly.

## Approach
- Started with a desktop layout and added the viewport meta tag to enable correct scaling on mobile.
- Identified fixed-width and multi-column areas, then introduced media queries at 1024px and 768px to reduce columns and stack sections.
- Implemented a CSS-only hamburger to collapse the navigation at 768px and reorganized layout to a single column.
- Ensured images scale within their containers, removed horizontal overflow, and verified everything in the device toolbar.


## Screenshot
![screenshot](https://github.com/Sumit-Kushwaha62/InternshipTask/blob/main/Task_4/images/Screenshot%20(221).png?raw=true)