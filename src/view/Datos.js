import React, { useState } from 'react';
import { FormDatos } from '../components/FormDatos';
import { SelectPlans } from '../components/SelectPlans';

export const Datos = ({ history }) => {

    const dimensiones = window.matchMedia("(max-width: 650px)").matches;
    const [modal, setModal] = useState(true);

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="background__body">
            <div className="filter"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="datos__container">
                    <div className="row">
                        <div style={{ width: '40%', float: 'left' }} hidden={dimensiones}>
                            <SelectPlans />
                        </div>
                        <div style={(dimensiones) ? { width: '100%', float: 'left' } : { width: '60%', float: 'left' }}>
                            <FormDatos
                                history={history}
                            />
                        </div>

                        <div 
                            className="datos__cambiar" 
                            hidden={!dimensiones}
                            onClick={handleModal}
                        >
                            {"Plan Estándar >"}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="datos__modal"
                style={(modal) ? {display: 'none'}: {}}
                hidden={!dimensiones}
            >
                <SelectPlans
                    dimensiones={dimensiones}
                    handleClose={handleModal}
                />
            </div>
        </div>
    )
}
