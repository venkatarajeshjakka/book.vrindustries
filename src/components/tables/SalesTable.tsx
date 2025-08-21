import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Sale {
  id: number;
  date: string;
  clientName: string;
  unitAmount: number;
  unitQuantity: number;
  total: number;
  amountPaid: number;
  balance: number;
}

interface SalesTableProps {
  data: Sale[];
  onEdit?: (sale: Sale) => void;
  onDelete?: (sale: Sale) => void;
}

export function SalesTable({ data, onEdit, onDelete }: SalesTableProps) {
  return (
    <Card className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Client</th>
            <th className="p-2 text-right">Unit Amount</th>
            <th className="p-2 text-right">Quantity</th>
            <th className="p-2 text-right">Total</th>
            <th className="p-2 text-right">Paid</th>
            <th className="p-2 text-right">Balance</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={8} className="p-4 text-center text-muted-foreground">
                No sales found.
              </td>
            </tr>
          ) : (
            data.map((sale) => (
              <tr key={sale.id} className="border-b last:border-b-0">
                <td className="p-2">{sale.date}</td>
                <td className="p-2">{sale.clientName}</td>
                <td className="p-2 text-right">{sale.unitAmount}</td>
                <td className="p-2 text-right">{sale.unitQuantity}</td>
                <td className="p-2 text-right">{sale.total}</td>
                <td className="p-2 text-right">{sale.amountPaid}</td>
                <td className="p-2 text-right">{sale.balance}</td>
                <td className="p-2 text-center flex gap-2 justify-center">
                  {onEdit && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onEdit(sale)}
                    >
                      Edit
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onDelete(sale)}
                    >
                      Delete
                    </Button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
}
