import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import ListingCard from '../components/listings/ListingCard';
import { mockListings } from '../utils/mockListings';

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-noto-sans-jp font-bold text-[#2C5282]">
                福祉M&A支援
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/service" className="font-noto-sans-jp text-gray-700 hover:text-[#2C5282]">
                サービス案内
              </Link>
              <a href="#contact" className="font-noto-sans-jp bg-[#2C5282] text-white px-6 py-2 rounded-md hover:bg-[#1A365D]">
                無料相談
              </a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-600`}></i>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-16 w-full bg-white shadow-lg z-40">
          <div className="px-4 py-2 space-y-3">
            <Link to="/service" className="block font-noto-sans-jp text-gray-700">
              サービス案内
            </Link>
            <a href="#contact" className="block font-noto-sans-jp text-[#2C5282]">
              無料相談
            </a>
          </div>
        </div>
      )}

      <div className="pt-16">
        <section className="bg-[#F7FAFC] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-8">
              物件一覧
            </h1>
            <div className="grid md:grid-cols-3 gap-6">
              {mockListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
              気になる物件がございましたら
            </h2>
            <p className="font-noto-sans-jp text-gray-600 mb-8">
              お気軽に無料相談をご利用ください
            </p>
            <a href="#contact-form" className="inline-block bg-[#2C5282] text-white font-noto-sans-jp px-8 py-4 rounded-lg hover:bg-[#1A365D] transition-colors">
              無料相談を申し込む
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default MainComponent;
