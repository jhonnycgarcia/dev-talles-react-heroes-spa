import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";


describe('Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test(' debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = { type: types.login, payload: { name: 'Pedro Lars', id: 123 } };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, user: action.payload });
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const initialState = { logged: true, user: { name: 'Pedro Lars', id: 123 } };
        const action = { type: types.logout };
        const state = authReducer(initialState, action);
        expect(state).toEqual({ logged: false });
    });

});