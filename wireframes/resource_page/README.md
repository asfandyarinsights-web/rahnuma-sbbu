# Rahnuma SBBU — Resources Page Wireframes

## Purpose

These wireframes define the visual layout of the Preparation Resources page for Rahnuma SBBU v0.1.

## Approved Designs

* `desktop.png` — Desktop layout.
* `mobile.png` — Mobile layout.

The project owner has approved the existing mockups. They should be retained as the design reference during implementation.

## Page Structure

1. Global navigation
2. Page heading and introduction
3. Resource category filters
4. Resource cards
5. Empty state when no matching resources are available
6. Global footer and student-made guidance disclaimer

## Responsive Layout

* **Mobile:** Single-column resource cards; category filters wrap onto multiple rows.
* **Tablet:** Two-column resource grid.
* **Desktop:** Three-column resource grid.
* The page uses the established Rahnuma content container and design tokens.

## Resource Card Content

Resource cards may contain:

* Subject or category
* Resource title
* Short description
* Resource type
* Source and date information, where available
* A “View Resource” link

Unavailable or unverified source information must not be presented as verified.

## Implementation Notes

* Reuse the existing global navigation, footer, typography, colors, and theme system.
* Use semantic HTML and accessible interactive controls.
* Keep the empty state separate from the populated resource list.
* Preserve the approved visual direction while adapting the layout responsively.
* Do not introduce out-of-scope features such as login, bookmarks, progress tracking, or AI guidance.

## Approval Status

The existing desktop and mobile mockups are approved by the project owner and serve as the implementation reference.
