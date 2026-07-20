import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Trash, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { DefenseReportProps } from "@/types/defense.types";
import { useDefense } from "../api/useDefense";
import { useDownload } from "@/features/professor/api/useDownload";

const DefenseAction = ({
  row,
}: {
  row: DefenseReportProps & { id: string };
}) => {
  const {
    deleteDefenseReport: { mutate },
  } = useDefense();
  const navigate = useNavigate();
  const { download } = useDownload();

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
          onClick={() => download(`/defense-reports/${row.id}/download`)}
          className="flex"
        >
          <Upload /> Télécharger PV
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigate(`/secretary/defense/${row.id}/edit`)}
        >
          <Edit />
          Modifier
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-500"
          onClick={() => mutate(row.id)}
        >
          <Trash />
          Supprimer{" "}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DefenseAction;
