import React, { useContext, useState } from 'react';
import { SuscriptionContext } from '../suscription/SuscriptionContext';
import { UsuarioContext } from '../usuario/UsuarioContext';
import { useForm } from '../hooks/useForm';
import { types } from '../types/types';

export const FormDatos = ({ history }) => {

    const { suscriptionState } = useContext(SuscriptionContext);
    const { dispatch } = useContext(UsuarioContext);
    const { precio } = suscriptionState.sucriptionActive;

    const [error, setError] = useState('')

    const [valueForm, handleInputChange] = useForm({
        usuario: '',
        card: '',
        fexpira: '',
        cvc: ''
    });

    const { usuario, card, fexpira, cvc } = valueForm;

    const handlePagar = () => {

        if (validForm()) {
            dispatch({
                type: types.setUsuario,
                payload: {
                    usuario, 
                    card, 
                    fexpira, 
                    cvc
                }
            });
            history.push("/confirmacion");
        }
    }
    const validForm = () => {
        if(usuario.length < 5) {
            console.log("Digite su nombre y apellidos!")
            setError("Digite su nombre y apellidos!")
            return false;
        }
        if(card.length < 12) {
            console.log("Digite la tarjeta correctamente!")
            setError("Digite la tarjeta correctamente!")
            return false;
        }
        if(fexpira.length < 5) {
            console.log("Digite la fecha de F. expiración correctamente!")
            setError("Digite la fecha de F. expiración correctamente!")
            return false;
        }
        if(cvc.length < 3) {
            console.log("Digite CVC correctamente!")
            setError("Digite CVC correctamente!")
            return false;
        }

        return true;
    }

    return (
        <>
            <h2
                className="datos__title-h2"
            >Registre sus datos</h2>

            <fieldset className="datos__fieldset">
                <label
                    className="datos__label"
                >
                    Nombre y apellidos
                </label>
                <input
                    type="text"
                    placeholder="Nombre y apellido"
                    autoComplete="off"
                    name="usuario"
                    className="datos__input"
                    value={usuario}
                    onChange={handleInputChange}
                />

            </fieldset>

            <fieldset className="datos__fieldset">
                <label
                    className="datos__label"
                >
                    Número de tarjeta
                </label>
                <input
                    type="number"
                    placeholder=".... .... .... ...."
                    autoComplete="off"
                    name="card"
                    className="datos__input"
                    value={card}
                    onChange={handleInputChange}
                />
            </fieldset>

            <div className="row">
                <div style={{ width: '50%', float: 'left' }}>
                    <fieldset className="datos__fieldset">
                        <label
                            className="datos__label"
                        >
                            F. Expira
                </label>
                        <input
                            type="number"
                            placeholder="MM/AA"
                            autoComplete="off"
                            name="fexpira"
                            className="datos__input"
                            style={{ width: '60%' }}
                            value={fexpira}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                </div>
                <div style={{ width: '50%', float: 'left' }}>
                    <fieldset className="datos__fieldset">
                        <label
                            className="datos__label"
                        >
                            CVC
                </label>
                        <input
                            type="number"
                            autoComplete="off"
                            name="cvc"
                            className="datos__input"
                            style={{ width: '60%' }}
                            value={cvc}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                </div>
            </div>
            <div style={{
                color: '#FD3D4C'
            }}>
                { error }
            </div>

            <div
                style={{ textAlign: 'center' }}
            >
                <button
                    className="button"
                    onClick={handlePagar}
                >
                    Pagar S/. {precio}.00
                </button>
            </div>
        </>
    )
}
