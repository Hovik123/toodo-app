import {create} from 'zustand';

type User = {
    username: string;
    email: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

interface AuthStore extends AuthState {
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    user: null,
    login: (user) => set({ isAuthenticated: true, user }),
    logout: () => set({ isAuthenticated: false, user: null }),
}));

