import { useLayoutEffect } from "react"
import { useAuthStore } from "../features/auth/store/auth.store";
import { axiosPrivateInstance } from "../api/axiosInstance";
import { useCheckAuth } from "./useCheckAuth";

export const useAxiosPrivate = () => {
    const { token } = useAuthStore();
    const { check } = useCheckAuth();

    useLayoutEffect(() => {
        const requestIntercetor = axiosPrivateInstance.interceptors.request.use(
            config => {
                if(!config.headers["Authorization"]){
                    config.headers["Authorization"] = `Bearer ${token}`
                }

                return config;
            }, 
            // The error parameter is used to reject the request when it automatically fail.
            (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosPrivateInstance.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if(error?.response?.status === 401 && !prevRequest?.sent){
                    const response = await check();
                    prevRequest.headers["Authorization"] = `Bearer ${response.token}`;
                    return axiosPrivateInstance(prevRequest);
                }
                return Promise.reject(error)
            }
        );

        return () => {
            axiosPrivateInstance.interceptors.request.eject(requestIntercetor);
            axiosPrivateInstance.interceptors.response.eject(responseInterceptor);
        }
    }, [token]);

    return axiosPrivateInstance;
}