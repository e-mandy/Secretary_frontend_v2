import type { FileType } from "@/features/professor/schemas/professeur_files.schema";

import { getCorrectIcon } from "@/utils/getCorrectIcon";

const UploadedFileView = ({ ...data }: FileType) => {
  const fileIcon = getCorrectIcon(data.extension);

  return (
    <div className="flex items-center gap-4 my-6">
      <div
        className={`rounded-full md:h-14 md:w-14 overflow-hidden flex items-center justify-center ${fileIcon?.bg} ${fileIcon?.text}`}
      >
        {fileIcon?.icon}
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
