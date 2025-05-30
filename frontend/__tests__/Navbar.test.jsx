import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import PropertyListingPage from '../pages/PropertyListingPage';

test('navbar link navigates to property listing page', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>\
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/property-listings" element={<PropertyListingPage />} />
      </Routes>
    </MemoryRouter>
  );

  const link = screen.getByRole('link', { name: '物件一覧' });
  expect(link).toBeInTheDocument();

  await userEvent.click(link);
  expect(screen.getByText('物件一覧ページ')).toBeInTheDocument();
});
