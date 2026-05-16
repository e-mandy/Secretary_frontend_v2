import { useNotify } from "@/hooks/useNotify";
import axios from "axios";
import { useState } from "react";

export const useDownload = () => {
  const [error, setError] = useState<null | unknown>(null);
  const [isLoading, setLoading] = useState(false);
  const { notify } = useNotify();

  const download = async (id: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`/documents/${id}/download`, {
        responseType: "blob",
      });

      // Create a temporar file through the Blob.
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Introduce the link in the tree.
      const link = document.createElement("a");
      link.href = url;
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
