import { types } from "../../../src/auth/types/types";

describe('Pruebas sobre los types', () => {

    test('Debe de regresar estos types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });

    });

});