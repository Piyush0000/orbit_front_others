'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    user: { name: string; email: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const router = useRouter();

    const login = () => {
        setIsLoggedIn(true);
        setUser({ name: 'Virat Runner', email: 'virat@example.com' });
        // Optional: Persist to localStorage
        try {
            localStorage.setItem('isLoggedIn', 'true');
        } catch (e) {
            console.error('Local storage unavailable');
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        try {
            localStorage.removeItem('isLoggedIn');
        } catch (e) { console.error(e); }
        router.push('/');
    };

    // Check storage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem('isLoggedIn');
            if (stored === 'true') {
                setIsLoggedIn(true);
                setUser({ name: 'Virat Runner', email: 'virat@example.com' });
            }
        } catch (e) { console.error(e); }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
