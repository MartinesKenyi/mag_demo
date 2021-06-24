import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from '../../routes/AppRouter';

describe('Pruebas en <AppRouter />', () => {
   
    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow( <AppRouter /> );

        expect(wrapper).toMatchSnapshot();
    });    
});
