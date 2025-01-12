import React, {useState, useEffect} from 'react'
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { API_BASE } from '../Constants/API.ts';
import { Product } from '../Types/Constants.ts';
import { useAppContext } from '../context/AppProvider.tsx';
import useDebounce from '../Hooks/useDebounce.ts';

interface ProductResponse {
    products: Product[];
}

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { state } = useAppContext();
    const { searchQuery } = state;
    const [products, setProducts] = useState<Product[]>([]);

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                let url = `${API_BASE}/category/${categoryName}`;
                if (debouncedSearchQuery) {
                    url = `${API_BASE}/search?q=${debouncedSearchQuery}`;
                }

                const { data } = await axios.get<ProductResponse>(url);
                const filteredProducts = data.products.filter(
                    (product: Product) => product.category.toLowerCase() === categoryName?.toLowerCase()
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching category products:', error);
            }
        };

        fetchCategoryProducts();
    }, [categoryName, debouncedSearchQuery]);

    return (
        <div className="category-page">
            <h2>{categoryName?.toUpperCase()}</h2>
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
        </div>
    );
};

export default CategoryPage