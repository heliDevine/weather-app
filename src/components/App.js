import '../styles/App.css';
import LocationDetails from './LocationDetails';
import PropTypes from 'prop-types';

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
