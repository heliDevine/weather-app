import { render, screen } from '@testing-library/react';
import App from '../components/App';

xtest('renders to weather app', () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather App/i);
    expect(linkElement).toBeInTheDocument();
});
