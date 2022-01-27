import { render, screen } from '@testing-library/react';
import App from '../components/App';
import packageInfo from '../data/forecast.json';

test('renders to weather app', () => {
    render(
        <App
            forecasts={packageInfo.forecasts}
            location={packageInfo.location}
        />,
    );
    const titleElement = screen.getByText(/Weather app/i);
    expect(titleElement).toBeInTheDocument();
});
