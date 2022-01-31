import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import WeatherIcon from 'react-icons-weather';

const ForecastDetails = ({ forecast }) => {
    const { date, temperature, humidity, wind } = forecast;
    return (
        <div className="forecast-details" data-testid="forecast-detail">
            <div className="forecast-detail__date">
                {moment(date).format('ddd Do MMM')}
            </div>
            <div className="forecast-details__temperature-max">
                {temperature.max}&deg;C
            </div>
            <div className="forecast-details__temperature-min">
                {temperature.min}&deg;C
            </div>
            <div className="forecast-details__humidity">{humidity}%</div>
            <div className="forecast-details__wind-speed">{wind.speed}mph</div>
            <div className="forecast-details__wind-direction">
                wind direction:
                {wind.direction}
                {/* <WeatherIcon name="s" /> */}
            </div>
        </div>
    );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        temperature: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
        }).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number,
            direction: PropTypes.string,
        }).isRequired,
    }).isRequired,
};
