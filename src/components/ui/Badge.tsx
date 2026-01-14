import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-2 rounded-full text-xs font-bold border border-black-alpha-8">
      {children}
    </span>
  );
}
