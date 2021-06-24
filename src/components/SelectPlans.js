import React, { useContext } from 'react'
import { SuscriptionContext } from '../suscription/SuscriptionContext';
import { ListBeneficios } from './ListBeneficios';

import { suscriptions } from '../data/sucription';
import { types } from '../types/types';

export const SelectPlans = ({ dimensiones, handleClose }) => {

    const { suscriptionState, dispatch } = useContext(SuscriptionContext);
    const { tipo, precio, popular, descricion, beneficios } = suscriptionState.sucriptionActive;

    const handleCambiarPlan = () => {
        const suscription = suscriptions.find(s => s.popular !== popular)

        dispatch({
            type: types.setSuscription,
            payload: { ...suscription }
        });
    }

    return (
        <div className="datos__select-plans"
            style={(dimensiones) ? { background: 'white', borderRadius: "8px", margin: '50px', padding: '30px' } : {}}
        >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }} >
                <div
                    className="plans__popular"
                    hidden={!dimensiones}
                    onClick={handleClose}
                > X </div>
            </div>

            <h3 className="datos__plan">
                plan
                <span style={{ fontSize: '20px', color: '#000' }}> {tipo} </span>
            </h3>
            <h1 className="datos__price">
                <span style={{ fontSize: "12px", margin: "10px" }}>
                    S/
                    </span>
                {precio}
                <span style={{ fontSize: "10px", margin: '35px 0 0 5px' }}> / al mes</span>
            </h1>

            <p className="datos__description"> {descricion} </p>

            <hr className="hr" />

            <ul className="ul">
                {
                    beneficios.map((beneficio, i) => (
                        <ListBeneficios
                            key={i}
                            beneficio={beneficio}
                        />
                    ))
                }
            </ul>

            <div
                style={{ textAlign: 'center', marginTop: '15%', fontSize: '13px' }}
            >
                <div
                    onClick={handleCambiarPlan}
                    className="datos__cambiar-plan"
                >
                    Cambiar a plan {(popular) ? " premiun >" : " estándar >"}
                </div>
            </div>
        </div>
    )
}