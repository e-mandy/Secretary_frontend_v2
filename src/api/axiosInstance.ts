import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: { 'Accept': "application/json"}
});

export const  axiosPrivateInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    // We include the credentials for the checking of the authentication token on the backend side.
    withCredentials: true,
    headers: { 
        'Content-Type': "application/json",
        'Accept': "application/json"
    }
});