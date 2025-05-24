import React, { useState } from "react";
import Footer from "../components/common/Footer";
function MainComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const namedCases = [
      {
        name: "社会福祉法人 青空会",
        location: "東京都世田谷区",
        type: "就労継続支援B型施設",
        before: {
          users: 35,
          revenue: "9,000万円",
          staff: 12
        },
        after: {
          users: 45,
          revenue: "1.2億円",
          staff: 15
        },
        quote: "利用者様の継続的なケアを最優先に考え、信頼できる譲渡先を見つけることができました。",
        person: "前理事長 山田太郎氏"
      },
      {
        name: "NPO法人 みらい工房",
        location: "神奈川県横浜市",
        type: "就労継続支援B型施設",
        before: {
          users: 28,
          revenue: "7,500万円",
          staff: 10
        },
        after: {
          users: 40,
          revenue: "1億円",
          staff: 14
        },
        quote: "後継者不在という課題を抱えていましたが、理想的な引継ぎが実現できました。",
        person: "前理事長 佐藤美咲氏"
      }
    ];
  
    const anonymousCases = [
      {
        region: "関西圏",
        type: "就労継続支援B型施設",
        challenge: "経営者の高齢化による事業承継",
        result: "譲渡価額8,000万円での売却を実現",
        period: "4ヶ月",
        point: "従業員の雇用維持と利用者様のサービス品質維持を実現"
      },
      {
        region: "中部圏",
        type: "就労継続支援B型施設",
        challenge: "資金繰りの改善と事業の安定化",
        result: "譲渡価額1.2億円での売却を実現",
        period: "6ヶ月",
        point: "新規設備投資による施設環境の改善を実現"
      }
    ];
  
    const featuredInterview = {
      title: "利用者様の笑顔を守りながら、新たな成長を実現",
      facility: "社会福祉法人 青空会",
      interviewee: "山田太郎氏（前理事長）× 鈴木一郎氏（新理事長）",
      content: [
        {
          question: "M&Aを決断された背景を教えてください。",
          answer: "高齢化に伴い、施設の将来に不安を感じていました。利用者様への継続的なサービス提供を最優先に考え、M&Aという選択肢を選びました。"
        },
        {
          question: "M&Aプロセスで重視されたポイントは？",
          answer: "単なる経営移管ではなく、私たちの理念を理解し、さらなる発展を目指せるパートナーとの出会いを重視しました。"
        },
        {
          question: "M&A後の変化について教えてください。",
          answer: "利用者様へのサービスの質を維持しながら、新しい設備投資や職員研修の充実により、さらなるサービス向上が実現できています。"
        }
      ]
    };
  
    return (
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-noto-sans-jp font-bold text-[#2C5282]">
                  福祉M&A支援
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/service" className="font-noto-sans-jp text-gray-700 hover:text-[#2C5282]">
                  サービス案内
                </a>
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
              <a href="/service" className="block font-noto-sans-jp text-gray-700">
                サービス案内
              </a>
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
                M&A成功事例
              </h1>
              <p className="text-lg font-noto-sans-jp text-gray-600 text-center mb-12">
                実績ある福祉施設のM&A事例をご紹介します
              </p>
            </div>
          </section>
  
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                実名公開事例
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {namedCases.map((case_, index) => (
                  <div key={index} className="bg-[#F7FAFC] rounded-lg p-8 shadow-lg">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold font-noto-sans-jp text-[#2C5282] mb-2">
                        {case_.name}
                      </h3>
                      <p className="font-noto-sans-jp text-gray-600">
                        {case_.location} | {case_.type}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="font-noto-sans-jp text-gray-600 mb-2">Before</p>
                        <ul className="space-y-2">
                          <li className="font-noto-sans-jp">利用者数: {case_.before.users}名</li>
                          <li className="font-noto-sans-jp">年商: {case_.before.revenue}</li>
                          <li className="font-noto-sans-jp">職員数: {case_.before.staff}名</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="font-noto-sans-jp text-gray-600 mb-2">After</p>
                        <ul className="space-y-2">
                          <li className="font-noto-sans-jp">利用者数: {case_.after.users}名</li>
                          <li className="font-noto-sans-jp">年商: {case_.after.revenue}</li>
                          <li className="font-noto-sans-jp">職員数: {case_.after.staff}名</li>
                        </ul>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-600 mb-4 font-noto-sans-jp">
                      "{case_.quote}"
                    </blockquote>
                    <p className="text-right font-noto-sans-jp text-[#2C5282]">{case_.person}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-16 bg-[#F7FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                匿名事例
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {anonymousCases.map((case_, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold font-noto-sans-jp text-[#2C5282] mb-2">
                        {case_.region}の{case_.type}
                      </h3>
                      <p className="font-noto-sans-jp text-gray-600">課題: {case_.challenge}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="font-noto-sans-jp text-[#2C5282] font-bold">{case_.result}</p>
                      <p className="font-noto-sans-jp">期間: {case_.period}</p>
                      <p className="font-noto-sans-jp">ポイント: {case_.point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                インタビュー記事
              </h2>
              <div className="bg-[#F7FAFC] rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold font-noto-sans-jp text-[#2C5282] mb-4">
                  {featuredInterview.title}
                </h3>
                <p className="font-noto-sans-jp text-gray-600 mb-8">
                  {featuredInterview.facility}
                  <br />
                  {featuredInterview.interviewee}
                </p>
                <div className="space-y-8">
                  {featuredInterview.content.map((item, index) => (
                    <div key={index}>
                      <p className="font-bold font-noto-sans-jp text-[#2D3748] mb-2">
                        Q. {item.question}
                      </p>
                      <p className="font-noto-sans-jp text-gray-600 pl-4">
                        A. {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          <section id="contact" className="py-16 bg-[#F7FAFC]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
                あなたの施設のM&Aも成功事例に
              </h2>
              <p className="font-noto-sans-jp text-gray-600 mb-8">
                まずは無料相談から始めませんか？
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
