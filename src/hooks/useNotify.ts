import toast from "react-hot-toast";

export const useNotify = () => {
  const notify = (message: string, status: "success" | "error") => {
    if (status == "error") toast.error(message, { duration: 3000 });
    if (status == "success") toast.success(message, { duration: 3000 });
  };

  return { notify };
};
