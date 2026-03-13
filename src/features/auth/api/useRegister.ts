import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../api/axiosInstance"
import type { RegisterUser } from "../schemas/register.schema"
import { useAuthStore } from "../store/auth.store";
import type { UserApiResponse } from "../schemas/auth_store.schema";

const register = async (user: RegisterUser): Promise<UserApiResponse> => {
    const response = await axiosInstance.post('/secretary/register', user);
    return response.data;
}

export const useRegister = () => {
    const { setAuthStore } = useAuthStore();

    return useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            setAuthStore(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })
}