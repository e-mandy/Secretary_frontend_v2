import { useNotify } from "@/hooks/useNotify";
import axios from "axios";
import { useState } from "react";

export const useDownload = () => {
  const [error, setError] = useState<null | unknown>(null);
  const [isLoading, setLoading] = useState(false);
  const { notify } = useNotify();
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });

  const download = async (id: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/documents/${id}/download`, {
        responseType: "blob",
      });

      const contentDisposition = response.headers["content-disposition"];
      console.log(contentDisposition);
      console.log("content-type:", response.headers["content-type"]);
      const filename =
        contentDisposition
          ?.split(";")
          .find((part) => part.trim().startsWith("filename="))
          ?.split("=")[1]
          ?.replace(/"/g, "")
          ?.trim() ?? "document"; // ← ajout

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: response.headers["content-type"] }), // ← type explicite
      );

      // Introduce the link in the tree.
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);

      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      setLoading(false);
      notify("Fichier téléchargé avec succès !!", "success");
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, error, download };
};
