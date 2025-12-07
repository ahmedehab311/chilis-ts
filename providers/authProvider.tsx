"use client"
import { createContext, useContext, useEffect, useState } from "react"
interface UserType {
    id: number;
    user_name: string;
    email: string;
    phone: string;
}
interface AuthContextType {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>
    user: UserType | null
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
    login: (token: string, user: any) => void
    logout: () => void
    updateAuth: (newToken: string | null, newUser: UserType | null) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<UserType | null>(null)
    console.log("user AuthProvider", user);
    console.log("token AuthProvider", token);
    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        const savedUser = localStorage.getItem("user")
        if (savedToken) setToken(savedToken)
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            } catch (e) {
                console.error("Error parsing user from localStorage", e)
            }
        }
    }, [])

    const login = (token: string, user: UserType) => {
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

    const updateAuth = (newToken: string | null, newUser: UserType | null) => {
        if (newToken) {
            localStorage.setItem("token", newToken);
            setToken(newToken);
        }
        if (newUser) {
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
        }
    }

    return (
        <AuthContext.Provider value={{ token, user, setToken, setUser, login, logout, updateAuth }} > {children}</ AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)!;