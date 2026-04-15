import {
  FileText,
  FileImage,
  FileCode,
  FileArchive,
  FileSpreadsheet,
  FileVideo,
  FileAudio,
  FileDigit,
  File,
} from "lucide-react";

export const DOC_ICONS = [
  {
    type: "pdf",
    icon: <FileText size={20} />,
    color: "text-orange-500", // PDF standard
  },
  {
    type: "jpeg",
    icon: <FileImage size={20} />,
    color: "text-blue-400",
  },
  {
    type: "png",
    icon: <FileImage size={20} />,
    color: "text-purple-400",
  },
  {
    type: "js",
    icon: <FileCode size={20} />,
    color: "text-yellow-400", // Couleur JavaScript
  },
  {
    type: "py",
    icon: <FileCode size={20} />,
    color: "text-blue-500", // Couleur Python
  },
  {
    type: "xlsx",
    icon: <FileSpreadsheet size={20} />,
    color: "text-emerald-500", // Couleur Excel
  },
  {
    type: "csv",
    icon: <FileDigit size={20} />,
    color: "text-green-600",
  },
  {
    type: "zip",
    icon: <FileArchive size={20} />,
    color: "text-amber-600",
  },
  {
    type: "mp4",
    icon: <FileVideo size={20} />,
    color: "text-rose-500",
  },
  {
    type: "mp3",
    icon: <FileAudio size={20} />,
    color: "text-indigo-500",
  },
  {
    type: "default",
    icon: <File size={20} />,
    color: "text-slate-400",
  },
];
