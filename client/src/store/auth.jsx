import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      login: (token) => set({ token }),
      logout: () => set({ token: null }),
      setUser: (user) => set({ user }),
    }),
    { name: "auth-storage" }
  )
);
