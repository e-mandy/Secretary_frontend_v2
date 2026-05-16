import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { create, getProfesseur } from "./index";
import type { AxiosError } from "axios";
import { useNotify } from "@/hooks/useNotify";
import deleteProf from "./delete.api";

export const useProfessor = () => {
  const [error, setError] = useState<null | Error>(null);
  const { notify } = useNotify();
  const queryClient = useQueryClient();

  const getAllProfessors = useQuery({
    queryKey: ["professors"],
    queryFn: getProfesseur,
  });

  const createProfMutation = useMutation({
    mutationFn: create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["professors"] });
      const message = data.message as string;
      notify(message, "success");
    },
    onError: (error: AxiosError) => {
      setError(error);
      const data = error.response?.data as { message: string };
      notify(data.message as string, "error");
    },
  });

  const deleteProfMutation = useMutation({
    mutationFn: deleteProf,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["professors"] });
      notify("Professeur supprimé avec succès", "success");
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };
      notify(data.message as string, "error");
    },
  });

  return { getAllProfessors, createProfMutation, deleteProfMutation, error };
};
