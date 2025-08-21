// components/SidebarNavigation.tsx

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLinks, navItems } from "@/components/NavLinks";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface SidebarNavigationProps {
  collapsed: boolean;
  toggle: () => void;
}

export const SidebarNavigation: FC<SidebarNavigationProps> = ({
  collapsed,
  toggle,
}) => {
  const pathname = usePathname();
  const sidebarWidth = collapsed ? "4rem" : "16rem";
  return (
    <>
      {/* Mobile: Sheet Drawer */}
      <div className="md:hidden fixed top-3 left-3 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <button className="inline-flex items-center justify-center rounded-md p-2 text-primary bg-background border shadow-md hover:bg-muted focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            {/* 🐛 Fix: Add SheetTitle for accessibility */}
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="h-full flex flex-col bg-background">
              <div className="p-4 font-bold text-lg border-b">Menu</div>
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Desktop: Collapsible Sidebar */}
      <aside
        className={`hidden md:flex flex-col h-screen border-r bg-sidebar text-sidebar-foreground p-2 fixed top-0 left-0 z-40 transition-all duration-200`}
        style={{ width: sidebarWidth }}
        aria-label="Sidebar navigation"
      >
        <div className="flex items-center justify-between mb-2 px-2">
          <span
            className={`font-bold text-lg transition-all duration-200 ${
              collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            }`}
          >
            Menu
          </span>
        </div>

        <div className="flex justify-end mb-2 px-2">
          <button
            className="rounded hover:bg-muted p-1 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={toggle}
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>
        <nav className="flex flex-col gap-1 mt-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-colors group
                  ${collapsed ? "justify-center" : ""}
                  ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-primary"
                  }
                `}
                aria-current={active ? "page" : undefined}
                tabIndex={0}
                title={label}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {!collapsed && <span className="truncate">{label}</span>}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
