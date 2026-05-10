"use-client";

import { type ColumnDef } from "@tanstack/react-table";
import type { ProfessorType } from "../schemas/professor.schema";
import {} from "../../../components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import ProfessorAction from "../components/ProfessorAction";

export const columns: ColumnDef<ProfessorType & { id: string }>[] = [
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
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold text-left"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Adresse Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "lastname",
    header: "Nom de famille",
  },
  {
    accessorKey: "firstname",
    header: "Prénom",
  },
  {
    id: "actions",
    cell: ({ row }) => <ProfessorAction row={row.original} />,
  },
];
