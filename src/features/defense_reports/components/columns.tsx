import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

const columnHelper = createColumnHelper();

export const columns = [
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
