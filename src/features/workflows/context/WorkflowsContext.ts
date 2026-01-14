import { createContext } from "react";
import type { Workflow } from "../types";

export interface WorkflowsContextValue {
    workflows: Workflow[];
    loading: boolean;
    error: Error | null;
    getById: (id: number) => Workflow | undefined;
    create: (data: Omit<Workflow, "id">) => void;
    update: (id: number, data: Partial<Workflow>) => void;
    remove: (id: number) => void;
}

export const WorkflowsContext = createContext<WorkflowsContextValue | null>(
    null
);
