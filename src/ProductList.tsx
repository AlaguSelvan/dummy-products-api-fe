import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from './context/AppProvider.tsx';
import { API_BASE } from './Constants/API.ts';
import useDebounce from './Hooks/useDebounce.ts';


const ProductList = () => {
    const { state, dispatch } = useAppContext();
    const { products, searchQuery, selectedCategory } = state;

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = API_BASE;

                // Adjust URL based on search query and category selection
                if (debouncedSearchQuery && selectedCategory) {
                    url = `${API_BASE}/search?q=${debouncedSearchQuery}&category=${selectedCategory}`;
                } else if (debouncedSearchQuery) {
                    url = `${API_BASE}/search?q=${debouncedSearchQuery}`;
                } else if (selectedCategory) {
                    url = `${API_BASE}/category/${selectedCategory}`;
                }

                const { data } = await axios.get(url);
                dispatch({ type: 'SET_PRODUCTS', payload: data.products });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [debouncedSearchQuery, selectedCategory, dispatch]);

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                </div>
            ))}
        </div>
    );
};



export default ProductList;