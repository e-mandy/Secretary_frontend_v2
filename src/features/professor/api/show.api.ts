import { axiosPrivateInstance } from "@/api/axiosInstance";

const show = async (profId: string) => {
  const response = await axiosPrivateInstance.get(
    `/secretary/professor/${profId}`,
  );

  return response.data;
};

export default show;
