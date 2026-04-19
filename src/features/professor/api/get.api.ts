import { axiosPrivateInstance } from "@/api/axiosInstance";

const getProfesseur = async () => {
  const response = await axiosPrivateInstance.get("/secretary/professors");

  return response.data.data;
};

export default getProfesseur;
