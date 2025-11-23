"use client"
import { createContext, useContext, useEffect, useState } from "react"

interface AuthContextType {
    token: string | null;
    user: any | null
    login: (token: string, user: any) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<any | null>(null)

    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        const savedUser = localStorage.getItem("user")
        if (savedToken) setToken(savedToken)
        if (savedUser) setUser(JSON.parse(savedUser));
    }, [])

    const login = (token: string, user: any) => {
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setToken(token);
        setUser(user);
    }
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ token, user, login, logout }} > {children}</ AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)!;