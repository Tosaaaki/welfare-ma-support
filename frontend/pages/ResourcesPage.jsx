import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
function MainComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      role: ''
    });
  
    const ebooks = [
      {
        title: "福祉施設M&A完全ガイド",
        description: "M&Aプロセスの詳細解説と成功のポイント",
        image: "/images/ebook-guide.jpg",
        pages: "45",
      },
      {
        title: "事業承継の実務ハンドブック",
        description: "円滑な事業承継のための準備と実践ステップ",
        image: "/images/ebook-succession.jpg",
        pages: "38",
      }
    ];
  
    const webinars = [
      {
        title: "成功する福祉施設M&Aの秘訣",
        date: "2025年2月15日",
        duration: "60分",
        speaker: "山田太郎",
        role: "M&Aアドバイザー",
        image: "/images/webinar-success.jpg"
      },
      {
        title: "施設評価の重要ポイント",
        date: "2025年1月20日",
        duration: "45分",
        speaker: "佐藤美咲",
        role: "公認会計士",
        image: "/images/webinar-valuation.jpg"
      }
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
    };
  
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
                無料資料ダウンロード
              </h1>
              <p className="text-lg font-noto-sans-jp text-gray-600 text-center mb-12">
                福祉施設M&Aに関する実践的な知識とノウハウをご提供
              </p>
            </div>
          </section>
  
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                無料eBook
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {ebooks.map((ebook, index) => (
                  <div key={index} className="bg-[#F7FAFC] rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <img src={ebook.image} alt={ebook.title} className="w-[200px] h-[280px] object-cover rounded-lg" />
                      <div>
                        <h3 className="text-xl font-bold font-noto-sans-jp text-[#2C5282] mb-4">{ebook.title}</h3>
                        <p className="font-noto-sans-jp text-gray-600 mb-4">{ebook.description}</p>
                        <p className="font-noto-sans-jp text-gray-500 mb-6">{ebook.pages}ページ</p>
                        <button className="bg-[#2C5282] text-white font-noto-sans-jp px-6 py-2 rounded-lg hover:bg-[#1A365D] transition-colors">
                          ダウンロード
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-16 bg-[#F7FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                ウェビナーアーカイブ
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {webinars.map((webinar, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                    <img src={webinar.image} alt={webinar.title} className="w-full h-[200px] object-cover rounded-lg mb-6" />
                    <h3 className="text-xl font-bold font-noto-sans-jp text-[#2C5282] mb-4">{webinar.title}</h3>
                    <div className="space-y-2 mb-6">
                      <p className="font-noto-sans-jp text-gray-600"><i className="fas fa-calendar-alt mr-2"></i>{webinar.date}</p>
                      <p className="font-noto-sans-jp text-gray-600"><i className="fas fa-clock mr-2"></i>{webinar.duration}</p>
                      <p className="font-noto-sans-jp text-gray-600"><i className="fas fa-user mr-2"></i>{webinar.speaker} ({webinar.role})</p>
                    </div>
                    <button className="bg-[#2C5282] text-white font-noto-sans-jp px-6 py-2 rounded-lg hover:bg-[#1A365D] transition-colors">
                      視聴する
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section id="contact" className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-8">
                資料ダウンロード申込み
              </h2>
              <form onSubmit={handleSubmit} className="bg-[#F7FAFC] rounded-lg p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block font-noto-sans-jp text-gray-700 mb-2">お名前</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-noto-sans-jp text-gray-700 mb-2">メールアドレス</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-noto-sans-jp text-gray-700 mb-2">会社名</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-2 rounded-lg border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-noto-sans-jp text-gray-700 mb-2">役職</label>
                    <input
                      type="text"
                      name="role"
                      className="w-full px-4 py-2 rounded-lg border"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2C5282] text-white font-noto-sans-jp px-8 py-4 rounded-lg hover:bg-[#1A365D] transition-colors"
                  >
                    資料をダウンロード
                  </button>
                </div>
              </form>
            </div>
          </section>
  
          <Footer />
        </div>
      </div>
    );
  }
  export default MainComponent;
