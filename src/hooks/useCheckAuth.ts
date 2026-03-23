import { useAuthStore } from "../features/auth/store/auth.store";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";



export const useCheckAuth = () => {
    const axiosPrivateInstance = useAxiosPrivate();
    const { setAuthStore } = useAuthStore();
    
    const check = async() => {
        const response = await axiosPrivateInstance.get('/refresh');
        // Make the token available immediately in the app
        setAuthStore(response.data);
        return response.data;
    }

    const checkQuery = useQuery({
        queryKey: ['user'],
        queryFn: check,
        throwOnError: true,
    });

    return { check, checkQuery };
}