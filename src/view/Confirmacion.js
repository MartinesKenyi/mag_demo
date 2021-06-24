import React, { useContext } from 'react';
import { SuscriptionContext } from '../suscription/SuscriptionContext';
import { UsuarioContext } from '../usuario/UsuarioContext';

export const Confirmacion = () => {

    const dimensiones = window.matchMedia("(max-width: 580px)").matches;
    const { usuarioState } = useContext(UsuarioContext);
    const { suscriptionState } = useContext(SuscriptionContext);
    
    console.log(usuarioState)
    console.log(suscriptionState)

    const { precio, tipo } = suscriptionState.sucriptionActive;
    const { usuario } = usuarioState.usuarioActive;
    const datos = usuario.split(" ");

    

    return (
        <div className="background__body">
            <div className="filter"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="confirmacion__container">

                    <div className="row">
                        <div style={ (dimensiones) ? {width: '100%', float: 'left'} : { width: '65%', float: 'left' }}>

                            <div style={{ padding: '30px' }}>

                                <div className="success-checkmark">
                                    <div className="check-icon">
                                        <span className="icon-line line-tip"></span>
                                        <span className="icon-line line-long"></span>
                                        {/* <div className="icon-circle"></div> */}
                                        <div className="icon-fix"></div>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <p className="confirmacion__bienvenido"> Bienvenido,
                                    <span> { datos[0].toUpperCase() } </span>
                                    has adquirido el
                                </p>
                                    <h2 className="confirmacion__plan">Plan { tipo }</h2>
                                    <span className="confirmacion__precio">S/ { precio } al mes</span>

                                    <p className="confirmacion__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="confirmacion__ref">
                                        Ir a ver mi plan
                                </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '35%', float: 'left' }} hidden={dimensiones}>
                            <div>
                                <img
                                    src={require('../assets/img/success.jpg').default}
                                    alt="img"
                                    className="confirmacion__img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
