"use client";

import { DataGrid } from "react-shadcn-datagrid";
import { columns } from "./data/columns";
import { data } from "./data/rows";
export default function Home() {
  return (
    <div className="">
      <DataGrid columns={columns} rows={data} />
    </div>
  );
}
