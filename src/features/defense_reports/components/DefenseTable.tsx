import type { DefenseReportProps } from "@/types/defense.types";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

const columnHelper = createColumnHelper<DefenseReportProps>();

const columns = [
  columnHelper.accessor("owner", {
    header: "Étudiant",
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("theme", {
    header: "Thème",
    cell: (data) => data.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => (
      <div>
        <button>
          <Edit />
        </button>
        <button>
          <Trash />
        </button>
      </div>
    ),
  }),
];

const DefenseTable = ({ data }: { data: DefenseReportProps[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DefenseTable;
