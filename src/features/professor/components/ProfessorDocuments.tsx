import { useQuery } from "@tanstack/react-query";
import ProfessorDocument, {
  type ProfessorDocumentType,
} from "./ProfessorDocument";
import { useParams } from "react-router-dom";
import show from "../api/show.api";

const ProfessorDocuments = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery({
    queryKey: ["professor"],
    queryFn: () => {
      if (!id) throw new Error("Id du professeur manquant");
      return show(id);
    },
    enabled: !!id,
  });
  console.log(data);
  return (
    <div className="flex-1 px-4 flex flex-col">
      <div className="w-full rounded-lg px-6">
        <h2 className="uppercase text-gray-500 my-2 font-extrabold py-3">
          Documents Récents
        </h2>
        <div className="documents-container grid grid-cols-2 gap-6">
          {data?.documents?.map(
            (document: ProfessorDocumentType, index: number) => (
              <ProfessorDocument {...document} key={index} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessorDocuments;
