
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-homeden-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/ad1d528e-41a2-4ff4-b97e-a08d509a8a10.png" 
                  alt="HomeDen Logo" 
                  className="w-10 h-10"
                />
              </div>
              <img 
                src="/lovable-uploads/89c4be31-d468-439e-ae57-e3642d2c8d47.png" 
                alt="HomeDen" 
                className="h-8"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI 기술과 통합 CRM으로 치과 업무의 혁신을 이끄는<br />
              HomeDen과 함께 더 나은 구강 건강 관리의 미래를 만들어가세요.
            </p>
            <div className="space-y-2 text-gray-300">
              <div><strong>iCLO 주식회사</strong></div>
              <div>서울특별시 강남구 테헤란로 123, 홈덴빌딩 10층</div>
              <div>사업자등록번호: 123-45-67890</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">바로가기</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-homeden-red-light transition-colors"
                >
                  서비스 소개
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-homeden-red-light transition-colors"
                >
                  주요 기능
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-homeden-red-light transition-colors"
                >
                  가격 안내
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-homeden-red-light transition-colors"
                >
                  문의하기
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6">연락처</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-semibold">이메일</div>
                <a 
                  href="mailto:contact@homeden.co.kr" 
                  className="hover:text-homeden-red-light transition-colors"
                >
                  contact@homeden.co.kr
                </a>
              </div>
              <div>
                <div className="font-semibold">대표번호</div>
                <a 
                  href="tel:02-1234-5678" 
                  className="hover:text-homeden-red-light transition-colors"
                >
                  02-1234-5678
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} HomeDen. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
