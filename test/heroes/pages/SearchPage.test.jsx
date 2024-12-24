import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockUseNAvigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNAvigate,
}));

describe('Pruebas en SearchPage', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente Search con valores por defecto', () => {
        const { container } = render(
            <MemoryRouter
                future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
            >
                <SearchPage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {
        render(
            <MemoryRouter
                future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
                initialEntries={['/search?q=batman']}
            >
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
        const img = screen.getByRole('img');
        expect(img.src).toContain('/heroes/dc-batman.jpg');
        
        const alertNoResults = screen.getByLabelText('alert-no-results');
        expect(alertNoResults.style.display).toBe('none');
    });

    test('debe de mostrar un error si no hay resultados (batman123', () => {
        render(
            <MemoryRouter
                future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
                initialEntries={['/search?q=batman123']}
            >
                <SearchPage />
            </MemoryRouter>
        );

        const alertSearch = screen.getByLabelText('alert-search');
        const alertNoResults = screen.getByLabelText('alert-no-results');
        expect(alertSearch.style.display).toBe('none');
        expect(alertNoResults.style.display).toBe('');
    });

    test('debe de llamar al navigate a la pantalla nueva', () => {
        render(
            <MemoryRouter
                future={ {v7_startTransition: true, v7_relativeSplatPath: true} }
                initialEntries={['/search']}
            >
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } });

        const form = screen.getByLabelText('form-search');
        fireEvent.submit(form);

        expect(mockUseNAvigate).toHaveBeenCalledWith('?q=superman');
    });
    
});