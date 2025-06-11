
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
      subtitle: 'AI 셀프 구강체크 & 전문의 상담',
      description: 'AI 셀프 구강체크로 언제든지 내 치아 상태를 확인하고, 전문의 사진상담을 통해 정확한 진단을 받아보세요.',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['AI 셀프 구강체크', '전문의 사진상담', '매거진 (치과정보)', '단골병원 연결']
    },
    {
      title: 'HomeDen Connect',
      subtitle: '스마트 구강검진 & 진료관리',
      description: '전자문진부터 AI진단보조, 개인 맞춤형 CRM까지 디지털화된 진료 프로세스로 효율적인 환자관리를 실현합니다.',
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        '전자문진',
        'AI진단보조', 
        '디지털화 된 진단, 상담',
        '환자관리 프로세스',
        '개인 맞춤형 CRM',
        '단골과의 소통 (질문답변, 결과전송, 진료계약, 다음진료안내, 각종 서류 온라인 발급)'
      ]
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
            AI 기술로 언제 어디서나 구강 건강을 체크하고<br />
            전문의 상담부터 진료 관리까지 완벽한 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 text-4xl bg-white/90 p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-homeden-red-light font-semibold">{service.subtitle}</p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-homeden-red rounded-full mr-4 flex-shrink-0 mt-2"></span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 주요 기능 이미지 섹션 */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-2xl font-bold text-homeden-navy text-center mb-12">주요 기능</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="AI 셀프 구강체크"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-homeden-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold text-lg">AI 셀프 구강체크</p>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="전문의 상담"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-homeden-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold text-lg">전문의 상담</p>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="전자문진 & AI진단"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-homeden-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold text-lg">전자문진 & AI진단</p>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="개인 맞춤형 CRM"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-homeden-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold text-lg">개인 맞춤형 CRM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
