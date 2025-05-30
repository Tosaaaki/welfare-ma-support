import React from "react";
import Footer from "../components/common/Footer";
import HeroSection from "../components/home/HeroSection";
import StrengthsSection from "../components/home/StrengthsSection";
import Navbar from "../components/common/Navbar";
function MainComponent() {
  
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

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
