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
    header: () => <div className="text-left pl-4">Étudiant</div>,
    cell: (data) => <div className="pl-4">{data.getValue()}</div>,
  }),
  columnHelper.accessor("theme", {
    header: () => <div className="text-left">Thème</div>,
    cell: (data) => data.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex justify-center items-center">
        <button className="p-2 text-white bg-black rounded">
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
    <table className="w-full border-collapse">
      <thead className="bg-gray-100 px-2">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="py-2">
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
              <td key={cell.id} className="py-2">
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
