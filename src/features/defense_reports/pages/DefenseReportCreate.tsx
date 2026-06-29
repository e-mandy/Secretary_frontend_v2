import { CircleAlert } from "lucide-react";

const DefenseReportCreate = () => {
  return (
    <div>
      <h1>Ajout d'un PV de Soutenance</h1>
      <form encType="multipart/form-data" className="flex">
        <div className="flex-1">
          <h2>Informations de l'étudiant</h2>
          <div className="flex">
            <div className="my-3 flex-1">
              <label htmlFor="owner" className="font-semibold">
                Nom de l'étudiant
              </label>
              <div className="input-style border-none bg-gray-200">
                <input
                  className="outline-none flex-1 py-3 pl-2"
                  type="text"
                  name="owner"
                  id="owner"
                  placeholder="e.g. ADANOUNON Georges"
                />
              </div>
            </div>
            <div className="my-3 flex-1">
              <label htmlFor="note" className="font-semibold">
                Note de l'étudiant
              </label>
              <div className="input-style border-none bg-gray-200">
                <input
                  className="outline-none flex-1 py-3 pl-2"
                  type="number"
                  name="note"
                  min="10"
                  max="20"
                  id="note"
                  placeholder="e.g. 17"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-10">
          <div>
            <h2>PV de soutenance (DOCUMENT)</h2>
            <div className="flex flex-col items-center md:max-w-32">
              <CircleAlert />
              <p className="bg-red-300">
                Téléversez le fichier PDF de l'étudiant. Respectez le format{" "}
                <span>PDF</span> et ne n'excédez pas les <span>4 Mo</span>.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DefenseReportCreate;
