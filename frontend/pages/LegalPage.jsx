import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
function MainComponent() {
    const [activeTab, setActiveTab] = useState('terms');
  
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-6 py-2 rounded-lg font-noto-sans-jp ${
                  activeTab === 'terms' ? 'bg-[#2C5282] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                利用規約
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-6 py-2 rounded-lg font-noto-sans-jp ${
                  activeTab === 'privacy' ? 'bg-[#2C5282] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                プライバシーポリシー
              </button>
              <button
                onClick={() => setActiveTab('commerce')}
                className={`px-6 py-2 rounded-lg font-noto-sans-jp ${
                  activeTab === 'commerce' ? 'bg-[#2C5282] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                特定商取引法に基づく表記
              </button>
            </div>
  
            <div className="bg-white rounded-lg shadow-lg p-8">
              {activeTab === 'terms' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">利用規約</h1>
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748]">第1条（適用）</h2>
                    <p className="font-noto-sans-jp text-gray-600">
                      本規約は、当社が提供する福祉M&A支援サービスの利用に関する条件を定めるものです。
                    </p>
                  </section>
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748]">第2条（サービス内容）</h2>
                    <p className="font-noto-sans-jp text-gray-600">
                      当社は、就労継続支援B型施設のM&Aに関する情報提供及びマッチングサービスを提供します。
                    </p>
                  </section>
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748]">第3条（禁止事項）</h2>
                    <p className="font-noto-sans-jp text-gray-600">
                      ユーザーは、本サービスの利用にあたり、以下の行為を行ってはならないものとします。
                    </p>
                  </section>
                </div>
              )}
  
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">プライバシーポリシー</h1>
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748]">個人情報の取り扱いについて</h2>
                    <p className="font-noto-sans-jp text-gray-600">
                      当社は、個人情報保護法及び関連法令を遵守し、お客様の個人情報を適切に取り扱います。
                    </p>
                  </section>
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748]">収集する情報</h2>
                    <p className="font-noto-sans-jp text-gray-600">
                      当社が収集する個人情報には、氏名、連絡先、所属組織等が含まれます。
                    </p>
                  </section>
                </div>
              )}
  
              {activeTab === 'commerce' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">特定商取引法に基づく表記</h1>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b py-4">
                      <div className="font-bold font-noto-sans-jp text-[#2D3748]">事業者名</div>
                      <div className="md:col-span-2 font-noto-sans-jp text-gray-600">株式会社福祉M&A支援</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b py-4">
                      <div className="font-bold font-noto-sans-jp text-[#2D3748]">代表者</div>
                      <div className="md:col-span-2 font-noto-sans-jp text-gray-600">代表取締役 山田太郎</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b py-4">
                      <div className="font-bold font-noto-sans-jp text-[#2D3748]">所在地</div>
                      <div className="md:col-span-2 font-noto-sans-jp text-gray-600">
                        〒100-0001<br />
                        東京都千代田区千代田1-1-1
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
  
          <Footer />
        </div>
      </div>
    );
  }
  export default MainComponent;
