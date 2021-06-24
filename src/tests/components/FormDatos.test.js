import React from 'react';
import { mount } from 'enzyme';
import { SuscriptionContext } from '../../suscription/SuscriptionContext';
import { UsuarioContext } from '../../usuario/UsuarioContext';
import { FormDatos } from '../../components/FormDatos';
import { types } from '../../types/types';

describe('Pruebas en <FormDatos />', () => {

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
            usuarioActive: {},
            ok: false
        }
    };
    const historyMock = {
        push: jest.fn()
    };

    const wrapper = mount(
        <UsuarioContext.Provider value={contextUsuarioValue}>
            <SuscriptionContext.Provider value={contextSuscriptionValue}>
                <FormDatos
                    history={historyMock}
                />
            </SuscriptionContext.Provider>
        </UsuarioContext.Provider>
    )

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion', () => {

        const value = {
            usuario: 'Martinez Bonifacio',
            card: '123465798123465',
            fexpira: '12/25',
            cvc: '986'
        }
        // Setear valores
        // usuario
        const usuarioField = wrapper.find('input[name="usuario"]');
        usuarioField.simulate('change', {
            target: {
                value: value.usuario,
                name: 'usuario'
            }
        });
        // card
        const cardField = wrapper.find('input[name="card"]');
        cardField.simulate('change', {
            target: {
                value: value.card,
                name: 'card'
            }
        });
        // fexpira
        const fexpiraField = wrapper.find('input[name="fexpira"]');
        fexpiraField.simulate('change', {
            target: {
                value: value.fexpira,
                name: 'fexpira'
            }
        });
        // cvc
        const cvcField = wrapper.find('input[name="cvc"]');
        cvcField.simulate('change', {
            target: {
                value: value.cvc,
                name: 'cvc'
            }
        });

        wrapper.find('button').prop('onClick')();
        expect(contextUsuarioValue.dispatch).toHaveBeenCalledWith({
            type: types.setUsuario,
            payload: {...value}
        });

    });

});
