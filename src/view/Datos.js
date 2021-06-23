import React from 'react'
import { FormDatos } from '../components/FormDatos'
import { SelectPlans } from '../components/SelectPlans'

export const Datos = ({ history }) => {
    return (
        <div className="background__body">
            <div className="filter"
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <div className="datos__container">
                    <div className="row">
                        <div style={{width:'40%', float: 'left'}}>
                            <SelectPlans />
                        </div>
                        <div style={{width:'60%',  float: 'left'}}>
                            <FormDatos
                                history={history}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
