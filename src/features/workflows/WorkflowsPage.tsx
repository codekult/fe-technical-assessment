import { Outlet } from "react-router";
import { useSearchParams } from "react-router";
import { WorkflowsProvider, useWorkflowsContext } from "./context";
import { useFilteredWorkflows } from "./hooks/useFilteredWorkflows";
import { WorkflowsHeader } from "./WorkflowsHeader";
import { WorkflowsTable } from "./WorkflowsTable";
import { WorkflowsTableSkeleton } from "./WorkflowsTableSkeleton";
import { ErrorMessage } from "../../components/ui/ErrorMessage";
import { EMPTY_FILTER_MESSAGE } from "./constants";

function WorkflowsPageContent() {
  const { workflows: all, loading, error } = useWorkflowsContext();
  const workflows = useFilteredWorkflows(all);
  const [searchParams] = useSearchParams();
  const hasSearch = !!searchParams.get("search");

  if (loading) {
    return (
      <>
        <WorkflowsHeader />
        <WorkflowsTableSkeleton />
      </>
    );
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <WorkflowsHeader />
      {workflows.length === 0 && hasSearch ? (
        <p className="p-8 text-center text-light-gray">{EMPTY_FILTER_MESSAGE}</p>
      ) : (
        <WorkflowsTable data={workflows} />
      )}
      <Outlet />
    </>
  );
}

export function WorkflowsPage() {
  return (
    <WorkflowsProvider>
      <main className="flex flex-col flex-1 h-full overflow-hidden">
        <WorkflowsPageContent />
      </main>
    </WorkflowsProvider>
  );
}
