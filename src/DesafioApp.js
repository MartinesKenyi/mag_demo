import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { SuscriptionProvider } from './suscription/SuscriptionContext';
import { UsuarioProvider } from './usuario/UsuarioContext';

export const DesafioApp = () => {
    return (
        <UsuarioProvider>
            <SuscriptionProvider>
                <AppRouter />
            </SuscriptionProvider>
        </UsuarioProvider>
    )
}
