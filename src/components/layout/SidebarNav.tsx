import type { ReactNode } from "react";

interface SidebarNavProps {
  children: ReactNode;
}

export function SidebarNav({ children }: SidebarNavProps) {
  return <nav className="flex flex-col">{children}</nav>;
}
