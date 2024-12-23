import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";

describe('Pruebas en PublicRoute', () => {

    test('debe de mostrar el children si no está autenticado', () => {
        const contextValue = { logged: false };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta pública')).toBeTruthy();
    });

    test('debe de navegar si está autenticado', () => {
        
    });
    
});