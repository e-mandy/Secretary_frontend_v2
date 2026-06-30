import { axiosPrivateInstance } from "@/api/axiosInstance";
import type { DefenseReportType } from "../schemas/defense_report.schema";

export const getAll = async () => {
  const result = await axiosPrivateInstance.get("/secretary/defense-reports");
  return result.data.data;
};

export const create = async (defenseReport: DefenseReportType) => {
  const formData = new FormData();

  // We add text data.
  formData.append("owner", defenseReport.owner);
  formData.append("note", defenseReport.note.toString());
  formData.append("theme", defenseReport.theme);

  formData.append("file", defenseReport.file);

  formData.append("defense_date", defenseReport.defense_date);
  formData.append("filiere", defenseReport.filiere);
  formData.append("option", defenseReport.option);

  const result = await axiosPrivateInstance.post(
    "/secretary/defense-report/create",
    formData,
  );

  return result.data;
};
