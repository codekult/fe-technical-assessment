import type { CSSProperties } from "react";

interface ColorChipProps {
  color: CSSProperties["backgroundColor"];
}

export function ColorChip({ color }: ColorChipProps) {
  return (
    <span className="w-2 h-2 rounded-xs" style={{ backgroundColor: color }} />
  );
}
