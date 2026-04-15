import { DOC_ICONS } from "@/constants/documents.constant";

export const getCorrectIcon = (extension: string) => {
  return DOC_ICONS.find((obj) => extension.includes(obj.type));
};
