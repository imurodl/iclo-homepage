import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const homedenFeatures = [
    {
      icon: "🤖",
      title: "AI 셀프 구강체크",
      description:
        "스마트폰 카메라로 간편하게 구강 상태를 체크하고 AI가 분석합니다",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "👨‍⚕️",
      title: "전문의 사진상담",
      description: "전문의가 사진을 통해 정확한 진단과 상담을 제공합니다",
      image: "/lovable-uploads/doctor-consultation.png",
    },
    {
      icon: "📰",
      title: "매거진 (치과정보)",
      description: "최신 치과 정보와 구강 건강 관련 콘텐츠를 제공합니다",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "🏥",
      title: "단골병원 연결",
      description: "나만의 단골 치과와 지속적인 관계를 유지할 수 있습니다",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const connectFeatures = [
    {
      icon: "📋",
      title: "전자문진",
      description: "디지털화된 문진표로 효율적인 환자 정보 수집",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "🔬",
      title: "AI진단보조",
      description: "AI 기술을 활용한 정확하고 빠른 진단 지원",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "💻",
      title: "디지털화 된 진단, 상담",
      description: "모든 진료 과정이 디지털로 체계화되어 관리됩니다",
      image: "/lovable-uploads/doctor-consultation.png",
    },
    {
      icon: "⚙️",
      title: "환자관리 프로세스",
      description: "체계적인 환자 관리로 진료의 연속성을 보장합니다",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "📊",
      title: "개인 맞춤형 CRM",
      description: "환자별 맞춤형 관리로 더 나은 진료 서비스 제공",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "💬",
      title: "단골과의 소통",
      description:
        "질문답변, 결과전송, 진료계약, 다음진료안내, 각종 서류 온라인 발급",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-homeden-navy mb-4">
            주요 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            치과 운영의 모든 면을 고려한 포괄적인 기능들로
            <br />더 나은 진료 환경을 만들어보세요
          </p>
        </div>

        {/* HomeDen 기능 */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold text-homeden-navy mb-2">
              HomeDen 기능
            </h3>
            <p className="text-lg text-gray-600">
              AI 셀프 구강체크 & 전문의 상담
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homedenFeatures.map((feature, index) => (
              <Card
                key={index}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3 text-2xl bg-white/90 p-2 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-homeden-navy mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* HomeDen Connect 기능 */}
        <div>
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold text-homeden-navy mb-2">
              HomeDen Connect 기능
            </h3>
            <p className="text-lg text-gray-600">스마트 구강검진 & 진료관리</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectFeatures.map((feature, index) => (
              <Card
                key={index}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3 text-2xl bg-white/90 p-2 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-homeden-navy mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
