import type { TableColumn } from "./types";

export const TABLE_COLUMNS: TableColumn[] = [
    { name: "type", title: "Type", span: 1 },
    { name: "name", title: "Name", span: 6 },
    { name: "tags", title: "Tags", span: 2 },
    { name: "lastUpdated", title: "Last Updated", span: 2 },
];

export const SKELETON_ROW_COUNT = 8;
export const SEARCH_DEBOUNCE_MS = 300;
export const EMPTY_FILTER_MESSAGE = "No matching items for the current filters.";

export const TAG_COLORS = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F39C12",
];

export const DEFAULT_TAG_COLOR = TAG_COLORS[1];

