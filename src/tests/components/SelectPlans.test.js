import React from 'react';
import { mount } from 'enzyme';
import { SuscriptionContext } from '../../suscription/SuscriptionContext';
import { SelectPlans } from '../../components/SelectPlans';
import { suscriptions } from '../../data/sucription';
import { types } from '../../types/types';

describe('Pruebas en <SelectPlans />', () => {
    
    const sucriptionActive = {
        tipo: 'Premiun',
        precio: '59', 
        descricion: 'Lorem', 
        popular: true,
        beneficios: []
    }

    const contextValue = {
        dispatch: jest.fn(),
        suscriptionState: {
            sucriptionActive,
            ok: true
        }
    }
    const property = {
        dimensiones: false, 
        handleClose: jest.fn()
    }

    const wrapper = mount(
        <SuscriptionContext.Provider value={contextValue}>
            <SelectPlans
                {...property}
            />
        </SuscriptionContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de realizar el dispatch y la navegación', () => {
        wrapper.find('.datos__cambiar-plan').prop('onClick')();
        
        const suscription = suscriptions.find(s => s.popular !== sucriptionActive.popular)
        
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.setSuscription,
            payload: {...suscription}
        });


    });

})
