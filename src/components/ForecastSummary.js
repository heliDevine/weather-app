import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/ForecastSummary.css';

const ForecastSummary = props => {
    const { date, temperature, description, icon, onSelect } = props;
    return (
        <div className="forecast-summary" data-testid="forecast-summary">
            <div className="forecast-summary__date">
                {moment(date).format('ddd Do MMM')}
            </div>

            <div className="forecast-summary__icon" data-testid="forecast-icon">
                <WeatherIcon name="owm" iconId={icon.toString()} />
            </div>
            <div className="forecast-summary__temperature">
                {temperature.max}&deg;C
            </div>
            <div className="forecast-summary__description">{description}</div>
            <button
                className="details-button"
                type="button"
                onClick={() => onSelect(date)}
            >
                more details
            </button>
        </div>
    );
};

export default ForecastSummary;

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
};
