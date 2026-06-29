import { CircleAlert, FilePlusCorner, Save, Upload } from "lucide-react";

const DefenseReportCreate = () => {
  return (
    <div>
      <h1 className="font-extrabold text-3xl mb-2">
        Ajout d'un PV de Soutenance
      </h1>
      <form encType="multipart/form-data" className="flex md:gap-10">
        <div className="flex-1">
          <div>
            <h3 className="font-bold text-xl">Informations de l'étudiant</h3>
            <div className="flex gap-6">
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
          <div>
            <div className="my-3 flex-1">
              <label htmlFor="theme" className="font-semibold">
                Thème de mémoire
              </label>
              <div className="input-style border-none bg-gray-200">
                <textarea
                  className="outline-none flex-1 py-3 pl-2"
                  name="theme"
                  rows={3}
                  cols={5}
                  id="theme"
                  placeholder="e.g. Mise en place d'un SOC"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="md:flex gap-6 mb-4">
            <div className="my-3 flex-1">
              <label htmlFor="theme" className="font-semibold">
                Filière
              </label>
              <div className="input-style border-none bg-gray-200">
                <select
                  className="outline-none flex-1 py-3 pl-2"
                  name="filiere"
                  id="filiere"
                >
                  <option disabled>Sélectionnez une filière</option>
                  <option value="Master">Master</option>
                  <option value="Licence">Licence</option>
                </select>
              </div>
            </div>
            <div className="my-3 flex-1">
              <label htmlFor="theme" className="font-semibold">
                Option
              </label>
              <div className="input-style border-none bg-gray-200">
                <select
                  className="outline-none flex-1 py-3 pl-2"
                  name="option"
                  id="option"
                >
                  <option disabled selected>
                    Sélectionnez une option
                  </option>
                  <option value="AL">Architecture des Logiciels</option>
                  <option value="SI">Sécurité Information</option>
                  <option value="SRC">Système, Réseaux et Cloud</option>
                  <option value="IA">Intélligence Artificielle</option>
                </select>
              </div>
            </div>
            <div className="my-3 flex-1">
              <label htmlFor="defense_date" className="font-semibold">
                Date de soutenance
              </label>
              <div className="input-style border-none bg-gray-200">
                <input
                  className="outline-none flex-1 py-3 pl-2"
                  type="datetime-local"
                  name="defense_date"
                  id="defense_date"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-white rounded-lg cursor-pointer px-3 py-2 flex gap-2 items-center"
          >
            <Save />
            Enregistrer le PV de Soutenance
          </button>
        </div>
        <div className="px-10 pt-4 pb-8 border border-gray-300 rounded md:max-w-100 h-fit">
          <h2 className="font-semibold uppercase text-center mb-4">
            PV de soutenance
          </h2>
          <div className="flex flex-col items-center mb-3">
            <CircleAlert />
            <p className="text-justify">
              Téléversez le fichier PDF de l'étudiant. Respectez le format{" "}
              <span className="text-[#c41c2d] font-semibold">PDF</span> et ne
              n'excédez pas les{" "}
              <span className="text-[#c41c2d] font-semibold">4 Mo</span>.
            </p>
          </div>
          <div className="border border-[#c41c2d] rounded px-2 py-4">
            <h4 className="font-semibold">Document PDF</h4>
            <p className="text-xs">Max, 4 Mo</p>
            <div className="flex items-center gap-2 mt-4">
              <div className="border p-1 items-center justify-center w-fit rounded">
                <FilePlusCorner />
              </div>
              <div className="border flex items-center gap-1 w-fit py-1 px-1 rounded cursor-pointer">
                <input type="file" className="hidden" />
                <Upload />
                <p>Ajouter un fichier</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DefenseReportCreate;
