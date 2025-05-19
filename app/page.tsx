"use client";

import { DataGrid } from "react-shadcn-datagrid";
import { columns } from "./data/columns";
import { data } from "./data/rows";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-4 overflow-hidden">
      <section className="flex items-center w-full gap-4 flex-col mt-12 justify-center">
        <h1 className="text-4xl font-bold">Data Grid Library Example: </h1>
        <h2 className="text-md max-w-md text-center text-gray-500">
          This example shows how to use the Shadcn UI Data Grid component.
          Here&apos;s a sample data grid with employee rows.
        </h2>
        <Link
          href="https://github.com/unnatibamania/data-grid-example"
          className="text-sm text-blue-500"
        >
          View the code on GitHub
        </Link>
      </section>
      <div className="max-w-screen-2xl h-full flex  justify-center mx-auto">
        <DataGrid columns={columns} rows={data} />
      </div>
    </div>
  );
}
