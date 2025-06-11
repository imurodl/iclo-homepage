
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAboutPage = location.pathname === '/about';
  
  const handleNavigateToSection = (sectionId: string) => {
    if (isAboutPage) {
      // About 페이지에서는 홈으로 이동한 후 해당 섹션으로 스크롤
      navigate('/');
      // 페이지 이동 후 스크롤하기 위해 setTimeout 사용
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // 홈 페이지에서는 바로 스크롤
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <div><strong>주식회사 아이클로</strong></div>
              <div>제주특별자치도 제주시 중앙로 14길 21</div>
              <div>사업자등록번호: 423-88-01350</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">바로가기</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigateToSection('services')}
                  className="text-gray-300 hover:text-homeden-red-light transition-colors"
                >
                  서비스 소개
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigateToSection('features')}
                  className="text-gray-300 hover:text-homeden-red-light transition-colors"
                >
                  주요 기능
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigateToSection('pricing')}
                  className="text-gray-300 hover:text-homeden-red-light transition-colors"
                >
                  가격 안내
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigateToSection('contact')}
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
                  href="mailto:info@iclocorp.com" 
                  className="hover:text-homeden-red-light transition-colors"
                >
                  info@iclocorp.com
                </a>
              </div>
              <div>
                <div className="font-semibold">대표번호</div>
                <a 
                  href="tel:070-4147-2804" 
                  className="hover:text-homeden-red-light transition-colors"
                >
                  070-4147-2804
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ICLO. All Rights Reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                쿠키 정책
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
