import { pgTable, serial, varchar, integer, date, numeric, text } from "drizzle-orm/pg-core";

export const sales = pgTable("sales", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  clientName: varchar("client_name", { length: 255 }).notNull(),
  unitAmount: numeric("unit_amount").notNull(),
  unitQuantity: integer("unit_quantity").notNull(),
  total: numeric("total").notNull(),
  transport: numeric("transport"),
  saleAmount: numeric("sale_amount").notNull(),
  amountPaid: numeric("amount_paid").notNull(),
  paymentDate: date("payment_date"),
  paymentMode: varchar("payment_mode", { length: 100 }),
  balance: numeric("balance").notNull(),
  notes: text("notes"),
});
