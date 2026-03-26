import { useLayoutEffect } from "react"
import { useAuthStore } from "../features/auth/store/auth.store";
import { axiosPrivateInstance } from "../api/axiosInstance";
import { useRefreshToken } from "./useRefreshToken";

export const useAxiosPrivate = () => {
    const { token } = useAuthStore();
    const refresh = useRefreshToken()

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
                if((error?.response?.status === 401 || error?.response?.status === 403) && !prevRequest?.sent){
                    prevRequest.sent = true;
                    try{
                        const token = await refresh();
                        prevRequest.headers["Authorization"] = `Bearer ${token}`;
                        return axiosPrivateInstance(prevRequest);
                    }catch(error){
                        return Promise.reject(error)
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivateInstance.interceptors.request.eject(requestIntercetor);
            axiosPrivateInstance.interceptors.response.eject(responseInterceptor);
        }
    }, [token]);

    return axiosPrivateInstance;
}