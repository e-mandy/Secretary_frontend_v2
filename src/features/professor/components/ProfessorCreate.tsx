import { Mail, User } from "lucide-react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  professorSchema,
  type ProfessorType,
} from "../schemas/professor.schema";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { getFormatedFiles } from "@/utils/getFormatedFiles";
import type { FileType } from "../schemas/professeur_files.schema";
import UploadedFileView from "@/components/UploadedFileView";
import { useMatter } from "@/features/matter/api/useMatter";
import { MultiSelect } from "@/components/multi-select";
import { useProfessor } from "../api/useProfessor";
import { useNavigate } from "react-router-dom";
import { axiosPrivateInstance } from "@/api/axiosInstance";

export type OptionsType = {
  value: string;
  label: string;
};

const ProfessorCreate = () => {
  const fileInput = useRef<null | HTMLInputElement>(null);
  const [formatedFiles, setFormatedFiles] = useState<FileType[] | []>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    reset,
  } = useForm<ProfessorType>({
    resolver: zodResolver(professorSchema),
    defaultValues: {
      matters: [],
    },
  });

  const {
    get: { data },
  } = useMatter();

  const {
    createProfMutation: { isPending, mutate: createProf },
  } = useProfessor();

  const navigate = useNavigate();

  const options =
    data?.map((value) => ({
      value: value.id.toString(),
      label: value.name,
    })) ?? [];

  const handleInputClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newFiles = [...formatedFiles, ...getFormatedFiles(files)];
      setFormatedFiles(newFiles);

      setValue("documents", newFiles, { shouldValidate: true });

      if (e.target.value) e.target.value = "";
    }
  };

  // THis function is going to upload each documents file in including file upload progress.
  const handleUploadFile = (profDocuments: FileType[]) => {
    if (profDocuments == undefined) return;
    const uploadedFilesPromise = profDocuments.map(async (file) => {
      const result = await axiosPrivateInstance.post(
        "/secretary/document/create",
        { document: file.file },
        {
          onUploadProgress: (e) => {
            const progress = Math.round((e.loaded * 100) / (e.total ?? 1));
            setFormatedFiles((prev) =>
              prev.map((f) =>
                f.id === file.id
                  ? {
                      ...f,
                      progress: progress,
                    }
                  : f,
              ),
            );
          },
        },
      );
      return result.data;
    });

    return Promise.all(uploadedFilesPromise);
  };

  const onSubmit: SubmitHandler<ProfessorType> = async (profFormData) => {
    await createProf(profFormData);
    if (profFormData?.documents && profFormData?.documents.length > 0)
      await handleUploadFile(profFormData.documents);
    reset();
    navigate("/secretary/professors");
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="mb-14">
        <h1 className="font-extrabold text-3xl mb-2">
          Création d'un professeur
        </h1>
        <p className="text-gray-500 font-semibold">
          Un formulaire complet pour l'ajout d'un nouveau professeur.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex mb-14">
          <div className="w-2/5">
            <h3 className="font-bold text-xl">Informations personnelles</h3>
            <p className="text-gray-500">
              Identification basique et détails de communication.
            </p>
          </div>
          <div className="w-[55%] bg-white shadow-sm p-6 rounded-xl mx-auto">
            <div className="flex gap-10">
              <div className="my-3 flex-1">
                <label htmlFor="lastname" className="font-semibold">
                  Nom de famille
                </label>
                <div className="input-style border-none bg-gray-200">
                  <User />
                  <input
                    {...register("lastname")}
                    className="outline-none flex-1 py-3 pl-2"
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="e.g. AGASSOUNON"
                  />
                </div>
                {errors.lastname?.message && (
                  <span className="error-message">
                    {errors?.lastname?.message}
                  </span>
                )}
              </div>
              <div className="my-3 flex-1">
                <label htmlFor="firstname" className="font-semibold">
                  Prénom
                </label>
                <div className="input-style border-none bg-gray-200">
                  <User />
                  <input
                    {...register("firstname")}
                    className="outline-none flex-1 py-3 pl-2"
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="e.g. Patrick"
                  />
                </div>
                {errors.firstname?.message && (
                  <span className="error-message">
                    {errors.firstname?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="my-3 flex-1">
              <label htmlFor="email" className="font-semibold">
                Adresse Email
              </label>
              <div className="input-style border-none bg-gray-200">
                <Mail />
                <input
                  {...register("email")}
                  className="outline-none flex-1 py-3 pl-2"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="e.g. agapa@gmail.com"
                />
              </div>
              {errors.email?.message && (
                <span className="error-message">{errors.email?.message}</span>
              )}
            </div>
            <div className="my-3 flex-1">
              <label htmlFor="email" className="font-semibold">
                Matières enseignées
              </label>
              <Controller
                control={control}
                name="matters"
                render={({ field }) => (
                  <MultiSelect
                    className="py-4"
                    options={options}
                    value={field.value.map((option) => option.id)}
                    onValueChange={(values) =>
                      field.onChange(
                        values
                          .map((v) => {
                            console.log(typeof v);
                            const option = data?.find(
                              (matter) => matter.id == v,
                            );
                            console.log(option);
                            return {
                              id: option?.id.toString(),
                              name: option?.name.toString(),
                            };
                          })
                          .filter(Boolean),
                      )
                    }
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/5">
            <h3 className="font-bold text-xl">Documents professionnels</h3>
            <p className="text-gray-500">
              Définition des attributs professionnels du professeur.
            </p>
          </div>
          <div className="w-[55%] mx-auto">
            <div className="bg-white shadow-sm p-6 rounded-xl">
              <h5 className="font-bold">
                Enregistrer des documents propres au professeur (Optionnel)
              </h5>
              <div
                onClick={handleInputClick}
                className="border-dashed border-3 border-gray-200 my-4 text-center py-4 rounded-lg cursor-pointer"
              >
                <input
                  name="documents"
                  type="file"
                  onChange={handleFileInputChange}
                  className="hidden"
                  ref={fileInput}
                  multiple
                />
                <p>Téléversez les documents du professeur ici.</p>
                {errors.documents?.message && (
                  <span className="error-message">
                    {errors.documents?.message}
                  </span>
                )}
              </div>
              <div>
                {formatedFiles &&
                  formatedFiles.map((f) => (
                    <UploadedFileView {...f} key={f.id} />
                  ))}
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary w-full my-4 py-4 text-white rounded-lg cursor-pointer"
            >
              {isPending ? "Création du professeur" : "Valider"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfessorCreate;
