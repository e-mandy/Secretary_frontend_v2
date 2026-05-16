import { Download, Folder } from "lucide-react";

const ProfessorDocument = () => {
  return (
    <div className="py-3 px-3 rounded-lg shadow-lg bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="rounded-lg bg-red-200 p-2">
            <Folder />
          </div>
          <div>
            <h4 className="text-lg font-semibold">File name</h4>
            <p className="text-sm font-bold text-gray-500 flex justify-between">
              <span>Size</span>
              <span>Mime</span>
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
