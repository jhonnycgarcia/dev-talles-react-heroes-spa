import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Pruebas en SearchPage', () => {

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
    
});