import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { create, getAll } from "./api";
import { useNotify } from "@/hooks/useNotify";
import type { AxiosError } from "axios";

export const useDefense = () => {
  const { notify } = useNotify();
  const queryClient = useQueryClient();

  const fetchAllDefense = useQuery({
    queryKey: ["defense_reports"],
    queryFn: getAll,
  });

  const createDefenseReport = useMutation({
    mutationFn: create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["professors"] });
      const message = data.message as string;
      notify(message, "success");
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };
      notify(data.message as string, "error");
    },
  });

  return { fetchAllDefense, createDefenseReport };
};
