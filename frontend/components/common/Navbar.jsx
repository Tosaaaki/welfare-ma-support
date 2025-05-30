import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// メニュー表示内容は日本語に統一
const menuItems = [
  { label: 'ホーム', path: '/' },
  { label: '売却をお考えの方', path: '/seller' },
  { label: 'サービス概要', path: '/service' },
  { label: '成功事例', path: '/success' },
  { label: 'お役立ち情報', path: '/resources' },
  { label: 'よくある質問', path: '/faq' },
  { label: 'お問い合わせ', path: '/contact' },
  { label: '法務', path: '/legal' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-noto-sans-jp font-bold text-[#2C5282]">
              福祉M&A支援
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path} className="font-noto-sans-jp text-gray-700 hover:text-[#2C5282]">
                  {item.label}
                </Link>
              ))}
            </div>
            <button onClick={toggleMenu} className="md:hidden">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-600`}></i>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed top-16 w-full bg-white shadow-lg z-40">
          <div className="px-4 py-2 space-y-3">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className="block font-noto-sans-jp text-gray-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
