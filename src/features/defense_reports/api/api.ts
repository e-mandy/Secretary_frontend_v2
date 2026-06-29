import { axiosPrivateInstance } from "@/api/axiosInstance";

export const getAll = async () => {
  const result = await axiosPrivateInstance.get("/secretary/defense-reports");
  return result.data.data;
};
