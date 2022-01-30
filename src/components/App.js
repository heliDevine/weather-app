import React, { useState, useEffect } from 'react';
import '../styles/App.css';

import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';
import SearchForm from './SearchForm';

const App = () => {
    const [searchText, setSearchText] = useState('');
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
    const handleCitySearch = () => {
        getForecast(setSelectedDate, setForecasts, setLocation);
    };
    return (
        <div className="weather-app">
            {/* <h1>Weather app</h1> */}

            <LocationDetails city={location.city} country={location.country} />
            <SearchForm setSearchText />
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
