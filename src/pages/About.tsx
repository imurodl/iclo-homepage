
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 section-padding bg-gradient-to-r from-homeden-navy to-homeden-navy/90">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              회사소개
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              HomeDen과 함께하는 스마트한 부동산 관리
            </p>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-homeden-navy">
              우리의 비전
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  HomeDen은 부동산 관리의 새로운 패러다임을 제시합니다. 
                  첨단 기술과 사용자 중심의 디자인을 통해 복잡한 부동산 업무를 
                  간단하고 효율적으로 만들어갑니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  우리는 모든 사용자가 쉽게 접근할 수 있는 직관적인 솔루션을 
                  제공하여 부동산 관리의 디지털 혁신을 이끌어가고 있습니다.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80" 
                  alt="Company Vision" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-homeden-navy">
            핵심 가치
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-homeden-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-homeden-navy">혁신</h3>
              <p className="text-gray-600">
                끊임없는 기술 혁신을 통해 더 나은 서비스를 제공합니다.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-homeden-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-homeden-navy">신뢰</h3>
              <p className="text-gray-600">
                투명하고 정확한 정보로 고객의 신뢰를 얻어갑니다.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-homeden-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-homeden-navy">편의성</h3>
              <p className="text-gray-600">
                사용자 경험을 최우선으로 하는 편리한 서비스를 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-homeden-navy">
            팀 소개
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              HomeDen은 부동산, 기술, 디자인 분야의 전문가들이 모여 
              만든 혁신적인 팀입니다. 각자의 전문성을 바탕으로 
              최고의 서비스를 제공하기 위해 노력하고 있습니다.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-homeden-navy">개발팀</h3>
                <p className="text-gray-600">최신 기술로 안정적인 플랫폼 구축</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-homeden-navy">영업팀</h3>
                <p className="text-gray-600">고객 맞춤형 솔루션 제공</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
