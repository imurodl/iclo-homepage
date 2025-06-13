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
      description:
        "방문전 부터 환자-병원 연결이 즉시 시작됩니다.\n노쇼, 대기시간은 줄고 매출은 상승! ",
      image: "/lovable-uploads/homeden_connect_1.png",
    },
    {
      title: "🔬 AI 1차 스크리닝",
      description:
        "분석은 AI가, 설득은 원장님이!\n신뢰도는 2배 UP, 고가 치료전환이 한층 쉬워집니다.",
      image: "/lovable-uploads/homeden_connect_2.png",
    },
    {
      title: "💻 디지털화 된 진단, 상담",
      description:
        "진단 및 상담과정을 시각화하여 오류 없는 전달과정.\n직원 업무는 줄이고, 환자 동의율은 높이세요!",
      image: "/lovable-uploads/homeden_connect_3.png",
    },
    {
      title: "💬 진료중 환자와의 소통 강화",
      description:
        "각종 서류 온라인 발송, 상담내용 기반 수납/일정 자동 안내.\n환자 만족도는 올라가고 데스크 업무는 줄어듭니다.",
      image: "/lovable-uploads/homeden_connect_4.png",
    },
    {
      title: "📊 AI 기반 개인 맞춤형 CRM",
      description:
        "고객 충성도 올리는 스마트한 CRM.\nAI가 생성하는 환자별 맞춤 문자로 충성고객을 만들어보세요.",
      image: "/lovable-uploads/homeden_connect_5.png",
    },
    {
      title: "🔄 AI 구환 부활 프로젝트",
      description:
        "구환 이벤트 추천 및 생성, 잊힌 환자도 AI가 다시 호출!\n마케팅 비용 0원으로 구환 유치율 ⬆️ ",
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
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  >
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
              <br />
              인력은 줄이고 소통은 강화되는 디지털 진료 환경을 만들어보세요
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
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {feature.description}
                    {feature.arrowUp && (
                      <FaArrowUp className="inline-block text-green-500 mx-1" />
                    )}
                    {feature.arrowDown && (
                      <FaArrowDown className="inline-block text-red-500 mx-1" />
                    )}
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
