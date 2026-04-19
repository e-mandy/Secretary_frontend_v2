import { axiosPrivateInstance } from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getMatter = async () => {
  const response = await axiosPrivateInstance.get("/matters");

  return response.data.data;
};

export const useMatter = () => {
  const get = useQuery({
    queryKey: ["matters"],
    queryFn: getMatter,
  });

  return { get };
};
