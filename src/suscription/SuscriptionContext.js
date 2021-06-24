import React, { createContext, useReducer } from 'react';
import { suscriptionReducer } from './suscriptionReducer';

export const SuscriptionContext = createContext();

const initialState = {
    sucriptionActive: {},
    ok: false
}

export const SuscriptionProvider = ({ children }) => {
    
    const [suscriptionState, dispatch] = useReducer(suscriptionReducer, initialState);

    return (
        <SuscriptionContext.Provider value={{
            suscriptionState,
            dispatch
        }}>
            {children}
        </SuscriptionContext.Provider>
    )
}