import { useNavigate, useParams } from "react-router";
import { Modal } from "../../components/ui/Modal";
import { Button } from "../../components/ui/Button";
import { useWorkflowsContext } from "./context";

export function DeleteConfirmModal() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { getById, remove } = useWorkflowsContext();

    const workflow = getById(Number(id));
    if (!workflow) return null;

    const workflowId = workflow.id;

    function handleConfirm() {
        remove(workflowId);
        navigate("/");
    }

    function handleCancel() {
        navigate("/");
    }

    return (
        <Modal title="Delete this workflow permanently?">
            <p className="text-dark-gray mb-4">
                Are you sure you want to delete "{workflow.name}"?
            </p>
            <div className="flex justify-end gap-2">
                <Button onClick={handleCancel}>Cancel</Button>
                <Button variant="primary" onClick={handleConfirm}>
                    OK
                </Button>
            </div>
        </Modal>
    );
}
