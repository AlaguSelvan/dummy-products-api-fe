// Types
export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
};

export type AppState = {
    products: Product[];
    categories: string[];
    searchQuery: string;
    selectedCategory: string;
};

export type Action =
    | { type: 'SET_PRODUCTS'; payload: Product[] }
    | { type: 'SET_CATEGORIES'; payload: string[] }
    | { type: 'SET_SEARCH_QUERY'; payload: string }
    | { type: 'SET_CATEGORY'; payload: string };