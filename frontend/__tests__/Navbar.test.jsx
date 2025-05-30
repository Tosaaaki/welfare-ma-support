import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
// Property Listings のリンクが表示されないことを確認
test('property listings link is not visible', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </MemoryRouter>
  );

  const link = screen.queryByRole('link', { name: '物件一覧' });
  expect(link).not.toBeInTheDocument();
});
