import React from 'react'
import { Plans } from '../components/Plans'

export const Suscripcion = ({history}) => {
    return (
        <div className="background__body">

            <div className="filter">
                <div className="suscription__container_title">
                    <h1>Mag <span>plans</span> </h1>
                    <p>Elija un plan que funcione mejor para usted.</p>
                </div>

                <div className="suscription__plans">
                    <Plans
                        history={history}
                    />
                </div>
            </div>
        </div>
    )
}
