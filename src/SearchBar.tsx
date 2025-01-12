import React, { useEffect } from 'react';
import { useAppContext } from './context/AppProvider.tsx';



const SearchBar = () => {
    const { dispatch } = useAppContext();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
    };

    return <input type="text" placeholder="Search products..." onChange={handleSearch} />;
};

export default SearchBar