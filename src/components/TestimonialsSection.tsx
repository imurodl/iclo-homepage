
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: '김민준 원장',
      position: '서울대치과의원 대표원장',
      content: 'HomeDen의 AI 분석 기능 덕분에 환자들의 구강 상태를 더 정확하게 파악할 수 있게 되었습니다. 진료 효율성이 30% 이상 향상되었어요.',
      rating: 5,
      image: '👨‍⚕️'
    },
    {
      name: '이수진 환자',
      position: '직장인, 32세',
      content: '집에서 간편하게 구강 검진을 받을 수 있어서 정말 편리해요. 바쁜 일상 속에서도 내 치아 건강을 체크할 수 있어 안심됩니다.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: '박재현 원장',
      position: '강남스마일치과 원장',
      content: 'HomeDen Connect로 환자 관리가 정말 쉬워졌습니다. 예약부터 진료 후 관리까지 모든 과정이 체계적으로 관리되어 환자 만족도가 크게 높아졌어요.',
      rating: 5,
      image: '👨‍⚕️'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

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

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-homeden-navy mb-4">
            고객 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            실제 사용자들의 생생한 경험담을 들어보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-0 shadow-xl">
                    <CardContent className="p-8 text-center">
                      <div className="text-6xl mb-6">{testimonial.image}</div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>
                      <div>
                        <div className="font-bold text-homeden-navy text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.position}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-homeden-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
