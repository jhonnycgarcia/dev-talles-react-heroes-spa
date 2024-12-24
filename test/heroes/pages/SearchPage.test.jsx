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

        // screen.debug();

        expect(container).toMatchSnapshot();
    });
    
});