import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';


interface AuthState {r
    isAuthenticated: boolean;
    refresh: string;
    access: string;
    user_id: number | null;
    login: (refresh: string, access: string, user_id: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>(
    persist(
        (set) => ({
            isAuthenticated: false,
            refresh: "",
            access: "",
            user_id: null,
            login: (refresh: string, access: string, user_id: number) => {
                set({ refresh, access, user_id, isAuthenticated: true });
            },
            logout: () => {
                set({ refresh: '', access: '', user_id: 0, isAuthenticated: false });
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);
