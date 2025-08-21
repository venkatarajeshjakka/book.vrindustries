import { create } from "zustand";
import { Sale } from "@/components/tables/SalesTable";

interface SalesState {
  sales: Sale[];
  addSale: (sale: Omit<Sale, "id">) => void;
  updateSale: (id: number, sale: Partial<Sale>) => void;
  deleteSale: (id: number) => void;
}

export const useSalesStore = create<SalesState>((set, get) => ({
  sales: [
    {
      id: 1,
      date: "2025-08-21",
      clientName: "Acme Corp",
      unitAmount: 100,
      unitQuantity: 5,
      total: 500,
      amountPaid: 300,
      balance: 200,
    },
    {
      id: 2,
      date: "2025-08-20",
      clientName: "Beta Ltd",
      unitAmount: 200,
      unitQuantity: 2,
      total: 400,
      amountPaid: 400,
      balance: 0,
    },
  ],
  addSale: (sale) =>
    set((state) => ({
      sales: [
        ...state.sales,
        { ...sale, id: state.sales.length ? Math.max(...state.sales.map((s) => s.id)) + 1 : 1 },
      ],
    })),
  updateSale: (id, sale) =>
    set((state) => ({
      sales: state.sales.map((s) => (s.id === id ? { ...s, ...sale } : s)),
    })),
  deleteSale: (id) =>
    set((state) => ({
      sales: state.sales.filter((s) => s.id !== id),
    })),
}));
