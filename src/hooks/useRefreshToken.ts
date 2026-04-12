import { axiosPrivateInstance } from "../api/axiosInstance";
import { useAuthStore } from "../features/auth/store/auth.store";

export const useRefreshToken = () => {
  const { setAuthStore } = useAuthStore();

  const refresh = async () => {
    const response = await axiosPrivateInstance.post("/refresh");
    setAuthStore({
      user: response.data.user,
      token: response.data.access_token,
    });

    return response.data.access_token;
  };

  return refresh;
};
