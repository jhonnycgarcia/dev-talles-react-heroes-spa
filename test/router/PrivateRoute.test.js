import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en PublicRoute', () => {

    test('debe de mostrar el children si está autenticado', () => {
        const contextValue = { logged: true, user: { name: 'Pedro Lars', id: 123 } };
        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter 
                    future={ {v7_startTransition: true, v7_relativeSplatPath: true} } 
                    initialEntries={['/search?q=batman']}
                >
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });


    
});