import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, replace, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockUseNAvigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNAvigate,
}));

describe('Pruebas en Navbar', () => {

    const contextValue  = {
        logged: true,
        user: { name: 'Pedro Lars', id: 123 },
        logout: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('debe de mostrar el nombre del usuario si está autenticado', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter
                    future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
                >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getByText('Pedro Lars')).toBeTruthy();
    });

    test('debe de llamar al logout y navigate cuando se hace click en el botón de logout', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter
                    future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
                >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const logoutButton = screen.getByRole('button', { name: 'LogOut' });
        fireEvent.click(logoutButton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNAvigate).toHaveBeenCalledWith('/login', { replace: true });
    });

});