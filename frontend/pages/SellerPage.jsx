import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
function MainComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [facilitySize, setFacilitySize] = useState('');
    const [annualRevenue, setAnnualRevenue] = useState('');
    const [estimatedValue, setEstimatedValue] = useState(null);
  
    const calculateEstimate = () => {
      const baseValue = parseInt(annualRevenue) * 0.8;
      const sizeMultiplier = parseInt(facilitySize) * 200000;
      const estimate = baseValue + sizeMultiplier;
      setEstimatedValue(estimate);
    };
  
    const successCases = [
      {
        title: "関東圏内のB型事業所",
        details: "利用者40名規模・年商1.2億円",
        result: "譲渡価額1億円での売却を実現",
        point: "経営者の引退に伴う案件。3ヶ月でのスピード成約"
      },
      {
        title: "近畿圏内の就労支援施設",
        details: "利用者25名規模・年商8000万円",
        result: "譲渡価額7000万円での売却を実現",
        point: "後継者不在による案件。利用者・従業員の継続雇用を実現"
      }
    ];
  
    const sellingPoints = [
      {
        title: "経営者の引退後の安心",
        description: "ご高齢による引退後も施設の継続運営が保証されます",
        icon: "fa-shield-alt"
      },
      {
        title: "適正な企業価値の実現",
        description: "業界知見を活かした価値算定で最適な売却価格を実現",
        icon: "fa-chart-line"
      },
      {
        title: "利用者様の継続的なケア",
        description: "新経営者での継続的な施設運営をサポート",
        icon: "fa-heart"
      }
    ];
  
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
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl text-gray-600`}></i>
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
          <section className="bg-[#F7FAFC] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-8">
                福祉施設の未来を守る、<br className="md:hidden"/>最適なM&Aソリューション
              </h1>
              <p className="text-lg font-noto-sans-jp text-gray-600 text-center mb-12">
                後継者問題の解決から施設の継続的な発展まで、<br className="md:hidden"/>
                専門家がトータルでサポートいたします
              </p>
            </div>
          </section>
  
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                売却のメリット
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {sellingPoints.map((point, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-[#F7FAFC]">
                    <i className={`fas ${point.icon} text-4xl text-[#2C5282] mb-4`}></i>
                    <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-3">
                      {point.title}
                    </h3>
                    <p className="font-noto-sans-jp text-gray-600">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-16 bg-[#F7FAFC]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-8">
                30秒で簡易査定
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block font-noto-sans-jp text-gray-700 mb-2">
                      利用者数（名）
                    </label>
                    <input
                      type="number"
                      name="facilitySize"
                      className="w-full px-4 py-2 border rounded-md"
                      value={facilitySize}
                      onChange={(e) => setFacilitySize(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-noto-sans-jp text-gray-700 mb-2">
                      年間売上（万円）
                    </label>
                    <input
                      type="number"
                      name="annualRevenue"
                      className="w-full px-4 py-2 border rounded-md"
                      value={annualRevenue}
                      onChange={(e) => setAnnualRevenue(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={calculateEstimate}
                    className="w-full bg-[#2C5282] text-white font-noto-sans-jp px-6 py-3 rounded-md hover:bg-[#1A365D]"
                  >
                    簡易査定を実行
                  </button>
                  {estimatedValue && (
                    <div className="text-center mt-6">
                      <p className="font-noto-sans-jp text-lg text-gray-700">
                        概算譲渡価額
                      </p>
                      <p className="text-3xl font-bold text-[#2C5282]">
                        {estimatedValue.toLocaleString()}万円
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        ※あくまで概算です。詳細は専門家による詳細な査定が必要です
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
  
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                成功事例
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {successCases.map((case_, index) => (
                  <div key={index} className="bg-[#F7FAFC] rounded-lg p-6">
                    <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-4">
                      {case_.title}
                    </h3>
                    <p className="font-noto-sans-jp text-gray-600 mb-2">
                      {case_.details}
                    </p>
                    <p className="font-noto-sans-jp text-[#2C5282] font-bold mb-2">
                      {case_.result}
                    </p>
                    <p className="font-noto-sans-jp text-gray-600">
                      {case_.point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section id="contact" className="py-16 bg-[#F7FAFC]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
                まずは無料相談から
              </h2>
              <p className="font-noto-sans-jp text-gray-600 mb-8">
                売却に関する不安や疑問点を専門家が丁寧にお答えします
              </p>
              <a
                href="#contact-form"
                className="inline-block bg-[#2C5282] text-white font-noto-sans-jp px-8 py-4 rounded-lg hover:bg-[#1A365D] transition-colors"
              >
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
