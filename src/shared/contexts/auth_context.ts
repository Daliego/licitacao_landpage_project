import { User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextProps {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
