# State Management

## Recommendations

- **Local State:** Use React’s `useState` and `useReducer` for component-level state (modals, filters, toggles).
- **Server State:** Use [React Query (TanStack Query)](https://tanstack.com/query/latest) for fetching, caching, and syncing server data (sales, purchases, stats, etc.).
- **Global State:** Use React Context for small global state (user, theme, filters). For larger/global state, use [Zustand](https://zustand-demo.pmnd.rs/).

## Example Usage

- UI/Local: `useState`, `useReducer`
- Server data: React Query
- Global: React Context or Zustand

## Why?

- React Query handles async data, caching, and background updates.
- Zustand is simple, fast, and works well with React Query.
- React Context is built-in and good for small, static global state.
