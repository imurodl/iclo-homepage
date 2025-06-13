import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
  image: string;
  arrowUp?: boolean;
  arrowDown?: boolean;
  description2?: string;
}

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

  const homedenFeatures: Feature[] = [
    {
      title: "🤖 AI 셀프 구강체크",
      description:
        "스마트폰 카메라로 간편하게 구강 상태를 체크하고 AI가 분석합니다",
      image: "/lovable-uploads/homeden_1_AI.png",
    },
    {
      title: "👨‍⚕️ 전문의 사진상담",
      description: "전문의가 사진을 통해 정확한 진단과 상담을 제공합니다",
      image: "/lovable-uploads/homeden_2_chat.png",
    },
    {
      title: "📰 매거진 (치과정보)",
      description:
        "홈덴 의료진이 직접 작성하는 최신 치과 정보와 구강 건강 관련 콘텐츠를 제공합니다.",
      image: "/lovable-uploads/homeden_3_magazine.png",
    },
    {
      title: "🏥 단골치과 등록 및 연결",
      description:
        "단골치과에서의 진료기록이 자동저장되며, 주치의와 상담도 가능합니다.",
      image: "/lovable-uploads/homeden_4_home.png",
    },
  ];

  const connectFeatures: Feature[] = [
    {
      title: "📋 대기 ZERO 전자문진",
      description: "방문전 부터 환자-병원 연결이 즉시 시작됩니다.\n노쇼, 대기시간은 줄고 매출은 상승! ",
      image: "/lovable-uploads/homeden_connect_1.png",
    },
    {
      title: "🔬 AI 1차 스크리닝",
      description: "분석은 AI가, 설득은 원장님이!\n신뢰도 2배 ",
      arrowUp: true,
      description2: " → 고가 치료 전환이 한층 쉬워집니다.",
      image: "/lovable-uploads/homeden_connect_2.png",
    },
    {
      title: "💻 디지털화 된 진단, 상담",
      description: "진단 및 상담 과정을 시각화 하여 전달과정 오류 없이 \n 환자 동의률",
      arrowUp: true,
      description2: ", 스텝 업무는 줄어듭니다.",
      image: "/lovable-uploads/homeden_connect_3.png",
    },
    {
      title: "💬 진료중 환자와의 소통 강화",
      description: "각종 서류 온라인 발급, 상담내용기반 수납 및 일정 자동 안내 \n 환자 만족도UP, 데스크 업무 감소",
      image: "/lovable-uploads/homeden_connect_4.png",
    },
    {
      title: "📊 AI 기반 개인 맞춤형 CRM",
      description: "환자별 맞춤형 문자전송으로 충성환자를 만드세요.\n고객 충성도·상담 동의율",
      arrowUp: true,
      image: "/lovable-uploads/homeden_connect_5.png",
    },
    {
      title: "🔄 AI 구환 부활 프로젝트",
      description: "잊힌 환자도 AI가 다시 호출! 구환 유치율 ",
      arrowUp: true,
      description2: ", 마케팅 비용 0원\n어려운 구환 관리가 쉬워지고, 구환유치율이 향상됩니다.",
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
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-homeden-navy mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
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
            환자 유치와 매출 성장을 동시에 실현하는 올‑인‑원 플랫폼
              <br />인력은 줄이고 소통은 강화되는 디지털 진료 환경을 만들어보세요
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
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-homeden-navy mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                    {feature.description}
                    {feature.arrowUp && <FaArrowUp className="inline-block text-green-500 mx-1" />}
                    {feature.arrowDown && <FaArrowDown className="inline-block text-red-500 mx-1" />}
                    {feature.description2}
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
