import { getFormatedFileSize } from "@/utils/getFormatedFileSize";
import { Download, Folder } from "lucide-react";

export type ProfessorDocumentType = {
  id: string;
  created_at: Date;
  title: string;
  url: string;
  metadata: { size: number; type: string };
};

const ProfessorDocument = ({ ...data }: ProfessorDocumentType) => {
  return (
    <div className="py-3 px-3 rounded-lg shadow-lg bg-white w-fit md:w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="rounded-lg bg-red-100 p-2">
            <Folder color="#c41c2d" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm md:text-base font-semibold">
              {data?.title}
            </h4>
            <p className="text-sm font-bold text-gray-500 flex justify-start gap-4">
              <span>{getFormatedFileSize(data.metadata?.size)}</span>
              <span className="uppercase">
                {data?.metadata?.type.split("/")[1]}
              </span>
            </p>
          </div>
        </div>
        <div className="rounded-lg p-2 cursor-pointer hover:bg-gray-100">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default ProfessorDocument;
