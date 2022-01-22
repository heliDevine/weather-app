import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders to weather app', () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather App/i);
    expect(linkElement).toBeInTheDocument();
});
