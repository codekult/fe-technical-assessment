import { SortButton } from "../../components/ui/SortButton";
import { SearchInput } from "../../components/ui/SearchInput";

export function WorkflowsHeader() {
  return (
    <header className="flex items-center justify-between shrink-0 p-5 border-b border-black-alpha-8">
      <h1 className="text-3xl font-bold tracking-tight">Workflows</h1>

      <div className="flex items-center gap-2">
        <SortButton />
        <SearchInput placeholder="Search workflows" />
      </div>
    </header>
  );
}
