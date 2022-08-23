import { createContext, useContext } from "react";
import useFirebaseAuth from "../lib/useFirebaseAuth";

const AuthUserContext = createContext({
    authUser: null,
    loading: true,
    signEmailPassword: async () => {},
    createUserEmailPassword: async () => {},
    signInOut: async () => {}
})

export function AuthUserProvider({childred}) {
    const auth = useFirebaseAuth
    return  <AuthUserContext.Provider value={auth}>{childred}</AuthUserContext.Provider>
}

export const useAuth = () => useContext(AuthUserContext)