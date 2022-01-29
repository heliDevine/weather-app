import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
// import { location, forecasts } from './data/forecast.json';

// ReactDOM.render(
//     <React.StrictMode>
//         <App forecasts={forecasts} location={location.location} />
//     </React.StrictMode>,
//     document.getElementById('root'),
// );

// import packageInfo from './data/forecast.json';

ReactDOM.render(
    <React.StrictMode>
        <App
        // forecasts={packageInfo.forecasts}
        // location={packageInfo.location}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);
