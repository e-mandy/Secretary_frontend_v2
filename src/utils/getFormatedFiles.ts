import type { FileType } from "@/features/professor/schemas/professeur_files.schema";
import { getExtension } from "./getMime";

export const getFormatedFiles = (files: Array<File>): FileType[] => {
  const formatedFiles = files.map((file) => {
    return {
      name: file.name,
      file: file,
      extension: getExtension(file),
      size: file.size,
    };
  });

  return formatedFiles;
};
