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
    icon: <FileText size={18} />,
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
  {
    type: "jpeg",
    icon: <FileImage size={18} />,
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  {
    type: "png",
    icon: <FileImage size={18} />,
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  {
    type: "js",
    icon: <FileCode size={18} />,
    bg: "bg-yellow-100",
    text: "text-yellow-800",
  },
  {
    type: "py",
    icon: <FileCode size={18} />,
    bg: "bg-sky-100",
    text: "text-sky-700",
  },
  {
    type: "xlsx",
    icon: <FileSpreadsheet size={18} />,
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },
  {
    type: "csv",
    icon: <FileDigit size={18} />,
    bg: "bg-green-100",
    text: "text-green-800",
  },
  {
    type: "zip",
    icon: <FileArchive size={18} />,
    bg: "bg-amber-100",
    text: "text-amber-800",
  },
  {
    type: "mp4",
    icon: <FileVideo size={18} />,
    bg: "bg-rose-100",
    text: "text-rose-700",
  },
  {
    type: "mp3",
    icon: <FileAudio size={18} />,
    bg: "bg-indigo-100",
    text: "text-indigo-700",
  },
  {
    type: "default",
    icon: <File size={18} />,
    bg: "bg-slate-100",
    text: "text-slate-600",
  },
];
