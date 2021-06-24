import React from 'react';
import { shallow } from 'enzyme';
import { SuscriptionContext } from '../../suscription/SuscriptionContext';
import { Datos } from '../../view/Datos';

describe('Pruebas en <Datos />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        suscriptionState: {
            sucriptionActive: {},
            ok: true
        }
    }
    const historyMock = {
        push: jest.fn()
    }

    const wrapper = shallow (
        <SuscriptionContext.Provider value={contextValue}>
            <Datos
                history={historyMock}
            />
        </SuscriptionContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })


});
