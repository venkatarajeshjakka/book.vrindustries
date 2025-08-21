# Business Activity Tracker – Documentation

This folder contains all documentation, architecture, and implementation notes for the project. Use this as a memory bank and reference during development.

## Contents

- [project-structure.md](./project-structure.md)
- [tech-stack.md](./tech-stack.md)
- [data-schemas.md](./data-schemas.md)
- [database-setup.md](./database-setup.md)
- [implementation-guide.md](./implementation-guide.md)
- [pages-components.md](./pages-components.md)
- [data-flow.md](./data-flow.md)
- [state-management.md](./state-management.md)
- [best-practices.md](./best-practices.md)
- [references.md](./references.md)

## Recent UI/UX Features & Changes (2025-08)

- **Modern Responsive Layout**: Fully modular layout using Next.js app directory, shadcn/ui, and Tailwind CSS.
- **Collapsible Sidebar**: Sidebar can be collapsed/expanded on desktop, with state managed in AppLayout and synced with the header.
- **Mobile Sidebar Drawer**: Sidebar navigation is accessible via a drawer on mobile screens.
- **Header (Topbar) Improvements**:
  - Always visible on all screen sizes.
  - Sidebar toggle button on desktop, synced with sidebar state.
  - Compact, single-line branding ("Business Activity Tracker" and "VR Industries") on all screens.
- **State Management**: Zustand removed for sidebar; now using local state in AppLayout for easier sync and less complexity.
- **Consistent Margin/Width Logic**: Sidebar, header, and main content use inline styles for margin/width, ensuring perfect alignment and responsiveness.
- **Accessibility**: All navigation and toggle buttons have proper aria-labels and keyboard accessibility.
- **Utility Improvements**: All dynamic class names use the `cn` utility for safe merging.
- **Codebase Cleanup**: Removed unused Zustand store, fixed export issues, and ensured all components are properly typed and exported.

See the other docs in this folder for more details on architecture, state, and best practices.
