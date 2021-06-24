import { types } from '../../types/types';
import { usuarioReducer } from '../../usuario/usuarioReducer';

describe('Pruebas en usuarioReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {

        const initialState = {
            usuarioActive: {}, 
            ok: false
        }

        const state = usuarioReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('Debe de setear un usuario', () => {

        const usuarioActive = {
            usuario: 'Martinez',
            cvc: '123'
        }

        const action = {
            type: types.setUsuario,
            payload: {
                ...usuarioActive
            }
        }

        const state = usuarioReducer({}, action);
        expect(state).toEqual({
            usuarioActive,
            ok: true
        });
    });

});