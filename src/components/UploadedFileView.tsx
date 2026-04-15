import type { FileType } from "@/features/professor/schemas/professeur_files.schema";
import secretary from "../assets/auth/secretary.jpeg";

const UploadedFileView = ({ ...data }: FileType) => {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="rounded-full md:h-14 md:w-14 overflow-hidden">
        <img src={secretary} alt="" className="h-full w-full" />
      </div>
      <div>
        <div>
          <h5 className="font-semibold text-sm">{data.name.split(".")[0]}</h5>
          <p>
            {data.size} - {data.extension}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadedFileView;
