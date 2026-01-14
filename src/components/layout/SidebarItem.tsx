import type { ComponentType } from "react";

interface SidebarItemProps {
  icon: ComponentType<{ size: number }>;
  label: string;
}

export function SidebarItem({ icon: Icon, label }: SidebarItemProps) {
  return (
    <a
      href="#"
      className="flex w-full items-center gap-1 rounded-md py-2 text-xs text-dark-gray hover:bg-black-alpha-4 hover:text-black"
    >
      <Icon size={12} />
      {label}
    </a>
  );
}
