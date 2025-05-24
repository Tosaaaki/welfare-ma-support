import React from 'react';

const StrengthsSection = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold font-noto-sans-jp text-center text-[#2D3748] mb-16">選ばれる3つの理由</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-lg bg-[#F7FAFC]">
          <i className="fas fa-handshake text-4xl text-[#2C5282] mb-4"></i>
          <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-3">専門性の高いマッチング</h3>
          <p className="font-noto-sans-jp text-gray-600">就労継続支援B型施設に特化した<br />専門家による丁寧なマッチング</p>
        </div>
        <div className="text-center p-6 rounded-lg bg-[#F7FAFC]">
          <i className="fas fa-shield-alt text-4xl text-[#2C5282] mb-4"></i>
          <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-3">信頼性の高い情報</h3>
          <p className="font-noto-sans-jp text-gray-600">実績豊富な専門家による<br />厳正な審査と情報提供</p>
        </div>
        <div className="text-center p-6 rounded-lg bg-[#F7FAFC]">
          <i className="fas fa-chart-line text-4xl text-[#2C5282] mb-4"></i>
          <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-3">スピーディーな進行</h3>
          <p className="font-noto-sans-jp text-gray-600">効率的なプロセスで<br />スムーズなM&Aをサポート</p>
        </div>
      </div>
    </div>
  </section>
);

export default StrengthsSection;
