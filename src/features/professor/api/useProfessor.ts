import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { create, getProfesseur } from "./index";

export const useProfessor = () => {
  const [error, setError] = useState<null | Error>(null);

  const getAllProfessors = useQuery({
    queryKey: ["professors"],
    queryFn: getProfesseur,
  });

  const createProfMutation = useMutation({
    mutationFn: create,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      setError(data);
    },
  });

  return { getAllProfessors, createProfMutation, error };
};
