import React from 'react';
import { shallow } from 'enzyme';
import { Suscripcion } from '../../view/Suscripcion';

describe('Pruebas en <Suscription />', () => {
   
    const historyMock = {
        push: jest.fn()
    }

    const wrapper = shallow(
        <Suscripcion 
            history={historyMock}
        />
    )

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    
});
