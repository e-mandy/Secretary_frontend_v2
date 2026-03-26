import { useAuthStore } from "../store/auth.store"

export const useAuth = () => {
    const { user, token } = useAuthStore();

    const isAuth = user != null && token != null;

    return isAuth;
}