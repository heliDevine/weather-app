import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

import LocationDetails from './LocationDetails';

const App = ({ location }) => {
    const { city, country } = location;
    return <LocationDetails city={city} country={country} />;
};
App.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
};

export default App;
