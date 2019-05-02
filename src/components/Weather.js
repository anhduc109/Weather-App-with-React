import React from 'react';

const Weather = props => (
    <div className="weather-div">
        { props.city && props.country && <p className="weather-line">Location:  {props.city}, {props.country}</p>}
        { props.temperature && <p className="weather-line">Temperature: {props.temperature}°C</p>}
        { props.humidity && <p className="weather-line">Humidity: {props.humidity}%</p> }
        { props.description && <p className="weather-line">Conditions: {props.description}</p> }
        { props.error && <p className="weather-line">{props.error}</p>}
    </div>
);

export default Weather;