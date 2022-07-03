import React from "react";

const Weather = props => (
    <div>
        { props.city &&
            <div>
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
            </div>
        }
    </div>
);

export default Weather;