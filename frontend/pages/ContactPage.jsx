import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import useHandleStreamResponse from "../utils/useHandleStreamResponse";
function MainComponent() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      type: '売却について',
      message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [chatMessage, setChatMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [streamingMessage, setStreamingMessage] = useState('');
    const [isChatLoading, setChatLoading] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
  
        if (!response.ok) {
          throw new Error('送信に失敗しました');
        }
  
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: '売却について',
          message: ''
        });
      } catch (err) {
        setError('送信に失敗しました。後でもう一度お試しください。');
      } finally {
        setLoading(false);
      }
    };
  
    const handleChatSubmit = async () => {
      if (!chatMessage.trim() || isChatLoading) return;
  
      const userMessage = { role: 'user', content: chatMessage };
      setChatHistory(prev => [...prev, userMessage]);
      setChatMessage('');
      setChatLoading(true);
  
      try {
        const response = await fetch('/integrations/chat-gpt/conversationgpt4', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...chatHistory, userMessage],
            stream: true
          })
        });
  
        if (!response.ok) {
          throw new Error('チャットの送信に失敗しました');
        }
  
        handleStreamResponse(response);
      } catch (error) {
        console.error(error);
        setError('チャットの送信に失敗しました');
      }
    };
  
    const handleStreamResponse = useHandleStreamResponse({
      onChunk: setStreamingMessage,
      onFinish: (message) => {
        setChatHistory(prev => [...prev, { role: 'assistant', content: message }]);
        setStreamingMessage('');
        setChatLoading(false);
      }
    });
  
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold font-noto-sans-jp text-[#2D3748] text-center mb-12">
              お問い合わせ
            </h1>
  
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
                  メールでのお問い合わせ
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-noto-sans-jp text-gray-700 mb-2">
                        お名前
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-noto-sans-jp text-gray-700 mb-2">
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-noto-sans-jp text-gray-700 mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-noto-sans-jp text-gray-700 mb-2">
                        お問い合わせ種別
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      >
                        <option>売却について</option>
                        <option>購入について</option>
                        <option>その他</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-noto-sans-jp text-gray-700 mb-2">
                        お問い合わせ内容
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg h-32"
                        required
                      ></textarea>
                    </div>
                    {error && (
                      <div className="text-red-500 font-noto-sans-jp">{error}</div>
                    )}
                    {success && (
                      <div className="text-green-500 font-noto-sans-jp">
                        送信が完了しました。
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#2C5282] text-white font-noto-sans-jp px-6 py-3 rounded-lg hover:bg-[#1A365D] transition-colors"
                    >
                      {loading ? "送信中..." : "送信する"}
                    </button>
                  </div>
                </form>
              </div>
  
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
                    LINEでのお問い合わせ
                  </h2>
                  <div className="text-center">
                    <i className="fab fa-line text-6xl text-[#00B900] mb-4"></i>
                    <p className="font-noto-sans-jp text-gray-600 mb-4">
                      LINEでもお気軽にお問い合わせいただけます
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-[#00B900] text-white font-noto-sans-jp px-6 py-3 rounded-lg hover:bg-[#009900] transition-colors"
                    >
                      <i className="fab fa-line mr-2"></i>
                      友だち追加
                    </a>
                  </div>
                </div>
  
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold font-noto-sans-jp text-[#2D3748] mb-6">
                    AIチャットサポート
                  </h2>
                  <div className="h-64 overflow-y-auto mb-4 p-4 border rounded-lg">
                    {chatHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`mb-4 ${
                          msg.role === 'user' ? 'text-right' : 'text-left'
                        }`}
                      >
                        <div
                          className={`inline-block px-4 py-2 rounded-lg ${
                            msg.role === 'user'
                              ? 'bg-[#2C5282] text-white'
                              : 'bg-gray-100'
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {streamingMessage && (
                      <div className="text-left">
                        <div className="inline-block px-4 py-2 rounded-lg bg-gray-100">
                          {streamingMessage}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1 px-4 py-2 border rounded-lg"
                      placeholder="質問を入力してください"
                    />
                    <button
                      onClick={handleChatSubmit}
                      disabled={isChatLoading}
                      className="bg-[#2C5282] text-white px-6 py-2 rounded-lg hover:bg-[#1A365D] transition-colors"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <Footer />
        </div>
      </div>
    );
  }
  export default MainComponent;
