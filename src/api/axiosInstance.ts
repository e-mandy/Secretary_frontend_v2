import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.BACKEND_URL,
    headers: { 'Accept': "application/json"}
});

export const  axiosPrivateInstance = axios.create({
    baseURL: import.meta.env.BACKEND_URL,
    withCredentials: true,
    headers: { 
        'Content-Type': "application/json",
        'Accept': "application/json"
    }
});