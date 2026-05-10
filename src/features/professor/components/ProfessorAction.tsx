import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ProfessorType } from "../schemas/professor.schema";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { useProfessor } from "../api/useProfessor";
import Spinner from "@/components/Spinner";
import { useNavigate } from "react-router-dom";

const ProfessorAction = ({ row }: { row: ProfessorType & { id: string } }) => {
  const {
    deleteProfMutation: { mutate, isPending },
  } = useProfessor();

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
        <DropdownMenuItem
          className="text-red-500"
          onClick={() => mutate(row.id)}
        >
          <Trash />
          Supprimer{" "}
          {isPending && (
            <Spinner color="red" width="2" height="2" visible={true} />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfessorAction;
