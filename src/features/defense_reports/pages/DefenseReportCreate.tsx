import { CircleAlert, FilePlusCorner, Save, Upload } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  defenseReportSchema,
  type DefenseReportType,
} from "../schemas/defense_report.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState, type ChangeEvent } from "react";
import png from "../../../assets/icons/pdf.png";
import { getFormatedFileSize } from "@/utils/getFormatedFileSize";
import { useDefense } from "../api/useDefense";
import { useNavigate } from "react-router-dom";

const DefenseReportCreate = () => {
  const navigate = useNavigate();
  const defenseReportInput = useRef<null | HTMLInputElement>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<DefenseReportType>({
    resolver: zodResolver(defenseReportSchema),
  });

  const [defenseReportFile, setDefenseReportFile] = useState<File | null>(null);

  const {
    createDefenseReport: { mutate, isSuccess },
  } = useDefense();

  const onSubmit: SubmitHandler<DefenseReportType> = async (
    defenseReportData,
  ) => {
    mutate(defenseReportData);
    if (isSuccess) {
      reset();
      navigate("/secretary/defense");
    }
  };

  const handleFileClick = () => {
    if (defenseReportInput.current) {
      defenseReportInput.current.click();
    }
  };

  const handleDefenseReportFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setValue("file", e.target.files[0], { shouldValidate: true });
      setDefenseReportFile(e.target.files[0]);
    } else {
      setDefenseReportFile(null);
    }
  };

  return (
    <div>
      <h1 className="font-extrabold text-3xl mb-2">
        Ajout d'un PV de Soutenance
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex md:gap-10">
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
                      {...register("owner")}
                      className="outline-none flex-1 py-3 pl-2"
                      type="text"
                      name="owner"
                      id="owner"
                      placeholder="e.g. ADANOUNON Georges"
                    />
                  </div>
                  {errors.owner?.message && (
                    <span className="error-message">
                      {errors?.owner?.message}
                    </span>
                  )}
                </div>
                <div className="my-3 flex-1">
                  <label htmlFor="note" className="font-semibold">
                    Note de l'étudiant
                  </label>
                  <div className="input-style border-none bg-gray-200">
                    <input
                      {...register("note", { valueAsNumber: true })}
                      className="outline-none flex-1 py-3 pl-2"
                      type="number"
                      name="note"
                      min="10"
                      max="20"
                      id="note"
                      placeholder="e.g. 17"
                    />
                  </div>
                  {errors.note?.message && (
                    <span className="error-message">
                      {errors?.note?.message}
                    </span>
                  )}
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
                    {...register("theme")}
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
                    {...register("filiere")}
                    className="outline-none flex-1 py-3 pl-2"
                    name="filiere"
                    id="filiere"
                  >
                    <option disabled>Sélectionnez une filière</option>
                    <option value="Master">Master</option>
                    <option value="Licence">Licence</option>
                  </select>
                  {errors.filiere?.message && (
                    <span className="error-message">
                      {errors?.filiere?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="my-3 flex-1">
                <label htmlFor="theme" className="font-semibold">
                  Option
                </label>
                <div className="input-style border-none bg-gray-200">
                  <select
                    {...register("option")}
                    className="outline-none flex-1 py-3 pl-2"
                    name="option"
                    id="option"
                  >
                    <option disabled selected>
                      Sélectionnez une option
                    </option>
                    <option value="AL">Architecture des Logiciels</option>
                    <option value="SI">Sécurité Informatique</option>
                    <option value="SRC">Système, Réseaux et Cloud</option>
                    <option value="IA">Intélligence Artificielle</option>
                  </select>
                  {errors.option?.message && (
                    <span className="error-message">
                      {errors?.option?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="my-3 flex-1">
                <label htmlFor="defense_date" className="font-semibold">
                  Date de soutenance
                </label>
                <div className="input-style border-none bg-gray-200">
                  <input
                    {...register("defense_date")}
                    className="outline-none flex-1 py-3 pl-2"
                    type="date"
                    name="defense_date"
                    id="defense_date"
                  />
                </div>
                {errors.defense_date?.message && (
                  <span className="error-message">
                    {errors?.defense_date?.message}
                  </span>
                )}
              </div>
            </div>
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
            {!defenseReportFile ? (
              <div className="border border-[#c41c2d] rounded px-2 py-4">
                <h4 className="font-semibold">Document PDF</h4>
                <p className="text-xs">Max, 4 Mo</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="border p-1 items-center justify-center w-fit rounded">
                    <FilePlusCorner />
                  </div>
                  <div
                    onClick={handleFileClick}
                    className="border flex items-center gap-1 w-fit py-1 px-1 rounded cursor-pointer"
                  >
                    <input
                      {...register("file")}
                      type="file"
                      name="file"
                      onChange={handleDefenseReportFileChange}
                      className="hidden"
                      ref={defenseReportInput}
                    />
                    <Upload />
                    <p>Ajouter un fichier</p>
                  </div>
                </div>
                {errors.file?.message && (
                  <span className="error-message">{errors?.file?.message}</span>
                )}
              </div>
            ) : (
              <div className="flex items-center py-2 px-4 border rounded gap-2">
                <img src={png} className="md:w-10 md:h-10" />
                <div>
                  <p className="text-nowrap text-ellipsis overflow-hidden">
                    {defenseReportFile.name}
                  </p>
                  <p>{getFormatedFileSize(defenseReportFile.size)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-white rounded-lg cursor-pointer px-3 py-2 flex gap-2 items-center"
        >
          <Save />
          Enregistrer le PV de Soutenance
        </button>
      </form>
    </div>
  );
};

export default DefenseReportCreate;
