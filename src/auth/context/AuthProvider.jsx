import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types } from "../types/types";


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {
        const user = { id: 'ABC', name };
        dispatch({ type: types.login, payload: user });
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        dispatch({ type: types.logout });
        localStorage.removeItem('user');
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
