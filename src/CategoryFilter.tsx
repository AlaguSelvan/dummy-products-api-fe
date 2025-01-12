import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from './context/AppProvider.tsx';
import { API_BASE } from './Constants/API.ts';
import { useNavigate } from 'react-router-dom';

const CategoryFilter = () => {
    const { state, dispatch } = useAppContext();
    const { categories } = state;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(`${API_BASE}/categories`);
                console.log("Fetched categories:", data); // Debugging log
                dispatch({ type: 'SET_CATEGORIES', payload: data });
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [dispatch]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = e.target.value;
        if(selectedCategory === 'all') {
            dispatch({ type: 'SET_CATEGORY', payload: '' });
            navigate('/');
            return;
        }
        dispatch({ type: 'SET_CATEGORY', payload: selectedCategory });
        if (selectedCategory) {
            navigate(`/categories/${selectedCategory}`);
        }
    };

    return (
        <select className="category-filter" onChange={handleCategoryChange}>
            <option value="all">All Categories</option>
            {categories.map((category) =>
                typeof category === "string" ? (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ) : (
                    <option key={category.slug} value={category.slug}>
                        {category.name}
                    </option>
                )
            )}
        </select>
    );
};

export default CategoryFilter