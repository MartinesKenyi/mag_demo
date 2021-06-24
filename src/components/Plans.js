import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SuscriptionContext } from '../suscription/SuscriptionContext';
import { types } from '../types/types';
import { ListBeneficios } from './ListBeneficios';

export const Plans = ({ history, tipo, precio, descricion, popular, beneficios }) => {

    const { dispatch } = useContext(SuscriptionContext);

    const handleSuscription = () => {
        dispatch({
            type: types.setSuscription,
            payload: {
                tipo, 
                precio, 
                descricion, 
                popular, 
                beneficios
            }
        });
        
        history.push("/datos");
    }

    return (
        <>
            <div className="plans__container">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }} >
                    <div className="plans__popular" hidden={!popular}> POPULAR </div>
                </div>
                <h3 className="plans__plan">{tipo}</h3>
                <h1 className="plans__price">
                    <span style={{ fontSize: "12px", margin: "10px" }}>
                        S/
                    </span>
                    {precio}
                    <span style={{ fontSize: "10px", margin: '35px 0 0 5px' }}> / al mes</span>
                </h1>
                <p className="plans__description"> {descricion} </p>

                <hr className="hr" />

                <ul className="ul"
                    style={{ marginBottom: "60px" }}
                >
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
                    className="plans__div_button"
                >

                    <button
                        onClick={handleSuscription}
                        className="button"
                    >
                        Suscribirme
                </button>
                </div>
            </div>
        </>
    )
}

Plans.propTypes = {
    tipo: PropTypes.string.isRequired, 
    precio: PropTypes.string.isRequired,
    descricion: PropTypes.string, 
    popular: PropTypes.bool,
    beneficios: PropTypes.array,
}