   import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import ProductSelection from './component/ProductSelection';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/products" element={<ProductSelection />} />
  </Routes>
);

export default App;