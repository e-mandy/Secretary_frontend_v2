import { create } from "zustand";
import type { AuthStoreType } from "../schemas/auth_store.schema";

export const useAuthStore = create<AuthStoreType>(() => ({
    user: null,
    token: null,
}));