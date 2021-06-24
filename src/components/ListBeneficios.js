import React from 'react';
import PropTypes from 'prop-types';

export const ListBeneficios = ({ beneficio }) => {
    return (
        <>
            <li className="li plans__li">{beneficio}</li>
        </>
    )
}

ListBeneficios.propTypes = {
    beneficio: PropTypes.string.isRequired,
}