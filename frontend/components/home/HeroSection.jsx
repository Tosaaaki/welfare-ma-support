import React from 'react';

const HeroSection = () => (
  <section className="relative bg-[#F7FAFC] py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
          就労継続支援B型施設の<br />M&Aに特化したプラットフォーム
        </h1>
        <p className="text-lg md:text-xl font-noto-sans-jp text-gray-600 mb-8">
          施設運営の継続と発展をサポートする<br />専門家による安心のM&Aマッチング
        </p>
        <a href="#contact" className="inline-block bg-[#2C5282] text-white font-noto-sans-jp px-8 py-4 rounded-lg text-lg hover:bg-[#1A365D] transition-colors">
          無料相談を始める
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
