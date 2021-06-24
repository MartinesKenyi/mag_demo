import React from 'react';
import { shallow } from 'enzyme';
import { DesafioApp } from '../DesafioApp';

describe('Pruebas en <DesafioApp />', () => {
   
    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow( <DesafioApp /> );

        expect(wrapper).toMatchSnapshot();
    });
});
