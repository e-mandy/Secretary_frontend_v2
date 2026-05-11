import { axiosPrivateInstance } from "../../../api/axiosInstance";
import type { ProfessorType } from "../schemas/professor.schema";

const create = async (professor: ProfessorType) => {
  const formData = new FormData();

  // We add text data.
  formData.append("lastname", professor.lastname);
  formData.append("firstname", professor.firstname);
  formData.append("email", professor.email);

  // We add matters.
  professor.matters.forEach((matter, index) => {
    formData.append(`matters[${index}]`, parseInt(matter.id).toString());
  });

  // Then we add the documents.
  if (professor.documents) {
    professor.documents?.forEach((document) => {
      formData.append("documents[]", document.file);
    });
  }
  const response = await axiosPrivateInstance.post(
    "/secretary/professor/create",
    formData,
  );
  return response.data;
};

export default create;
