import axios from "axios";

const getProfesseur = async () => {
  const response = await axios.get("/secretary/professors");

  return response.data;
};

export default getProfesseur;
