import React from 'react'
import { Plans } from '../components/Plans'

export const Suscripcion = () => {
    return (
        <div className="suscripcion__body">

            <div className="suscription__filter">
                <div className="suscription__container_title">
                    <h1>Mag <span>plans</span> </h1>
                    <p>Elija un plan que funcione mejor para usted.</p>
                </div>

                <div className="suscription__plans">
                    <Plans />
                </div>
            </div>
        </div>
    )
}
