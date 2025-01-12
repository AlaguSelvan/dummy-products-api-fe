import React, {useState, useEffect} from 'react'
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { API_BASE } from '../Constants/API.ts';
import { Product } from '../Types/Constants.ts';


const CategoryPage = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                const { data } = await axios.get(`${API_BASE}/category/${categoryName}`) as unknown as { data: { products: Product[] } };
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching category products:', error);
            }
        };

        fetchCategoryProducts();
    }, [categoryName]);

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