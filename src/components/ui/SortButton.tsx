import { useState } from "react";
import { useSearchParams } from "react-router";
import { TextIcon } from "./TextIcon";
import type { SortField } from "../../features/workflows/types";

const SORT_OPTIONS: { field: SortField; label: string }[] = [
  { field: "name", label: "Name" },
  { field: "lastUpdated", label: "Last Updated" },
  { field: "type", label: "Type" },
];

export function SortButton() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const current = (searchParams.get("sortBy") as SortField) || "name";
  const sortDirection = searchParams.get("sortDir") || "asc";
  const currentLabel = SORT_OPTIONS.find((option) => option.field === current)?.label;

  function handleSelect(field: SortField) {
    const params = new URLSearchParams(searchParams);
    const newDir = field === current && sortDirection === "asc" ? "desc" : "asc";
    params.set("sortBy", field);
    params.set("sortDir", newDir);
    setSearchParams(params, { replace: true });
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center items-center gap-1 rounded-md border border-black-alpha-8 px-3 py-1 font-medium cursor-pointer"
      >
        {currentLabel} {sortDirection === "asc" ? "↑" : "↓"}
        <TextIcon value="⏷" />
      </button>

      {open && (
        <div className="absolute top-full mt-1 right-0 bg-white border border-black-alpha-8 rounded-md shadow-lg z-20 min-w-32">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.field}
              onClick={() => handleSelect(option.field)}
              className="block w-full text-left px-4 py-2 hover:bg-black-alpha-4 text-sm cursor-pointer"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
