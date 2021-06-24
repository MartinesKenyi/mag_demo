import React from 'react';
import { shallow } from 'enzyme';
import { ListBeneficios } from '../../components/ListBeneficios';


describe('Pruebas en <ListBeneficios />', () => {
    
    test('Debe de mostrarse correctamente', () => {
       
        const wrapper = shallow (
            <ListBeneficios
                beneficio={"Hola"}
            />
        );

        expect(wrapper).toMatchSnapshot();
        
    });
    

})
