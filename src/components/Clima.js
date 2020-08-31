import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    const { main, name} = resultado;

    if(!name) return null;

    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat( main.temp - kelvin ).toFixed(0)} <span> ºC </span>
                </p>

                <p>MAXIMA: 
                    { parseFloat( main.temp_max - kelvin ).toFixed(0)} <span> ºC {/* &#x2103; */}</span>
                </p>
                
                <p>MINIMA: 
                    { parseFloat( main.temp_min - kelvin ).toFixed(0)} <span> ºC {/* &#x2103; */}</span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;