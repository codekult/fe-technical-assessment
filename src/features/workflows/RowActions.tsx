import { Link } from "react-router";
import { ActionButton } from "../../components/ui/ActionButton";
import { EditIcon, DeleteIcon } from "../../icons/icons";

interface RowActionsProps {
  workflowId: number;
}

export function RowActions({ workflowId }: RowActionsProps) {
  return (
    <div className="flex gap-2">
      <Link to={`/workflows/${workflowId}/edit`}>
        <ActionButton>
          <EditIcon size={12} />
        </ActionButton>
      </Link>
      <Link to={`/workflows/${workflowId}/delete`}>
        <ActionButton>
          <DeleteIcon size={12} />
        </ActionButton>
      </Link>
    </div>
  );
}
