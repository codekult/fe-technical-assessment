import type { Workflow } from "./types";
import { TABLE_COLUMNS } from "./constants";
import { WorkflowRow } from "./WorkflowRow";

interface WorkflowsTableProps {
  data: Workflow[];
}

export function WorkflowsTable({ data }: WorkflowsTableProps) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto px-5">
      <div className="sticky top-0 z-10 grid grid-cols-12 items-center bg-white px-4 p-5 font-bold border-b border-black-alpha-8">
        {TABLE_COLUMNS.map((col) => {
          const className = `col-span-${col.span}`;
          return (
            <div key={col.name} className={className}>
              {col.title}
            </div>
          );
        })}
        <div className="col-span-1 text-right">Actions</div>
      </div>

      <div className="divide-y divide-black-alpha-8">
        {data.map((workflow) => (
          <WorkflowRow key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </div>
  );
}
