"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/AppLayout";
import { SalesTable, Sale } from "@/components/tables/SalesTable";
import { SaleForm } from "@/components/forms/SaleForm";
import { useSalesStore } from "@/lib/sales.store";

export default function SalesPage() {
  const sales = useSalesStore((s) => s.sales);
  const addSale = useSalesStore((s) => s.addSale);
  const updateSale = useSalesStore((s) => s.updateSale);
  const deleteSale = useSalesStore((s) => s.deleteSale);
  const [modalOpen, setModalOpen] = useState(false);
  const [editSale, setEditSale] = useState<Sale | null>(null);

  const handleAddSale = (values: Omit<Sale, "id">) => {
    addSale(values);
    setModalOpen(false);
  };
  const handleEditSale = (sale: Sale) => {
    setEditSale(sale);
    setModalOpen(true);
  };
  const handleUpdateSale = (values: Omit<Sale, "id">) => {
    if (editSale) updateSale(editSale.id, values);
    setEditSale(null);
    setModalOpen(false);
  };
  const handleDeleteSale = (sale: Sale) => {
    deleteSale(sale.id);
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold">Sales</h1>
          <Button
            onClick={() => {
              setEditSale(null);
              setModalOpen(true);
            }}
          >
            Add Sale
          </Button>
        </div>
        <SalesTable
          data={sales}
          onEdit={handleEditSale}
          onDelete={handleDeleteSale}
        />
        <SaleForm
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setEditSale(null);
          }}
          onSubmit={editSale ? handleUpdateSale : handleAddSale}
          defaultValues={editSale || undefined}
        />
      </div>
    </AppLayout>
  );
}
