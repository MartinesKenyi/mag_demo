import React, { createContext, useReducer } from 'react';
import { usuarioReducer } from './usuarioReducer';

export const UsuarioContext = createContext();

const initialState = {
    usuarioActive: {},
    ok: false
}

export const UsuarioProvider = ({ children }) => {
    
    const [usuarioState, dispatch] = useReducer(usuarioReducer, initialState);

    return (
        <UsuarioContext.Provider value={{
            usuarioState,
            dispatch
        }}>
            {children}
        </UsuarioContext.Provider>
    )
}