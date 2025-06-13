
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 99000,
      annualPrice: 990000,
      description: '소규모 치과를 위한 기본 패키지',
      features: [
        'AI 구강 분석 (월 100회)',
        '스마트 검진 전체 프로세스 (검진, 치료계획수립, 상담, 환자 앱전송)',
        '주치의 상담',
        '홈덴 앱 내 단골치과 노출(반경 5km 이내)',
        '기본 통계 리포트',
        '이메일 지원'
      ],
      popular: false
    },
    {
      name: 'Pro',
      monthlyPrice: 199000,
      annualPrice: 1990000,
      description: '중규모 치과를 위한 전문가 패키지',
      features: [
        'AI 구강 분석 (무제한)',
        '스마트 검진 전체 프로세스 (검진, 치료계획수립, 상담, 환자 앱전송)',
        '주치의 상담',
        '홈덴 앱 내 단골치과 노출(반경 10km 이내)',
        '전자문진',
        'AI 기반 환자 맞춤형 CRM(이벤트 생성 및 맞춤 문자)',
        '기본 통계 리포트',
        '이메일 지원'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 399000,
      annualPrice: 3990000,
      description: '대형 치과 및 체인점을 위한 엔터프라이즈',
      features: [
        'Pro 플랜의 모든 기능',
        '홈덴 앱 내 전문의 상담 인증치과 노출 및 우선 배정',
        '멀티 지점 관리',
        '커스텀 브랜딩',
        'API 연동',
        '전화 지원',
        '맞춤형 교육 프로그램'
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-homeden-navy mb-4">
            가격 안내
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            치과 규모에 맞는 최적의 플랜을 선택하세요
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isAnnual ? 'text-homeden-navy' : 'text-gray-500'}`}>
              월간 결제
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-homeden-red' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-homeden-navy' : 'text-gray-500'}`}>
              연간 결제
            </span>
            {isAnnual && (
              <span className="bg-homeden-red text-white px-2 py-1 rounded-full text-sm font-medium">
                20% 할인
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`animate-on-scroll relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-homeden-red shadow-2xl scale-105' 
                  : 'border-gray-200 shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-homeden-red text-white px-4 py-2 rounded-full text-sm font-medium">
                    가장 인기
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-homeden-navy">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {plan.description}
                </CardDescription>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-homeden-navy">
                    ₩{(isAnnual ? Math.round(plan.annualPrice / 12 / 100) * 100 : plan.monthlyPrice).toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2">/월</span>
                  {isAnnual && (
                    <div className="text-sm text-gray-500 mt-1">
                      연간 ₩{plan.annualPrice.toLocaleString()} (20% 할인)
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-homeden-red rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-homeden-red hover:bg-homeden-red-light text-white'
                      : 'border-2 border-homeden-navy text-homeden-navy hover:bg-homeden-navy hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? '문의하기' : '시작하기'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
