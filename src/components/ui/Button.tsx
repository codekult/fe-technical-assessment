import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "secondary",
  type = "button",
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const baseClass =
    "flex items-center justify-center gap-1 rounded-md px-4 py-2 font-medium cursor-pointer";
  const variantClass =
    variant === "primary"
      ? "bg-black text-white"
      : "border border-black-alpha-8";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${widthClass}`}
    >
      {children}
    </button>
  );
}
