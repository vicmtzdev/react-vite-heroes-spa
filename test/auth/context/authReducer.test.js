import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });

    });

    test('Debe de llamar el login, autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Amy',
                id: '123',
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });

    });

    test('Debe de llamar el logout, borrar el name del usuario y establecer logged en false', () => {

        const state = {
            logged: true,
        }

        const action = {
            type: types.logout,
        }

        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });

    });


});