import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types } from "../types/types";


const initialState = {
    logged: false,
    user: null
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = (name = '') => {
        dispatch({ type: types.login, payload: { id: 'ABC', name } });
    }

    const logout = () => {
        dispatch({ type: types.logout });
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}
