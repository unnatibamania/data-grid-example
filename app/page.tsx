"use client";

import { DataGrid } from "react-shadcn-datagrid";
import { columns } from "./data/columns";
import { data } from "./data/rows";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "./data/types";

export default function Home() {
  const [rows, setRows] = useState(data);

  useEffect(() => {
    setRows(data);
  }, []);

  const handleCellChange = (
    rowIndexInput: string | number,
    columnId: string,
    newValue: unknown
  ) => {
    const parsedRowIndex =
      typeof rowIndexInput === "string"
        ? parseInt(rowIndexInput, 10)
        : rowIndexInput;

    if (isNaN(parsedRowIndex)) {
      console.error("Invalid rowIndex received:", rowIndexInput);
      return;
    }

    setRows((prevRows) =>
      prevRows.map((row, index) => {
        if (index === parsedRowIndex) {
          const updatedRow = { ...row } as User;
          const key = columnId as keyof User;

          switch (key) {
            case "name":
            case "email":
            case "phone":
            case "department":
            case "joiningDate":
              if (typeof newValue === "string") {
                updatedRow[key] = newValue;
              } else if (newValue === null || newValue === undefined) {
                updatedRow[key] = "";
              }
              break;
            case "age":
            case "previousExperience":
              if (typeof newValue === "number") {
                updatedRow[key] = newValue;
              } else if (typeof newValue === "string") {
                const numValue = parseInt(newValue, 10);
                updatedRow[key] = isNaN(numValue) ? row[key] : numValue;
              } else if (newValue === null) {
                updatedRow[key] = row[key];
              }
              break;
            case "agreedToTerms":
            case "canWorkOnWeekends":
              if (typeof newValue === "boolean") {
                updatedRow[key] = newValue;
              } else if (typeof newValue === "string") {
                updatedRow[key] = newValue.toLowerCase() === "true";
              }
              break;
            case "skills":
              if (
                Array.isArray(newValue) &&
                newValue.every((item) => typeof item === "string")
              ) {
                updatedRow[key] = newValue as string[];
              } else if (typeof newValue === "string") {
                updatedRow[key] = newValue
                  .split(",")
                  .map((s) => s.trim())
                  .filter((s) => s);
              } else if (newValue === null || newValue === undefined) {
                updatedRow[key] = [];
              }
              break;
            case "id":
              if (typeof newValue === "number") {
                updatedRow.id = newValue;
              } else if (typeof newValue === "string") {
                const idNum = parseInt(newValue, 10);
                if (!isNaN(idNum)) updatedRow.id = idNum;
              }
              break;
            default:
              break;
          }
          return updatedRow;
        }
        return row;
      })
    );
  };

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
        <DataGrid
          columns={columns}
          rows={rows}
          onCellChange={handleCellChange}
        />
      </div>
    </div>
  );
}
