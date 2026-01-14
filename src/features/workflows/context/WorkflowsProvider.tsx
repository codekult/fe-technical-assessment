import { useState, useEffect, type ReactNode } from "react";
import { useWorkflows } from "../hooks/useWorkflows";
import { WorkflowsContext, type WorkflowsContextValue } from "./WorkflowsContext";
import type { Workflow } from "../types";

export function WorkflowsProvider({ children }: { children: ReactNode }) {
  const { workflows: apiData, loading, error } = useWorkflows();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);

  useEffect(() => {
    setWorkflows(apiData);
  }, [apiData]);

  function getById(id: number) {
    return workflows.find((workflow) => workflow.id === id);
  }

  function create(data: Omit<Workflow, "id">) {
    setWorkflows((prev) => [...prev, { ...data, id: Date.now() }]);
  }

  function update(id: number, data: Partial<Workflow>) {
    setWorkflows((prev) =>
      prev.map((workflow) =>
        workflow.id === id ? { ...workflow, ...data } : workflow
      )
    );
  }

  function remove(id: number) {
    setWorkflows((prev) => prev.filter((workflow) => workflow.id !== id));
  }

  const value: WorkflowsContextValue = {
    workflows,
    loading,
    error,
    getById,
    create,
    update,
    remove,
  };

  return (
    <WorkflowsContext.Provider value={value}>
      {children}
    </WorkflowsContext.Provider>
  );
}
