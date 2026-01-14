import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "../../../hooks/useDebounce";
import type { Workflow, SortField, SortDirection } from "../types";
import { SEARCH_DEBOUNCE_MS } from "../constants";

export function useFilteredWorkflows(workflows: Workflow[]) {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const sortBy = (searchParams.get("sortBy") as SortField) || "name";
  const sortDir = (searchParams.get("sortDir") as SortDirection) || "asc";

  const debouncedSearch = useDebounce(search, SEARCH_DEBOUNCE_MS);

  return useMemo(() => {
    let result = workflows;

    if (debouncedSearch.trim()) {
      const query = debouncedSearch.toLowerCase();
      result = result.filter((workflow) =>
        workflow.name.toLowerCase().includes(query)
      );
    }

    function compare<T>(a: T, b: T): number {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }

    return [...result].sort((workflowA, workflowB) => {
      const valueA = workflowA[sortBy];
      const valueB = workflowB[sortBy];

      const comparison = compare(valueA, valueB);

      return sortDir === "asc" ? comparison : -comparison;
    });
  }, [workflows, debouncedSearch, sortBy, sortDir]);
}
