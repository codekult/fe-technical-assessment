import { CSSProperties } from "react";

export type Tag = { name: string; color: CSSProperties["backgroundColor"] };

export type WorkflowType = "workflow" | "agent";

export type Workflow = {
  id: number;
  type: WorkflowType;
  name: string;
  lastUpdated: number;
  tags: Tag[];
};

export type TableColumn = {
  name: string;
  title: string;
  span: number;
};

export type SortField = "name" | "lastUpdated" | "type";
export type SortDirection = "asc" | "desc";
