import { useDefense } from "@/features/defense_reports/api/useDefense";
import { useState } from "react";
import { Document, Page } from "react-pdf";

const PDFViewer = ({ fileUrl }: { fileUrl: string }) => {
  const defense_pdf_url = useDefense().fetchPdfUrl.data;
  console.log(defense_pdf_url);
  const [numPages, setNumPages] = useState<null | number>(null);
  return (
    <Document
      file={defense_pdf_url}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;
