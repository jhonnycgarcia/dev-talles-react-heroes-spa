import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";


describe('Pruebas en AppRouter', () => {

    test('debe mostrar el login si no está autenticado', () => {
        const contextValue = { logged: false };

        render(
            <MemoryRouter
                future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
                initialEntries={['/marvel']}
            >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();
        expect(screen.getAllByText('Login')).toBeTruthy();
    });

    test('debe de mostrar el componente de Marvel si está autenticado', () => {
        const contextValue = { logged: true, user: { name: 'Pedro Lars', id: 123 } };

        render(
            <MemoryRouter
                future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
                initialEntries={['/login']}
            >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();
        expect(screen.getAllByText('Marvel Page')).toBeTruthy();
    });
    
});