import React, { useState, useEffect } from 'react';
import '../styles/App.css';

import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';

const App = () => {
    const [forecasts, setForecasts] = useState([]);
    const [location, setLocation] = useState({ city: '', country: '' });
    const [selectedDate, setSelectedDate] = useState(0);
    const selectedForecast = forecasts.find(
        forecast => forecast.date === selectedDate,
    );
    useEffect(() => {
        getForecast(setSelectedDate, setForecasts, setLocation);
    }, []);
    const handleForecastSelect = date => setSelectedDate(date);
    return (
        <div className="weather-app">
            <h1>Weather app</h1>
            <LocationDetails city={location.city} country={location.country} />
            <ForecastSummaries
                forecasts={forecasts}
                onForecastSelect={handleForecastSelect}
            />
            {selectedForecast && (
                <ForecastDetails forecast={selectedForecast} />
            )}
        </div>
    );
};

export default App;
