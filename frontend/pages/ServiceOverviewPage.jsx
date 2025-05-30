import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
function MainComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const processSteps = [
      {
        title: "初期相談",
        duration: "1-2週間",
        description: "現状の課題や今後の展望についてヒアリングを行い、M&Aの方向性を検討します",
        icon: "fa-comments"
      },
      {
        title: "企業価値評価",
        duration: "2-3週間",
        description: "財務状況や運営状況を詳細に分析し、適正な企業価値を算出します",
        icon: "fa-calculator"
      },
      {
        title: "買い手候補選定",
        duration: "1-2ヶ月",
        description: "最適な買い手候補を複数選定し、条件交渉を進めます",
        icon: "fa-users"
      },
      {
        title: "条件交渉",
        duration: "1-2ヶ月",
        description: "両者の希望条件をすり合わせ、最適な条件での合意を目指します",
        icon: "fa-handshake"
      },
      {
        title: "契約締結",
        duration: "2-3週間",
        description: "法務デューデリジェンスを実施し、最終契約を締結します",
        icon: "fa-file-signature"
      }
    ];
  
    const feeStructure = [
      {
        type: "着手金",
        amount: "0円",
        note: "初期費用は一切かかりません"
      },
      {
        type: "中間金",
        amount: "100万円",
        note: "買い手候補との条件交渉開始時"
      },
      {
        type: "成功報酬",
        amount: "譲渡価額の5%",
        note: "最低報酬額：300万円"
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
                <Link to="/" className="font-noto-sans-jp text-gray-700 hover:text-[#2C5282]">
                  ホーム
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
              <Link to="/" className="block font-noto-sans-jp text-gray-700">
                ホーム
              </Link>
              <a href="#contact" className="block font-noto-sans-jp text-[#2C5282]">
                無料相談
              </a>
            </div>
          </div>
        )}
  
        <div className="pt-16">
          <section className="bg-[#F7FAFC] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-8">
                M&Aサービス概要
              </h1>
              <p className="text-lg font-noto-sans-jp text-gray-600 text-center mb-12">
                就労継続支援B型施設の円滑な事業承継をサポートします
              </p>
  
              <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-8 text-center">
                  M&Aプロセス
                </h2>
                <div className="grid md:grid-cols-5 gap-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative text-center p-4">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-[#2C5282] rounded-full flex items-center justify-center">
                          <i className={`fas ${step.icon} text-2xl text-white`}></i>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm font-noto-sans-jp text-[#2C5282] mb-2">
                        {step.duration}
                      </p>
                      <p className="text-sm font-noto-sans-jp text-gray-600">
                        {step.description}
                      </p>
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                          <i className="fas fa-chevron-right text-[#2C5282]"></i>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-8 text-center">
                  手数料モデル
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {feeStructure.map((fee, index) => (
                    <div key={index} className="text-center p-6 bg-[#F7FAFC] rounded-lg">
                      <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-3">
                        {fee.type}
                      </h3>
                      <p className="text-2xl font-bold font-noto-sans-jp text-[#2C5282] mb-2">
                        {fee.amount}
                      </p>
                      <p className="text-sm font-noto-sans-jp text-gray-600">
                        {fee.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="text-center">
                <a href="#contact" className="inline-block bg-[#2C5282] text-white font-noto-sans-jp px-8 py-4 rounded-lg text-lg hover:bg-[#1A365D] transition-colors">
                  無料相談を申し込む
                </a>
              </div>
            </div>
          </section>
  
          <Footer />
        </div>
      </div>
    );
  }
  export default MainComponent;
