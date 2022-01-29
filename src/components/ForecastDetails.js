import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import WeatherIcon from 'react-icons-weather';

const ForecastDetails = props => {
    const { forecasts } = props;
    return (
        <div className="forecast-details" data-testid="forecast-detail">
            <div className="forecast-detail__date">
                {moment(forecasts.date).format('ddd Do MMM')}
            </div>
            <div className="forecast-details__temperature-max">
                {forecasts.temperature.max}&deg;C
            </div>
            <div className="forecast-details__temperature-min">
                {forecasts.temperature.min}&deg;C
            </div>
            <div className="forecast-details__humidity">
                {forecasts.humidity}%
            </div>
            <div className="forecast-details__wind-speed">
                {forecasts.wind.speed}
            </div>
            <div className="forecast-details__wind-direction">
                {forecasts.wind.direction}
                {/* <WeatherIcon name="s" /> */}
            </div>
        </div>
    );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
    forecasts: PropTypes.shape({
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
