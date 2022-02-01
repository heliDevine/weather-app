import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = props => {
    const { city, country, errorMessage } = props;
    return errorMessage ? (
        <h1>{errorMessage}</h1>
    ) : (
        <h2 className="location-details">{`${city}, ${country}`}</h2>
    );
};

LocationDetails.defaultProps = {
    errorMessage: '',
};

LocationDetails.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
};

export default LocationDetails;
