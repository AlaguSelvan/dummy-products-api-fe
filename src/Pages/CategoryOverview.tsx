import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider.tsx';


const CategoriesOverview = () => {
    const { state } = useAppContext();

    return (
        <div className="categories-grid">
            {state.categories.map((category) =>
                typeof category === "string" ? (
                    <Link key={category} to={`/categories/${category}`} className="category-card">
                        <h3>{category}</h3>
                    </Link>
                ) : (
                    <Link key={category.slug} to={`/categories/${category.slug}`} className="category-card">
                        <h3>{category.name}</h3>
                    </Link>
                )
            )}
        </div>
    );
};

export default CategoriesOverview