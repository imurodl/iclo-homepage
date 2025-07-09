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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 pt-6">
              회사소개
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              아이클로는 빅데이터와 인공지능 기술을 기반으로 한<br />
              대한민국 대표 디지털 헬스 케어 기업입니다
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start relative">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-bold text-homeden-navy mb-4">
                  CEO
                  <br />
                  Message
                </h2>
              </div>
              <div className="md:col-span-2 relative">
                <div className="md:pr-64">
                  <p className="text-lg text-gray-700 mb-4">
                    안녕하세요
                    <br />
                    주식회사 아이클로 대표이사 김준배입니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    대한민국 인구 중 2천만명 이상이 매년 구강 질환으로 치료받고
                    있으며
                    <br />그 비용 또한 연 4조원이 넘습니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    이는 개인, 가정, 더 나아가 국가적인 경제 손실로
                    <br />
                    예방 및 조기 치료를 통해 비용을 절감할 수 있습니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    아이클로는 이와 같은 문제점들을 개선하고자
                    <br />
                    구강 케어부터 구강 검진까지 AI기술을 접목한 HOMEDEN을
                    개발하였습니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    HOMEDEN은 수십만 건의 구강질환 데이터를 AI 딥러닝 기술로
                    <br />
                    구강 질환 알고리즘을 생성해 구강 카메라 하나로
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    가정에서 누구나 손쉽게 치아 상태를 체크할 수 있으며,
                    <br />
                    집에서 가까운 치과에서 조기 치료를 받을 수 있습니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    AI 빅데이터를 기반으로 구강 예방 분야의 혁신이 될 홈덴,
                    <br />
                    지금부터 만나 보세요.
                  </p>
                  <div className="flex flex-row items-center">
                    <p className="text-gray-700 font-semibold mb-2">
                      아이클로 대표이사 김준배
                    </p>
                    <img
                      src="/lovable-uploads/introduce/sign.png"
                      alt="CEO 서명"
                      className="w-32 h-auto mb-8 ml-4 md:ml-8"
                    />
                  </div>
                </div>
                <img
                  src="/lovable-uploads/introduce/ceo.png"
                  alt="CEO 김준배"
                  className="absolute bottom-0 right-0 w-56 h-auto hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-homeden-navy mb-16">
              우리가 걸어온길
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 2024 */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-homeden-red rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    2024
                  </div>
                  <div className="flex-grow bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-homeden-navy mb-4">
                      현재 진행중
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        예정 덴탈 기반 인공지능(치과 영상 판독, 구강암 판독) R&D
                        개발
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-homeden-navy rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    2023
                  </div>
                  <div className="flex-grow bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-homeden-navy mb-4">
                      홈덴 론칭
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        1월 CES 한국관 유레카 전시 참석 인공지능 홈구강검진
                        솔루션'홈덴'론칭
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        예정 치주질환 데이터 수집 및 학습 개발
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        예정 피부전동칫솔 확장 및 구강카메라 판매/플랫폼
                        수익사업
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-homeden-navy rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    2022
                  </div>
                  <div className="flex-grow bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-homeden-navy mb-4">
                      성장과 인정
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        1월 CES 창진원 K-START UP 성과우수기업 리뷰세미나 발표
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        2월 넥스트챌린지 21년도 초기창업패키지 선정기업 파이널
                        데모데이 1등
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        4월 2022 비대면 스타트업 육성사업 (비대면 의료) 최우수
                        기업 선정
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        9월 대한민국 특허 대전 인공지능 구강검진 솔루션
                        특허청장상 은상
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        10월 TIPS(팁스) 선정
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2021 */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-homeden-navy rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    2021
                  </div>
                  <div className="flex-grow bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-homeden-navy mb-4">
                      기술 개발과 파트너십
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        5월 초기창업패키지 선정 과제사업수행
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        6월 세계최초 피부미용전동칫솔 양산개발 완료
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        8월 구울담 치과병원 임상공동연구 MOU 채결
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        위데이랩 AI 연구소 소프트웨어 기술개발 MOU 채결
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        12월 단국대학교치과병원 공동임상연구개발 채결
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2020 */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-homeden-navy rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    2020
                  </div>
                  <div className="flex-grow bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-homeden-navy mb-4">
                      창업과 시작
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        3월 (주) 아이클로 법인 설립
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        9월 533와와 개인투자조합 1억원 유치
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        10월 벤처기업 인증
                      </li>
                      <li className="text-gray-600 flex items-start">
                        <span className="text-homeden-red mr-2">•</span>
                        12월 기술특허 3건 등록 완료
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
