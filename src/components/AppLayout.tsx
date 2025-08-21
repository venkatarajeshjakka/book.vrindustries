"use client";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export function AppLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((prev) => !prev);
  const sidebarWidth = collapsed ? "4rem" : "16rem";
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SidebarNavigation collapsed={collapsed} toggle={toggle} />
      <Topbar
        className={cn(
          "transition-all duration-200 fixed top-0 right-0 z-30 bg-background"
        )}
        style={{ left: sidebarWidth }}
        collapsed={collapsed}
        toggle={toggle}
      />
      <div className="flex flex-1">
        <main
          className={cn("flex-1 p-6 bg-background transition-all duration-200")}
          style={{ paddingTop: "4rem", marginLeft: sidebarWidth }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
