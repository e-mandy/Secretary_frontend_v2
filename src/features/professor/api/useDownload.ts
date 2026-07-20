import axiosInstance from "@/api/axiosInstance";
import { useNotify } from "@/hooks/useNotify";
import { useState } from "react";

export const useDownload = () => {
  const [error, setError] = useState<null | unknown>(null);
  const [isLoading, setLoading] = useState(false);
  const { notify } = useNotify();

  const download = async (endpoint: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(endpoint, {
        responseType: "blob",
      });

      const contentDisposition = response.headers["content-disposition"];
      console.log(contentDisposition);
      console.log("content-type:", response.headers["content-type"]);
      const filename = contentDisposition
        ?.split(";")
        .find((part: string) => part.trim().startsWith("filename="))
        ?.split("=")[1]
        ?.replace(/"/g, "")
        ?.trim();

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: response.headers["content-type"] }),
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
      notify("Erreur lors du téléchargement !!", "error");
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, error, download };
};
