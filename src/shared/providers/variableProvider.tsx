// import { ReactNode } from "react";

import { useContext } from "react";
import { createContext } from "vm";

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//     return (
//         <
//     )
// }

const Variables = createContext({})

export function VariableProvider({ variables = {}, children }) {

    return (
        <Variables.Provider value={variables}>
            {children}
        </Variables.Provider>
    )
}