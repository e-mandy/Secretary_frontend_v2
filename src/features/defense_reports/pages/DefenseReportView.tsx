import PDFViewer from "@/components/PDFViewer";
import { useDefense } from "../api/useDefense";
import { useParams } from "react-router-dom";

const DefenseReportView = () => {
  const { defense_id } = useParams<{ defense_id: string }>();
  const existingDefenseReport = useDefense(defense_id).getDefenseReport.data;

  console.log(existingDefenseReport);
  return (
    <div>
      <PDFViewer fileUrl={existingDefenseReport?.file_url} />
    </div>
  );
};

export default DefenseReportView;
