import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import { SearchPage } from '../../../src/heroes/pages/SearchPage';


const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Prueba en <SearchPage />', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                {/* <SearchPage /> */}
            </MemoryRouter>
        );

        // screen.debug();
        // expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar a batman', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                {/* <SearchPage /> */}
            </MemoryRouter>
        );

        // const input = screen.getByRole('textbox');
        // expect(input.value).toBe('batman');

        // const img = screen.getByRole('img');
        // expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        // const alert = screen.getByLabelText('alert-danger');
        // expect(alert.style.display).toBe('none');



    });

    test('Debe de mostrar un error si no se encuentra el hero', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                {/* <SearchPage /> */}
            </MemoryRouter>
        );

        // const alert = screen.getByLabelText('alert-danger');
        // expect(alert.style.display).toBe('');

    });

    test('Debe de llamar el navigate a la pantalla nueva', () => {

        render(
            <MemoryRouter initialEntries={['/search']}>
                {/* <SearchPage /> */}
            </MemoryRouter>
        );

        // const input = screen.getByRole('textbox');
        // fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}});

        // const form = screen.getByRole('form');
        // fireEvent.submit(form);

        // expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');


    });

});