import { useContext } from "react";
import { WorkflowsContext } from "./WorkflowsContext";

export function useWorkflowsContext() {
    const context = useContext(WorkflowsContext);

    if (!context) {
        throw new Error("useWorkflowsContext must be inside WorkflowsProvider");
    }

    return context;
}
