import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from './context/AppProvider.tsx';
import { API_BASE } from './Constants/API.ts';





const ProductList = () => {
    const { state, dispatch } = useAppContext();
    const { products, searchQuery, selectedCategory } = state;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = API_BASE;
                if (searchQuery) url = `${API_BASE}/search?q=${searchQuery}`;
                else if (selectedCategory) url = `${API_BASE}/category/${selectedCategory}`;

                const { data } = await axios.get(url) as unknown as { data: { products: Product[] } };
                console.log("data", data)
                dispatch({ type: 'SET_PRODUCTS', payload: data.products });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [searchQuery, selectedCategory, dispatch]);

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