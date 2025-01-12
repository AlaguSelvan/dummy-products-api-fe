import React from 'react';

import './App.css';
import SearchBar from './SearchBar.tsx';
import CategoryFilter from './CategoryFilter.tsx';
import ProductList from './ProductList.tsx';
import { AppProvider } from './context/AppProvider.tsx'

const App = () => {
  return (
    <AppProvider>
    <div className="app">
      <header>
        <h1>Product Search</h1>
        <SearchBar />
          <CategoryFilter />
      </header>
      <main>
        <ProductList />
      </main>
    </div>
    </AppProvider>
  );
}

export default App;

