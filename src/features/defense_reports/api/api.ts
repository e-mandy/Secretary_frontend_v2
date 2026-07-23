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

export const deleteDefense = async (defenseReportId: string) => {
  const result = await axiosPrivateInstance.delete(
    `/secretary/defense-report/${defenseReportId}`,
  );
  return result.data;
};

export const fetchDefenseReport = async (defenseReportId: string) => {
  const result = await axiosPrivateInstance.get(
    `/secretary/defense-report/${defenseReportId}`,
  );

  return result.data.data;
};

export const editDefenseReport = async ({
  id,
  data,
}: {
  id: string;
  data: DefenseReportType;
}) => {
  const formData = new FormData();

  // We add text data.
  formData.append("owner", data.owner);
  formData.append("note", data.note.toString());
  formData.append("theme", data.theme);

  formData.append("defense_date", data.defense_date);
  formData.append("filiere", data.filiere);
  formData.append("option", data.option);

  const result = await axiosPrivateInstance.put(
    `/secretary/defense-report/${id}`,
    formData,
  );

  return result.data.data;
};

export const getPdfUrl = async (id: string) => {
  const result = await axiosPrivateInstance.get(
    `/secretary/defense/${id}/preview`,
    {
      responseType: "arraybuffer",
    },
  );

  return result.data;
};
