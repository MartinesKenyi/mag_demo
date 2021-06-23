import React from 'react';

export const Plans = ({history}) => {

    const handleSuscription = () => {
        history.push("/datos");
    }
    
    return (
        <>
            <div className="plans__container">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <div className="plans__popular"> POPULAR </div>
                </div>
                <h3 className="plans__plan">Estándar</h3>
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

            <div className="plans__container">
                <h3 className="plans__plan">Premiun</h3>
                <h1 style={{ display: 'flex', fontSize: "50px", margin: "10px" }}>
                    <span style={{ fontSize: "12px", margin: "10px" }}>
                        S/
                    </span>
                    59
                    <span style={{ fontSize: "10px", margin: '35px 0 0 5px' }}> / al mes</span>
                </h1>
                <p style={{ fontSize: "11px", margin: "0 5px" }}> Lorem ipsum dolor sit amet, consectetur adipiscing eli </p>

                <hr style={{ border: '1pt solid #6b6b6b62', margin: "15px 0" }} />

                <ul className="ul"
                    style={{ marginBottom: "60px" }}
                >
                    <li className="li plans__li">Sed ut perspiciatis unde omnis iste natus. </li>
                    <li className="li plans__li">But I must explain to you how all this mistaken. </li>
                    <li className="li plans__li">Sed ut perspiciatis unde omnis iste natus error.</li>
                    <li className="li plans__li">But I must explain to you how all this mistaken. </li>
                    <li className="li plans__li">But I must explain to you how all this mistaken. </li>
                </ul>

                <div 
                    className="plans__div_button"
                >
                    <button
                        type="button"
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
