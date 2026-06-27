import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { DefenseReportProps } from "@/types/defense.types";

const DefenseAction = ({
  row,
}: {
  row: DefenseReportProps & { id: string };
}) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        style={{
          width: "10rem",
          gap: "1rem",
        }}
      >
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigate(`/secretary/professor/${row.id}`)}
        >
          <Eye /> Voir Professeur
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit />
          Modifier
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">
          <Trash />
          Supprimer{" "}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DefenseAction;
