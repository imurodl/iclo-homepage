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
      image: "/lovable-uploads/homeden_1_AI.png",
    },
    {
      icon: "👨‍⚕️",
      title: "전문의 사진상담",
      description: "전문의가 사진을 통해 정확한 진단과 상담을 제공합니다",
      image: "/lovable-uploads/homeden_2_chat.png",
    },
    {
      icon: "📰",
      title: "매거진 (치과정보)",
      description:
        "홈덴 의료진이 직접 작성하는 최신 치과 정보와 구강 건강 관련 콘텐츠를 제공합니다.",
      image: "/lovable-uploads/homeden_3_magazine.png",
    },
    {
      icon: "🏥",
      title: "단골치과 등록 및 연결",
      description:
        "단골치과에서의 진료기록이 자동저장되며, 주치의와 상담도 가능합니다.",
      image: "/lovable-uploads/homeden_4_home.png",
    },
  ];

  const connectFeatures = [
    {
      icon: "📋",
      title: "전자문진",
      description: "디지털화된 문진표로 효율적인 환자 정보 수집",
      image: "/lovable-uploads/homeden_connect_1.png",
    },
    {
      icon: "🔬",
      title: "AI 진단보조로 1차검진",
      description: "AI 기술을 활용한 정확하고 빠른 진단 지원",
      image: "/lovable-uploads/homeden_connect_2.png",
    },
    {
      icon: "💻",
      title: "디지털화 된 진단, 상담",
      description: "모든 진료 과정이 디지털로 체계화되어 관리됩니다",
      image: "/lovable-uploads/homeden_connect_3.png",
    },
    {
      icon: "⚙️",
      title: "환자관리 간편 프로세스",
      description: "체계적인 환자 관리로 진료의 연속성을 보장합니다",
      image: "/lovable-uploads/homeden_connect_4.png",
    },
    {
      icon: "📊",
      title: "AI 기반 개인 맞춤형 CRM",
      description: "환자별 맞춤형 관리로 더 나은 진료 서비스 제공",
      image: "/lovable-uploads/homeden_connect_5.png",
    },
    {
      icon: "💬",
      title: "서류 전송 등 고객 소통 자동화",
      description:
        "질문답변, 결과전송, 진료계약, 다음진료안내, 각종 서류 온라인 발급",
      image: "/lovable-uploads/homeden_connect_6.png",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-homeden-navy mb-4">
            주요 기능
          </h2>
        </div>

        {/* HomeDen 기능 */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold text-homeden-navy mb-2">
              HomeDen 기능
            </h3>
            <p className="text-lg text-gray-600">
              집에서 AI로 셀프 구강체크하고,
              <br /> 전문의 상담 및 치과 연결까지 할 수 있어요
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
            <p className="text-lg text-gray-600">
              치과운영의 모든 면을 고려한 포괄적인 기능들로
              <br />더 나은 진료 환경을 만들어보세요
            </p>
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
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
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
