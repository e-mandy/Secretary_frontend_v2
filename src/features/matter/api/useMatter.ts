import { axiosPrivateInstance } from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import type { MatterType } from "../schema/matter.schema";

const getMatter = async () => {
  const response = await axiosPrivateInstance.get("/matters");

  return response.data.data;
};

export const useMatter = () => {
  const get = useQuery<MatterType[]>({
    queryKey: ["matters"],
    queryFn: getMatter,
  });

  return { get };
};
