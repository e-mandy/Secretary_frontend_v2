import { create } from "zustand";
import type { AuthStoreType, UserApiResponse } from "../schemas/auth_store.schema";

export const useAuthStore = create<AuthStoreType>((set) => ({
    user: null,
    token: null,

    setAuthStore : (userLogin: UserApiResponse) => set({ ...userLogin })
}));