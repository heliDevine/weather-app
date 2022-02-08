import { render } from '@testing-library/react';
import App from '../../components/App';

describe('Weather app', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<App />);
        expect(asFragment(<App />)).toMatchSnapshot();
    });
});
