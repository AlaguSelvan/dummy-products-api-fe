import React from 'react';

import './App.css';
import SearchBar from './SearchBar.tsx';
import CategoryFilter from './CategoryFilter.tsx';
import ProductList from './ProductList.tsx';
import { AppProvider } from './context/AppProvider.tsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoriesOverview from './Pages/CategoryOverview.tsx';
import CategoryPage from './Pages/CategoryPage.tsx';

const App = () => (
  <AppProvider>
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Product Search</h1>
          <SearchBar />
          <CategoryFilter />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProductList />
                </>
              }
            />
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  </AppProvider>
);

export default App;

