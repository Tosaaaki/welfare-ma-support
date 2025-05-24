import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <span className="font-bold text-lg">Welfare M&A</span>
      <div className="space-x-4">
        <a className="text-blue-600" href="/">Home</a>
        <a className="text-blue-600" href="/contact">Contact</a>
      </div>
    </nav>
  );
}
