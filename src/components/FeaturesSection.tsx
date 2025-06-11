
import React, { useEffect } from 'react';

const FeaturesSection = () => {
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

  const features = [
    {
      icon: '🤖',
      title: 'AI 자동 분석',
      description: '딥러닝 기반 정확한 구강 상태 분석'
    },
    {
      icon: '💻',
      title: '비대면 상담',
      description: '언제 어디서나 전문의와 실시간 상담'
    },
    {
      icon: '📅',
      title: '스케줄 관리',
      description: '효율적인 예약 및 일정 관리 시스템'
    },
    {
      icon: '🔔',
      title: '환자 리콜 자동화',
      description: '정기 검진 알림 및 리마인더 자동 발송'
    },
    {
      icon: '📈',
      title: '통계 보고서',
      description: '데이터 기반 진료 현황 분석 리포트'
    },
    {
      icon: '📱',
      title: '멀티 디바이스 지원',
      description: 'PC, 태블릿, 모바일 완벽 호환'
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-homeden-navy mb-4">
            주요 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            치과 운영의 모든 면을 고려한 포괄적인 기능들로<br />
            더 나은 진료 환경을 만들어보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-homeden-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
