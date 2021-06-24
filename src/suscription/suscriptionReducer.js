import { types } from '../types/types' ;

export const suscriptionReducer = (state, action) => {
    switch (action.type) {
        case types.setSuscription:
            return {
                ...state,
                sucriptionActive: {...action.payload},
                ok: true
            }
    
        default:
            return state
    }
}