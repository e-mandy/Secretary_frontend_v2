"use-client";

import { type ColumnDef } from "@tanstack/react-table";
import {} from "../../../components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import type { DefenseReportProps } from "@/types/defense.types";
import DefenseAction from "./DefenseAction";

export const columns: ColumnDef<DefenseReportProps & { id: string }>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "owner",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold text-left"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Étudiant
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "theme",
    header: "Thème",
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <DefenseAction row={row.original} />
      </div>
    ),
  },
];
