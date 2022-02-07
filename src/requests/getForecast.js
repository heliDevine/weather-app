/* eslint-disable no-console */
import axios from 'axios';
import React from 'react';

const getForecast = (
    setErrorMessage,
    searchText,
    setSelectedDate,
    setForecasts,
    setLocation,
) => {
    let endpoint = 'https://mcr-codes-weather-app.herokuapp.com/forecast';
    if (searchText) {
        endpoint += `?city=${searchText}`;
    }
    setErrorMessage('');
    return axios
        .get(endpoint)
        .then(response => {
            setSelectedDate(response.data.forecasts[0].date);
            setForecasts(response.data.forecasts);
            setLocation(response.data.location);
        })
        .catch(error => {
            const { status } = error.response;
            if (status === 404) {
                // setErrorMessage('City cannot be found, please try again!');

                setErrorMessage(
                    <p className="errorMessage">
                        City cannot be found, please try again!{' '}
                    </p>,
                );

                console.error('Location is not valid', error);
            }
            if (status === 500) {
                setErrorMessage('Oops, server error, try again later.');
                console.error('Server error', error);
            }
        });
};

export default getForecast;
