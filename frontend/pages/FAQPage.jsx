import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
function MainComponent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [openQuestions, setOpenQuestions] = useState({});
  
    const categories = {
      all: "すべて",
      process: "M&Aプロセス",
      cost: "費用・価格",
      requirements: "必要条件",
      support: "サポート内容",
    };
  
    const faqData = [
      {
        category: "process",
        question: "M&Aの完了までどのくらいの期間がかかりますか？",
        answer: "通常、初期相談から完了まで4-6ヶ月程度です。ただし、案件の複雑さや条件交渉の進み方によって変動する可能性があります。",
      },
      {
        category: "cost",
        question: "M&Aにかかる費用の相場を教えてください。",
        answer: "基本的な手数料構造は、着手金0円、中間金100万円、成功報酬は譲渡価額の5%（最低300万円）となっています。詳細は個別にご相談ください。",
      },
      {
        category: "requirements",
        question: "売却のための必要条件はありますか？",
        answer: "就労継続支援B型施設として1年以上の運営実績があることが基本条件です。その他、財務状況や運営状況に関する条件は個別にご相談させていただきます。",
      },
      {
        category: "support",
        question: "売却後のサポートはありますか？",
        answer: "はい、円滑な事業承継のため、売却後も一定期間のサポートを提供しています。具体的な内容は個別案件に応じて設定いたします。",
      },
      {
        category: "process",
        question: "相談は無料ですか？",
        answer: "はい、初期相談は完全無料です。お気軽にご相談ください。",
      },
      {
        category: "requirements",
        question: "施設の規模が小さいのですが、M&Aは可能ですか？",
        answer: "施設の規模に関わらずご相談は承っております。小規模施設の場合でも、地域性や運営状況などを総合的に判断させていただきます。",
      },
    ];
  
    const toggleQuestion = (index) => {
      setOpenQuestions((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
  
    const filteredFAQs = faqData.filter((faq) => {
      const matchesSearch = faq.question
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-8">
              よくある質問
            </h1>
  
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="質問を検索"
                  className="w-full px-4 py-2 border rounded-lg pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>
            </div>
  
            <div className="mb-8 flex flex-wrap gap-2">
              {Object.entries(categories).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 py-2 rounded-full font-noto-sans-jp text-sm ${
                    activeCategory === key
                      ? "bg-[#2C5282] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
  
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-noto-sans-jp text-[#2D3748] flex items-center">
                      <span className="text-[#2C5282] font-bold mr-2">Q.</span>
                      {faq.question}
                    </span>
                    <i
                      className={`fas fa-chevron-${
                        openQuestions[index] ? "up" : "down"
                      } text-[#2C5282]`}
                    ></i>
                  </button>
                  {openQuestions[index] && (
                    <div className="px-6 py-4 bg-[#F7FAFC]">
                      <p className="font-noto-sans-jp text-gray-600 flex items-start">
                        <span className="text-[#2C5282] font-bold mr-2">A.</span>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
  
            {filteredFAQs.length === 0 && (
              <div className="text-center py-8">
                <p className="font-noto-sans-jp text-gray-600">
                  該当する質問が見つかりませんでした。
                </p>
              </div>
            )}
          </div>
  
          <Footer />
        </div>
      </div>
    );
  }
  export default MainComponent;
