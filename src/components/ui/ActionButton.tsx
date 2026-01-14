import type { ReactNode } from "react";

interface ActionButtonProps {
    children: ReactNode;
}

export function ActionButton({ children }: ActionButtonProps) {
    return (
        <button className="p-1.5 bg-black-alpha-4 rounded cursor-pointer">
            <span className="w-3 h-3 block">{children}</span>
        </button>
    );
}
