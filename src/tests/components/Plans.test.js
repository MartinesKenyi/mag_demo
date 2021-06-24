import { mount } from 'enzyme';
import { Plans } from '../../components/Plans';
import { SuscriptionContext } from '../../suscription/SuscriptionContext';
import { types } from '../../types/types';


describe('Pruebas en <Plans />', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        initialState: {
            sucriptionActive: {},
            ok: false
        }
    }
    const historyMock = {
        push: jest.fn()
    }
    const suscriptionActive = {
        tipo: '',
        precio: '', 
        descricion: '', 
        popular: false, 
        beneficios: []
    }

    const wrapper = mount(
        <SuscriptionContext.Provider value={contextValue}>
            <Plans 
                history={historyMock}
                {...suscriptionActive}
            />
        </SuscriptionContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de realizar el dispatch y la navegación', () => {
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.setSuscription,
            payload: suscriptionActive
        });

        expect( historyMock.push ).toHaveBeenCalledWith("/datos");
    });

});
