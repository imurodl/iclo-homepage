import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 section-padding bg-gradient-to-r from-homeden-navy to-homeden-navy/90">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">회사소개</h1>
            <p className="text-xl lg:text-2xl opacity-90">
              아이클로는 빅데이터와 인공지능 기술을 기반으로 한<br />
              대한민국 대표 디지털 헬스 케어 기업입니다
            </p>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-homeden-navy">
              우리의 비전
            </h2>
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  대한민국 인구 중 2천만명 이상이 매년 구강 질환으로 치료받고
                  있으며 그 비용 또한 연 4조원이 넘습니다. 이는 개인, 가정, 더
                  나아가 국가적인 경제 손실로 예방 및 조기 치료를 통해 비용을
                  절감할 수 있습니다. <br />
                  <br />
                  아이클로는 이와 같은 문제점들을 개선하고자 구강 케어부터 구강
                  검진까지 AI기술을 접목한 HOMEDEN을 개발하였습니다. <br />
                  <br />
                  HOMEDEN은 수십만 건의 구강질환 데이터를 AI 딥러닝 기술로 구강
                  질환 알고리즘을 생성해 가정에서 누구나 손쉽게 치아 상태를
                  체크할 수 있으며, 가까운 치과에서 조기 치료를 받을 수
                  있습니다. <br />
                  <br />
                  AI 빅데이터를 기반으로 구강 예방 분야의 혁신이 될 홈덴,
                  지금부터 만나 보세요.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/lovable-uploads/iclo_color_logo.svg"
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
            아이클로는
            <br />
            올바른 습관 형성을
            <br />
            지향합니다
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-homeden-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-homeden-navy">
                제약없는
              </h3>
              <p className="text-gray-600">
                시간과 공간에 제약 없이
                <br />
                언제 어디서나 사용할 수 있는
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-homeden-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-homeden-navy">
                경제적인
              </h3>
              <p className="text-gray-600">
                시간과 비용을 절감하는
                <br />
                합리적인 방법으로
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-homeden-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-homeden-navy">
                통합된
              </h3>
              <p className="text-gray-600">
                하나의 솔루션으로
                <br />더 많은 기능을 누릴 수 있게
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
