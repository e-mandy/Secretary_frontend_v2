import { useQuery } from "@tanstack/react-query";
import { getAll } from "./api";

export const useDefense = () => {
  const fetchAllDefense = useQuery({
    queryKey: ["defense_reports"],
    queryFn: getAll,
  });

  return { fetchAllDefense };
};
