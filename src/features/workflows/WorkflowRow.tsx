import type { Workflow } from "./types";
import { getTimeAgo } from "../../lib/date";
import { TagChip } from "./TagChip";
import { RowActions } from "./RowActions";

interface WorkflowRowProps {
  workflow: Workflow;
}

export function WorkflowRow({ workflow }: WorkflowRowProps) {
  const timeAgo = getTimeAgo(workflow.lastUpdated);

  return (
    <div className="grid grid-cols-12 items-center p-4">
      <div className="col-span-1 text-light-gray capitalize">
        {workflow.type}
      </div>
      <div className="col-span-6 font-medium">{workflow.name}</div>
      <div className="col-span-2">
        <TagChip tags={workflow.tags} workflowId={workflow.id} />
      </div>
      <div className="col-span-2 text-light-gray">{timeAgo}</div>
      <div className="col-span-1 flex justify-end">
        <RowActions workflowId={workflow.id} />
      </div>
    </div>
  );
}
