import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { create, getProfesseur } from "./index";
import type { AxiosError } from "axios";
import { useNotify } from "@/hooks/useNotify";

export const useProfessor = () => {
  const [error, setError] = useState<null | Error>(null);
  const { notify } = useNotify();

  const getAllProfessors = useQuery({
    queryKey: ["professors"],
    queryFn: getProfesseur,
  });

  const createProfMutation = useMutation({
    mutationFn: create,
    onSuccess: (data) => {
      console.log(data);
      notify("Professeur crée avec succès", "success");
    },
    onError: (error: AxiosError) => {
      setError(error);
      const data = error.response?.data as { message: string };
      notify(data.message as string, "error");
    },
  });

  return { getAllProfessors, createProfMutation, error };
};
