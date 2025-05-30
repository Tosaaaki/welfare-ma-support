import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BuyerPage from '../pages/BuyerPage';
import SellerPage from '../pages/SellerPage';
import ContactPage from '../pages/ContactPage';
import FAQPage from '../pages/FAQPage';
import LegalPage from '../pages/LegalPage';
import ResourcesPage from '../pages/ResourcesPage';
import ServiceOverviewPage from '../pages/ServiceOverviewPage';
import SuccessStoriesPage from '../pages/SuccessStoriesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/service" element={<ServiceOverviewPage />} />
        <Route path="/success" element={<SuccessStoriesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
