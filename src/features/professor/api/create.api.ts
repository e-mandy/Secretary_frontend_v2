import { axiosPrivateInstance } from "../../../api/axiosInstance";
import type { ProfessorType } from "../schemas/professor.schema";

const create = async (professor: ProfessorType) => {
  const response = await axiosPrivateInstance.post(
    "secretary/professor/create",
    {
      lastname: professor.lastname,
      firstname: professor.firstname,
      email: professor.email,
      matters: professor.matters,
    },
  );
  return response.data;
};

export default create;
