import React from 'react';

export const FormDatos = ({ history }) => {

    const handlePagar = () => {
        history.push("/confirmacion");
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
                    name="title"
                    className="datos__input"
                // value={title}
                // onChange={handleInputChange}
                />

            </fieldset>

            <fieldset className="datos__fieldset">
                <label
                    className="datos__label"
                >
                    Número de tarjeta
                </label>
                <input
                    type="text"
                    placeholder=".... .... .... ...."
                    autoComplete="off"
                    name="title"
                    className="datos__input"
                // value={title}
                // onChange={handleInputChange}
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
                            type="text"
                            placeholder="MM/AA"
                            autoComplete="off"
                            name="title"
                            className="datos__input"
                            style={{ width: '60%' }}
                        // value={title}
                        // onChange={handleInputChange}
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
                            type="text"
                            autoComplete="off"
                            name="title"
                            className="datos__input"
                            style={{ width: '60%' }}
                        // value={title}
                        // onChange={handleInputChange}
                        />
                    </fieldset>
                </div>
            </div>

            <div
                style={{ textAlign: 'center' }}
            >
                <button
                    className="button"
                    onClick={handlePagar}
                >
                    Pagar S/.29.00
                </button>
            </div>
        </>
    )
}
