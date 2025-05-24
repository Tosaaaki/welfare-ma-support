import React, { useState } from "react";
import Footer from "../components/common/Footer";
import HeroSection from "../components/home/HeroSection";
import StrengthsSection from "../components/home/StrengthsSection";
function MainComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-noto-sans-jp font-bold text-[#2C5282]">福祉M&A支援</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="font-noto-sans-jp text-gray-700 hover:text-[#2C5282]">特徴</a>
                <a href="#contact" className="font-noto-sans-jp bg-[#2C5282] text-white px-6 py-2 rounded-md hover:bg-[#1A365D]">無料相談</a>
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
              <a href="#features" className="block font-noto-sans-jp text-gray-700">特徴</a>
              <a href="#contact" className="block font-noto-sans-jp text-[#2C5282]">無料相談</a>
            </div>
          </div>
        )}
  
        <div className="pt-16">
            <HeroSection />
  
            <StrengthsSection />
  
          <section id="contact" className="py-20 bg-[#F7FAFC]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
                まずは無料相談から始めましょう
              </h2>
              <p className="text-lg font-noto-sans-jp text-gray-600 mb-8">
                経験豊富な専門家が、あなたの施設の状況に合わせた<br />最適なM&Aプランをご提案いたします
              </p>
              <a href="#contact-form" className="inline-block bg-[#2C5282] text-white font-noto-sans-jp px-8 py-4 rounded-lg text-lg hover:bg-[#1A365D] transition-colors">
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
