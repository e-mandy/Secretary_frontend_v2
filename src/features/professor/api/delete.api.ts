import { axiosPrivateInstance } from "@/api/axiosInstance";

const deleteProf = async (professorId: string) => {
  const response = await axiosPrivateInstance.delete(
    `/secretary/professor/${professorId}`,
  );

  return response.data;
};

export default deleteProf;
