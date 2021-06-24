import { suscriptionReducer } from '../../suscription/suscriptionReducer';
import { types } from '../../types/types';


describe('Pruebas de suscriptionReducer', () => {
    
    test('Debe de retornar el estado por defecto de suscripción', () => {

        const initialState = {
            sucriptionActive: {}, 
            ok: false
        }

        const state = suscriptionReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('Debe de setear una suscripción', () => {

        const sucriptionActive = {
            tipo: 'Premiun',
            precio: '59',
            popular: false
        }

        const action = {
            type: types.setSuscription,
            payload: {
                ...sucriptionActive
            }
        }

        const state = suscriptionReducer({}, action);
        expect(state).toEqual({
            sucriptionActive,
            ok: true
        });
    });

})
