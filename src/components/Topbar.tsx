// components/Topbar.tsx

"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
interface TopbarProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  collapsed?: boolean;
  toggle?: () => void;
}

export function Topbar({ children, className = "", style }: TopbarProps) {
  return (
    <header
      className={cn(
        "h-16 flex items-center justify-between px-4 md:px-8 fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur border-b shadow-sm rounded-b-xl",
        className
      )}
      style={{ WebkitBackdropFilter: "blur(8px)", ...style }}
    >
      <div className="flex items-center w-full min-w-0 gap-2 sm:gap-4 px-0 sm:px-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-bar-chart-3 w-6 h-6 text-primary flex-shrink-0"
        >
          <path d="M3 3v18h18" />
          <rect width="4" height="7" x="7" y="10" rx="1" />
          <rect width="4" height="12" x="15" y="5" rx="1" />
          <rect width="4" height="4" x="11" y="13" rx="1" />
        </svg>
        <span className="truncate font-bold text-lg tracking-tight text-primary max-w-[100px] sm:max-w-[180px] whitespace-nowrap">
          VR Industries
        </span>
        <div className="flex-1 min-w-0" />
        <div className="flex items-center gap-2 flex-shrink-0 max-w-[48px]">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
