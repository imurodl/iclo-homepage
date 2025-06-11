
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
      description: '스마트폰으로 간편하게, 전문의와 안전하게',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'HomeDen Connect',
      subtitle: '스마트 구강검진 & 진료관리',
      description: '디지털 진료 프로세스로 효율적인 환자관리',
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-6 right-6 text-5xl bg-white/90 p-4 rounded-full shadow-lg">
                  {service.icon}
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-homeden-red-light font-semibold text-lg mb-3">{service.subtitle}</p>
                  <p className="text-white/90 text-xl font-medium">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
