import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  create,
  deleteDefense,
  editDefenseReport,
  fetchDefenseReport,
  getAll,
} from "./api";
import { useNotify } from "@/hooks/useNotify";
import type { AxiosError } from "axios";

export const useDefense = (defense_id?: string) => {
  const { notify } = useNotify();
  const queryClient = useQueryClient();

  const fetchAllDefense = useQuery({
    queryKey: ["defense_reports"],
    queryFn: getAll,
  });

  const createDefenseReport = useMutation({
    mutationFn: create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["defense_reports"] });
      const message = data.message as string;
      notify(message, "success");
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };
      notify(data.message as string, "error");
    },
  });

  const deleteDefenseReport = useMutation({
    mutationFn: deleteDefense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["defense_reports"] });
      notify("PV de soutenance supprimé avec succès.", "success");
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };
      notify(data.message as string, "error");
    },
  });

  const getDefenseReport = useQuery({
    queryKey: ["defense_report"],
    queryFn: () => {
      if (!defense_id) return;
      return fetchDefenseReport(defense_id);
    },
    enabled: !!defense_id,
  });

  const updateDefenseReport = useMutation({
    mutationFn: editDefenseReport,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["defense_reports"] });
      const message = data.message as string;
      notify(message, "success");
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };
      notify(data.message as string, "error");
    },
  });

  return {
    fetchAllDefense,
    createDefenseReport,
    deleteDefenseReport,
    getDefenseReport,
    updateDefenseReport,
  };
};
