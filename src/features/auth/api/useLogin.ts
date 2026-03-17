import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../api/axiosInstance";
import type { LoginUser } from "../schemas/login.schema";


const login = async(user: LoginUser) => {
    const response = await axiosInstance.post('/secretary/login', user);
    return response.data;
}

const useLogin = () => {
    return useMutation({
        mutationFn: login,
    });
}

export default useLogin;