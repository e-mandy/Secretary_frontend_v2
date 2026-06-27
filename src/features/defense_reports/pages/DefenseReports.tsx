import { GlobalErrorBoundary } from "@/components/GlobalErrorBoundary";
import DefenseTable from "../components/DefenseTable";
import { DEFENSE_DATA } from "@/constants/defense.constants";

const DefenseReports = () => {
  return (
    <div className="w-full h-full">
      <div className="md:flex md:justify-between w-full">
        <div>
          <h1 className="text-3xl mb-2 font-bold">PV de Soutenances</h1>
          <p className="">
            Ayez une vue d'ensemble de tous les PV de Soutenance des étudiants.
          </p>
        </div>
        <div>
          <button className="px-4 py-2 bg-primary text-white rounded-xl text-lg cursor-pointer">
            Ajouter un PV de Soutenance
          </button>
        </div>
      </div>
      <div className="bg-blue-300 py-10">
        <GlobalErrorBoundary>
          <DefenseTable data={DEFENSE_DATA} />
        </GlobalErrorBoundary>
      </div>
    </div>
  );
};

export default DefenseReports;
