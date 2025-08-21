# Implementation Guide

## Step-by-Step

1. **Install Dependencies**
   ```sh
   npm install @shadcn/ui recharts react-hook-form zod drizzle-orm pg @tanstack/react-query zustand
   ```
2. **Initialize shadcn/ui**
   ```sh
   npx shadcn-ui@latest init
   ```
3. **Set Up Drizzle ORM**
   - Create `/src/lib/drizzle.ts` for Drizzle client setup.
   - Create `/src/schemas/` for all table schemas.
4. **Create Pages**
   - Scaffold pages in `/src/app/` for each section (sales, purchases, etc.).
5. **Create Components**
   - UI: Table, Modal, Form, Chart, StatsCard, Sidebar, Topbar, etc.
   - Forms: Use `react-hook-form` + `zod` for validation.
   - Charts: Use `Recharts` for insights.
6. **Connect to Database**
   - Use Drizzle ORM in API routes or server components to fetch/store data.
7. **Implement Features**
   - CRUD for each section (Sales, Purchases, etc.)
   - Filtering, sorting, search, stats, and charts.
   - Export to PDF/Excel (use libraries like `react-pdf` or `xlsx`).
