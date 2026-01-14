import { useState, useEffect, useRef } from "react";
import AirOps from "@airops/airops-js";
import { ExecuteResponse } from "@airops/airops-js/dist/ts/types";
import { AIROPS_APP_ID } from "../../../lib/constants";
import type { Workflow } from "../types";

export function useWorkflows() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const airopsRef = useRef(new AirOps());
  const executionRef = useRef<ExecuteResponse | undefined>(undefined);

  useEffect(() => {
    let isCancelled = false;

    async function fetchWorkflows() {
      setLoading(true);
      setError(null);

      try {
        const execution = await airopsRef.current.apps.execute({
          appId: AIROPS_APP_ID,
          payload: {
            inputs: {
              count: 36,
            },
          },
        });

        executionRef.current = execution;

        const result = await execution.result();

        if (isCancelled) return;

        const output = result.output as { data: string | Workflow[] };

        const data =
          typeof output.data === "string"
            ? JSON.parse(output.data)
            : output.data;

        setWorkflows(data);
      } catch (error) {
        if (isCancelled) return;

        const normalizedError =
          error instanceof Error ? error : new Error(String(error));
        setError(normalizedError);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchWorkflows();

    return () => {
      isCancelled = true;
      executionRef.current?.cancel();
    };
  }, []);

  return { workflows, loading, error };
}
