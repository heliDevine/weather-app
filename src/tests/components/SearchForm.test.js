import React from 'react';
import SearchForm from '../../components/SearchForm';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

// describe('SearchForm', () => {
//     const validProps = {
//         searchText: () => {},
//         setSearchText: () => {},
//         onSubmit: () => {},
//     };
//     it('renders correctly', () => {
//         const testRenderer = renderer
//             .create(
//                 <SearchForm
//                     searchText={validProps.searchText}
//                     setSearchText={validProps.setSearchText}
//                     onSubmit={validProps.onSubmit}
//                 />,
//             )
//             .toJSON();
//         expect(testRenderer).toMatchSnapshot();
//     });
// });

describe('SearchForm', () => {
    const validProps = {
        searchText: 'Stub description',
        setSearchText: () => {},
        onSubmit: () => {},
    };
    it('renders correctly', () => {
        const { asFragment } = render(
            <SearchForm
                searchText={validProps.searchText}
                setSearchText={validProps.setSearchText}
                onSubmit={validProps.onSubmit}
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
