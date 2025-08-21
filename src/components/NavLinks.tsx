import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  ShoppingBag,
  Wallet,
  BarChart2,
  FileText,
  BookOpen,
  Boxes,
  CreditCard,
} from "lucide-react";

export const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/sales", label: "Sales", icon: ShoppingCart },
  { href: "/purchases", label: "Purchases", icon: ShoppingBag },
  { href: "/expenses", label: "Expenses", icon: Wallet },
  { href: "/profit", label: "Profit", icon: BarChart2 },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/ledger", label: "Ledger", icon: BookOpen },
  { href: "/inventory", label: "Inventory", icon: Boxes },
  { href: "/credits", label: "Credits", icon: CreditCard },
];

export function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-1 mt-2">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors group"
          onClick={onClick}
        >
          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
