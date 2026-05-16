import ProfessorDocument from "./ProfessorDocument";

const ProfessorDocuments = () => {
  return (
    <div className="flex-1 px-4 flex flex-col">
      <div className="w-full rounded-lg px-6">
        <h2 className="uppercase text-gray-500 my-2 font-extrabold py-3">
          Documents Récents
        </h2>
        <div className="documents-container grid grid-cols-2 gap-6">
          <ProfessorDocument />
          <ProfessorDocument />
          <ProfessorDocument />
        </div>
      </div>
    </div>
  );
};

export default ProfessorDocuments;
