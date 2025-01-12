import React, { useEffect } from 'react';
import { useAppContext } from './context/AppProvider.tsx';
import { API_BASE } from './Constants/API.ts';




const CategoryFilter = () => {
    const { state, dispatch } = useAppContext();
    const { categories } = state;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(`${API_BASE}/categories`);
                dispatch({ type: 'SET_CATEGORIES', payload: data });
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [dispatch]);

    return (
        <select onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}>
            <option value="">All Categories</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter