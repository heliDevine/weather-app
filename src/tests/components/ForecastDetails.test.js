import React from 'react';
import { render } from '@testing-library/react';
import ForecastDetails from '../../components/ForecastDetails';
import { number } from 'prop-types';

describe('ForecastDetails', () => {
    const validProps = {
        date: 1111111,
        temperature: {
            min: 12,
            max: 22,
        },
        wind: {
            speed: 60,
            direction: 'nne',
        },
        humidity: 50,
    };

    it('renders correctly', () => {
        const { asFragment } = render(
            <ForecastDetails
                date={validProps.date}
                temperature={validProps.temperature}
                wind={validProps.wind}
                humidity={validProps.humidity}
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
it('renders correct values for props', () => {
    const { getByText, getByTestId } = render(
        <ForecastDetails
            date={validProps.date}
            temperature={validProps.temperature}
            wind={validProps.wind}
            humidity={validProps.humidity}
        />,
    );
    expect(getByText('Thu 1st Jan')).toHaveClass('forecast-detail__date');
    expect(getByTestId('forecast-icon')).toHaveClass('forecast-summary__icon');
    expect(getByText('22°C')).toHaveClass('forecast-details__temperature-max');
});
