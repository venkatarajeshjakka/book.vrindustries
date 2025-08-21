# Data Flow

1. **User Action** (e.g., Add Sale)
   ⬇
2. **Form Modal** (shadcn/ui + react-hook-form + Zod)
   ⬇
3. **Validation** (Zod)
   ⬇
4. **API Route/Server Action** (Next.js)
   ⬇
5. **Drizzle ORM** (DB interaction)
   ⬇
6. **PostgreSQL**
   ⬇
7. **UI Update** (Table, Stats, Charts)

- Use React Query for server state (fetching, caching, mutations).
- Use Zustand or React Context for global state (if needed).
- Use local state for UI (modals, filters, etc.).
