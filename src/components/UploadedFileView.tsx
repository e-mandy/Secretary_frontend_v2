import type { FileType } from "@/features/professor/schemas/professeur_files.schema";

import { getCorrectIcon } from "@/utils/getCorrectIcon";

const UploadedFileView = ({ ...data }: FileType) => {
  const fileIcon = getCorrectIcon(data.extension);

  return (
    <div className="flex items-center gap-4 my-6 w-full">
      <div
        className={`rounded-full shrink-0 md:h-14 md:w-14 overflow-hidden flex items-center justify-center ${fileIcon?.bg} ${fileIcon?.text}`}
      >
        {fileIcon?.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div>
          <h5 className="font-semibold text-sm truncate">
            {data.name.split(".")[0]}
          </h5>
          <p className="text-sm truncate text-gray-500">
            {data.size} - {data.extension}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadedFileView;
