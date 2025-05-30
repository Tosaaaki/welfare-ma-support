import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
function MainComponent() {
  
    const benefits = [
      {
        title: "即戦力の人材確保",
        description: "経験豊富なスタッフと既存の利用者基盤をそのまま継承",
        icon: "fa-users",
      },
      {
        title: "収益の即時実現",
        description: "運営実績のある施設で、初月から安定した収益を確保",
        icon: "fa-chart-line",
      },
      {
        title: "行政認可の円滑な継承",
        description: "既存の認可を活用し、新規立ち上げよりもスピーディに事業展開",
        icon: "fa-file-alt",
      }
    ];
  
    const roiData = {
      initialInvestment: "1億円",
      annualRevenue: "1.2億円",
      annualProfit: "2,400万円",
      paybackPeriod: "4.2年",
      roi: "24%"
    };
  
    const acquisitionProcess = [
      {
        step: "初期相談",
        description: "ご希望条件のヒアリングと物件情報の提供",
        duration: "1-2週間"
      },
      {
        step: "条件交渉",
        description: "売り手との条件すり合わせと価格交渉",
        duration: "2-3週間"
      },
      {
        step: "デューデリジェンス",
        description: "財務・法務・業務内容の精査",
        duration: "3-4週間"
      },
      {
        step: "契約締結",
        description: "最終契約の締結と事業譲渡",
        duration: "2-3週間"
      }
    ];
  
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-16">
          <section className="bg-[#F7FAFC] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-8">
                M&Aによる福祉施設の取得で<br className="md:hidden" />事業を加速
              </h1>
              <p className="text-lg font-noto-sans-jp text-gray-600 text-center mb-12">
                実績ある施設の取得で、即戦力の経営基盤を確保
              </p>
            </div>
          </section>
  
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                買収のメリット
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-[#F7FAFC]">
                    <i className={`fas ${benefit.icon} text-4xl text-[#2C5282] mb-4`}></i>
                    <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-noto-sans-jp text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-16 bg-[#F7FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                投資収益の具体例
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <p className="font-noto-sans-jp text-gray-600">初期投資額</p>
                    <p className="text-2xl font-bold text-[#2C5282]">{roiData.initialInvestment}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-noto-sans-jp text-gray-600">年間売上高</p>
                    <p className="text-2xl font-bold text-[#2C5282]">{roiData.annualRevenue}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-noto-sans-jp text-gray-600">年間利益</p>
                    <p className="text-2xl font-bold text-[#2C5282]">{roiData.annualProfit}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-block bg-[#F7FAFC] rounded-lg px-8 py-4">
                    <p className="font-noto-sans-jp text-gray-600">投資回収期間</p>
                    <p className="text-3xl font-bold text-[#2C5282]">{roiData.paybackPeriod}</p>
                  </div>
                  <div className="inline-block bg-[#F7FAFC] rounded-lg px-8 py-4 ml-8">
                    <p className="font-noto-sans-jp text-gray-600">投資利益率（ROI）</p>
                    <p className="text-3xl font-bold text-[#2C5282]">{roiData.roi}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
                買収プロセス
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {acquisitionProcess.map((process, index) => (
                  <div key={index} className="relative">
                    <div className="text-center p-6 rounded-lg bg-[#F7FAFC]">
                      <h3 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-3">
                        {process.step}
                      </h3>
                      <p className="font-noto-sans-jp text-[#2C5282] mb-2">
                        {process.duration}
                      </p>
                      <p className="font-noto-sans-jp text-gray-600">
                        {process.description}
                      </p>
                    </div>
                    {index < acquisitionProcess.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <i className="fas fa-chevron-right text-[#2C5282]"></i>
                      </div>
                    )}
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
                ご希望の条件に合った物件情報をご提供いたします
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
