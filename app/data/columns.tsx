import { ColumnConfig } from "react-shadcn-datagrid";
import { User } from "./types";

export const columns: ColumnConfig<User>[] = [
  {
    header: "Name",
    id: "name",
    cell: (row) => <div>{row.name}</div>,
    label: "Name",
    type: "text",
    isResizable: true,
    isDraggable: true,
  },
  {
    header: "Email",
    id: "email",
    cell: (row) => <div>{row.email}</div>,
    label: "Email",
    type: "text",
    isResizable: true,
    isDraggable: true,
  },
];
