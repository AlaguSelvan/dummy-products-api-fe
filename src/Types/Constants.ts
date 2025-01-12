type AppState = {
    products: Product[];
    categories: string[];
    searchQuery: string;
    selectedCategory: string;
};

type Action =
    | { type: 'SET_PRODUCTS'; payload: Product[] }
    | { type: 'SET_CATEGORIES'; payload: string[] }
    | { type: 'SET_SEARCH_QUERY'; payload: string }
    | { type: 'SET_CATEGORY'; payload: string };

const initialState: AppState = {
    products: [],
    categories: [],
    searchQuery: '',
    selectedCategory: '',
};

