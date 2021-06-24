import { types } from '../types/types' ;

export const usuarioReducer = (state, action) => {
    switch (action.type) {
        
        case types.setUsuario:
            return {
                ...state,
                usuarioActive: {...action.payload},
                ok: true
            }
    
        default:
            return state;
    }
}