import React from 'react';

const CTAButton = ({ children }) => (
  <a href="#contact" className="inline-block bg-[#2C5282] text-white font-noto-sans-jp px-8 py-4 rounded-lg hover:bg-[#1A365D] transition-colors">
    {children}
  </a>
);

export default CTAButton;
