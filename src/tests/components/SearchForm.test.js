import React from 'react';
import SearchForm from '../../components/SearchForm';
import { render, screen } from '@testing-library/react';

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

    it('Button renders with correct text', () => {
        render(
            <SearchForm
                searchText={validProps.searchText}
                setSearchText={validProps.setSearchText}
                onSubmit={validProps.onSubmit}
            />,
        );
        const buttonElement = screen.getByText('Search');
        expect(buttonElement).toBeInTheDocument();
    });
});
