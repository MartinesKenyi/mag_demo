import React from 'react'

export const SelectPlans = () => {

    const handleCambiarPlan = () => {
        console.log("cambiar plan")
    }

    return (
        <div style={{ padding: "30px 75px" }}>
            <h3 style={{fontSize: '12px', color: '#252525c5'}}>
                plan
                <span style={{fontSize: '20px', color: '#000'}}> Estandar</span>
            </h3>
            <h1 style={{ display: 'flex', fontSize: "50px", margin: "10px" }}>
                <span style={{ fontSize: "12px", margin: "10px" }}>
                    S/
                    </span>
                    29
                    <span style={{ fontSize: "10px", margin: '35px 0 0 5px' }}> / al mes</span>
            </h1>

            <p style={{ fontSize: "11px", margin: "0 5px" }}> Lorem ipsum dolor sit amet, consectetur adipiscing eli </p>

            <hr style={{ border: '1pt solid #6b6b6b62', margin: "15px 0" }} />

            <ul className="ul">
                <li className="li plans__li">Sed ut perspiciatis unde omnis iste natus. </li>
                <li className="li plans__li">But I must explain to you how all this mistaken. </li>
                <li className="li plans__li">Sed ut perspiciatis unde omnis iste natus error.</li>
            </ul>

            <div
                style={{ textAlign: 'center', marginTop: '15%' }}
            >
                <div
                    onClick={handleCambiarPlan}
                    className="datos__cambiar-plan"
                >
                    {"Cambiar a plan premiun >"}
                </div>
            </div>
        </div>
    )
}