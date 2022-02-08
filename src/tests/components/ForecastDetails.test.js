import React from 'react';
import ForecastDetails from '../../components/ForecastDetails';
import renderer from 'react-test-renderer';

describe('ForecastDetails', () => {
    const validProps = {
        forecast: {
            date: 1111111,
            humidity: 50,
            temperature: {
                min: 12,
                max: 22,
            },
            wind: {
                speed: 60,
                direction: 'nne',
            },
        },
    };
    it('renders correctly', () => {
        const testRenderer = renderer
            .create(<ForecastDetails forecast={validProps.forecast} />)
            .toJSON();
        expect(testRenderer).toMatchSnapshot();
    });
});
