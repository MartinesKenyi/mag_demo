import React from 'react';
import { mount } from 'enzyme';
import { SuscriptionContext } from "../../suscription/SuscriptionContext";
import { UsuarioContext } from "../../usuario/UsuarioContext";
import { Confirmacion } from "../../view/Confirmacion";


describe('Pruebas en <Confirmacion />', () => {
    const contextSuscriptionValue = {
        dispatch: jest.fn(),
        suscriptionState: {
            sucriptionActive: {},
            ok: false
        }
    };
    const contextUsuarioValue = {
        dispatch: jest.fn(),
        usuarioState: {
            usuarioActive: {
                usuario: 'Martinez Bonifacio'
            },
            ok: false
        }
    };
    const historyMock = {
        push: jest.fn()
    };

    const wrapper = mount(
        <UsuarioContext.Provider value={contextUsuarioValue}>
            <SuscriptionContext.Provider value={contextSuscriptionValue}>
                <Confirmacion
                    history={historyMock}
                />
            </SuscriptionContext.Provider>
        </UsuarioContext.Provider>
    )

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
