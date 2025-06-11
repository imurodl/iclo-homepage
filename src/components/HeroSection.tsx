
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/lovable-uploads/1.png',
      alt: '현대적인 치과 진료실'
    },
    {
      image: '/lovable-uploads/doctor-consultation.png',
      alt: '치과 의사가 진료하는 모습'
    },
    {
      image: '/lovable-uploads/709a9408-cb20-4564-b2c9-3b5f957e1fa6.png',
      alt: '환자가 노트북으로 상담받는 모습'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `linear-gradient(135deg, rgba(44, 62, 80, 0.8) 0%, rgba(58, 79, 99, 0.8) 100%), url(${slide.image})`
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI로 시작하는<br />
            <span className="text-homeden-red-light">스마트 구강 검진</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            홈덴과 홈덴 커넥트로 환자와 치과를<br />
            완벽하게 연결하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-homeden-red hover:bg-homeden-red-light text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              무료 데모 신청
            </Button>
            <Button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="lg"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-homeden-navy px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              서비스 알아보기
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-homeden-red' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
