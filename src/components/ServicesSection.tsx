
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
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

  const services = [
    {
      title: 'HomeDen',
      subtitle: 'AI 기반 구강질환 조기 탐지',
      description: '사진 업로드만으로 즉시 분석 결과를 확인하고, 전문의 수준의 정확한 진단을 받아보세요.',
      icon: '🔬',
      features: ['AI 자동 분석', '즉시 결과 확인', '정확한 진단', '24시간 이용 가능']
    },
    {
      title: 'HomeDen Connect',
      subtitle: '통합 CRM 플랫폼',
      description: '예약, 상담, 결제, 차팅, 리마인더까지 모든 업무를 하나의 플랫폼에서 관리하세요.',
      icon: '🔗',
      features: ['통합 예약 관리', '온라인 상담', '자동 결제', '스마트 차팅']
    },
    {
      title: '실시간 대시보드',
      subtitle: '환자 상태 한눈에 파악',
      description: '환자의 치료 진행 상황과 리콜 현황을 실시간으로 모니터링하고 관리하세요.',
      icon: '📊',
      features: ['실시간 모니터링', '리콜 관리', '치료 진행률', '통계 분석']
    },
    {
      title: '데이터 보안',
      subtitle: 'GDPR·HIPAA 수준 보안',
      description: '국제 표준 수준의 강화된 보안 시스템으로 환자의 개인정보를 안전하게 보호합니다.',
      icon: '🛡️',
      features: ['암호화 저장', '접근 권한 관리', '보안 감사', '규정 준수']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-homeden-navy mb-4">
            혁신적인 치과 솔루션
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 기술과 통합 CRM으로 치과 업무의 효율성을 극대화하고<br />
            환자 만족도를 높이는 완전한 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-homeden-navy mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-homeden-red">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-homeden-red rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
