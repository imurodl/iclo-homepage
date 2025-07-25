import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getHospital } from "../lib/getHospital";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  MapPin,
  Clock,
  Phone,
  Heart,
  Calendar,
  Star,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { HospitalResponse, StaffMember } from "@/types/hospital";
import useEmblaCarousel from "embla-carousel-react";

const Homepage = () => {
  const { urlSlug } = useParams<{ urlSlug: string }>();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const { data, isLoading, error } = useQuery<HospitalResponse>({
    queryKey: ["homepage", urlSlug],
    queryFn: () => getHospital(urlSlug),
    enabled: !!urlSlug,
  });

  // Handle smooth scrolling with offset
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // 5rem = 80px
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["intro", "services", "hours", "location"];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of viewport

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No data available</p>
      </div>
    );
  }

  const hospitalData = data.data;

  // Helper function to convert day_of_week to Korean
  const getDayName = (dayOfWeek: string) => {
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const dayIndex = parseInt(dayOfWeek) - 1;
    return days[dayIndex] || dayOfWeek;
  };

  // Helper function to format time
  const formatTime = (time: string) => {
    if (!time) return "-";
    return time.substring(0, 5);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-medium text-gray-900">
                {hospitalData.hospitalName || "치과 홈페이지"}
              </h1>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-12">
                <a
                  href="#intro"
                  onClick={(e) => handleNavClick(e, "intro")}
                  className={`text-gray-700 hover:text-gray-900 transition-colors relative pb-1 cursor-pointer ${
                    activeSection === "intro"
                      ? "border-b-2 border-gray-900"
                      : ""
                  }`}
                >
                  병원소개
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className={`text-gray-700 hover:text-gray-900 transition-colors relative pb-1 cursor-pointer ${
                    activeSection === "services"
                      ? "border-b-2 border-gray-900"
                      : ""
                  }`}
                >
                  의료진
                </a>
                <a
                  href="#hours"
                  onClick={(e) => handleNavClick(e, "hours")}
                  className={`text-gray-700 hover:text-gray-900 transition-colors relative pb-1 cursor-pointer ${
                    activeSection === "hours"
                      ? "border-b-2 border-gray-900"
                      : ""
                  }`}
                >
                  진료시간
                </a>
                <a
                  href="#location"
                  onClick={(e) => handleNavClick(e, "location")}
                  className={`text-gray-700 hover:text-gray-900 transition-colors relative pb-1 cursor-pointer ${
                    activeSection === "location"
                      ? "border-b-2 border-gray-900"
                      : ""
                  }`}
                >
                  오시는길
                </a>
              </div>
            </div>

            {/* Right side - Inquiry count and button */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-red-500">
                <Heart className="w-4 h-4 mr-1 fill-current" />
                <span className="text-sm">
                  문의 다음수: {hospitalData.regularCount || 0}명
                </span>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
                상담시 보기
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`w-full h-0.5 bg-gray-900 transition-all ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-900 transition-all ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-900 transition-all ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#intro"
                  onClick={(e) => handleNavClick(e, "intro")}
                  className="px-4 py-2 cursor-pointer"
                >
                  병원소개
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="px-4 py-2 cursor-pointer"
                >
                  의료진
                </a>
                <a
                  href="#hours"
                  onClick={(e) => handleNavClick(e, "hours")}
                  className="px-4 py-2 cursor-pointer"
                >
                  진료시간
                </a>
                <a
                  href="#location"
                  onClick={(e) => handleNavClick(e, "location")}
                  className="px-4 py-2 cursor-pointer"
                >
                  오시는길
                </a>
                <div className="px-4 flex items-center text-red-500">
                  <Heart className="w-4 h-4 mr-1 fill-current" />
                  <span className="text-sm">
                    문의 다음수: {hospitalData.regularCount || 0}명
                  </span>
                </div>
                <div className="px-4">
                  <Button className="w-full bg-black text-white rounded-full">
                    상담시 보기
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hospitalData.profile?.introduction_images[0]?.image_url})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl">
            {hospitalData.hospitalName}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl drop-shadow-lg opacity-95 px-4">
            건강하게 예쁘기는 교정을 보여주는 교정치과,
            웃는바른이교정치과입니다.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 rounded-full px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-medium shadow-xl"
          >
            예약하기
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        id="intro"
        className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            className="bg-white rounded-3xl p-8 md:p-12 mb-12 md:mb-16 hover:shadow-xl transition-shadow duration-300"
            style={{ boxShadow: "0 4px 20px 0 rgba(25, 31, 40, 0.08)" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                {hospitalData.profile?.logo_image_url ? (
                  <img
                    src={hospitalData.profile.logo_image_url}
                    alt="Hospital Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <h1 className="text-xl font-medium text-gray-900">
                    {hospitalData.hospitalName || "치과 홈페이지"}
                  </h1>
                )}
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {(() => {
                    const fullText =
                      hospitalData.profile?.introduction_text ||
                      "건강하게 예쁘기는 교정을 보여주는 교정치과, 웃는바른이교정치과입니다. 저희 웃는바른이교정치과는 많은 환자분들의 성원에 힘입어, 지난 이수역 4번출구로 병원 확장 이전을 하고, 현재 더 넓고 쾌적한 진료환경에서 안전하고 편안한 진료만을 해드리고 있습니다.";
                    // Get first sentence (split by period)
                    const firstSentence = fullText.split(".")[0] + ".";
                    return firstSentence;
                  })()}
                </p>
              </div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div
              className="bg-white rounded-2xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ boxShadow: "0 4px 20px 0 rgba(25, 31, 40, 0.08)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#E3F2FD" }}
              >
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">전문의료진</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                각 분야의 전문의가 직접 진료하며
                <br />
                전문 치위생사 선생님들이 함께합니다.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ boxShadow: "0 4px 20px 0 rgba(25, 31, 40, 0.08)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#FFF3E0" }}
              >
                <Star className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI와 함께하는 투명병원</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                저희 병원은 홈덴과 연계된 병원으로,
                <br />
                AI와 전문의의 2중 검진을 진행하는 투명 병원입니다.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ boxShadow: "0 4px 20px 0 rgba(25, 31, 40, 0.08)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#FCE4EC" }}
              >
                <Calendar className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">편리한 상담</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                위급상황이 생기거나, 긍급한 점이 있을 때 등<br />
                집에서도 쉽을 듣안 편리한 상담이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section with Auto-scrolling Carousel */}
      {hospitalData.staff && hospitalData.staff.length > 0 && (
        <section
          id="services"
          className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900">
              의료진 소개
            </h2>
            <div className="max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {hospitalData.staff.map((member) => (
                  <div
                    key={member.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2 md:px-4"
                  >
                    <Card className="overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="h-[300px] md:h-[394px] relative overflow-hidden">
                        {member.profile_image_url ? (
                          <img
                            src={member.profile_image_url}
                            alt={member.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <span className="text-gray-400">이미지 준비중</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 text-center">
                        <p className="text-gray-600 text-sm mb-3">
                          {member.specialty}
                        </p>
                        <h3 className="text-xl font-bold mb-4">
                          {member.name} {member.position}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {member.introduction}
                        </p>
                        <Button
                          variant="outline"
                          className="rounded-full border-[#3182F6] text-[#3182F6] hover:bg-[#3182F6] hover:text-white transition-all duration-300"
                          onClick={() => {
                            setSelectedStaff(member);
                            setIsStaffModalOpen(true);
                          }}
                        >
                          프로필 더보기
                        </Button>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Operation Hours & Contact Section */}
      <section
        id="hours"
        className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
            <div className="flex flex-col lg:flex-row items-start gap-6 w-full lg:w-auto">
              <Card className="flex flex-col w-full sm:w-[238px] h-[238px] items-start gap-2.5 p-[30px] bg-white rounded-[20px] overflow-hidden shrink-0 mx-auto lg:mx-0">
                <CardContent className="p-0 flex-1 flex">
                  <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full">
                    <div className="font-bold text-gray-900 text-3xl">
                      진료시간
                    </div>
                    <img
                      src="/lovable-uploads/hospital/clock-icon.svg"
                      alt="Clock Icon"
                      className="w-12 h-12"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full lg:w-[748px] h-auto md:h-[492px] bg-white rounded-[20px] p-6 md:p-8">
                <CardContent className="p-0 h-full">
                  <table className="w-full h-full">
                    <tbody className="divide-y divide-gray-100">
                      {hospitalData.operationHours?.map((hour) => (
                        <tr key={hour.id} className="h-[60px]">
                          <td className="font-medium text-lg">
                            {getDayName(hour.day_of_week)}요일
                          </td>
                          <td className="text-left">
                            {hour.is_closed === "true" ? (
                              <span className="text-red-500 font-medium">
                                휴무
                              </span>
                            ) : hour.day_of_week === "6" ? (
                              <span className="text-blue-500 font-medium">
                                {formatTime(hour.open_time)} -{" "}
                                {formatTime(hour.close_time)}
                              </span>
                            ) : (
                              <div className="text-gray-700">
                                <span>
                                  {formatTime(hour.open_time)} -{" "}
                                  {formatTime(hour.close_time)}
                                </span>
                                {hour.break_start_time &&
                                  hour.break_end_time && (
                                    <span className="text-gray-500 text-sm ml-2">
                                      (점심시간{" "}
                                      {formatTime(hour.break_start_time)} -{" "}
                                      {formatTime(hour.break_end_time)})
                                    </span>
                                  )}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            <Card
              className="w-full lg:w-auto h-auto md:h-[492px] flex items-center gap-2.5 px-8 md:px-[58px] py-12 md:py-[65px] rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(154deg, #000 0%, #666 99.96%)",
              }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-[60px]">
                  <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-2.5">
                      <div className="font-bold text-white text-2xl text-center">
                        대표전화
                      </div>

                      <div className="font-bold text-white text-3xl">
                        {hospitalData.phoneNumber}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2.5">
                      <div className="font-medium text-white text-base text-center">
                        홈덴 앱에서 <br />
                        비대면 상담 신청이 가능합니다.
                      </div>

                      <Button className="flex px-4 py-6 w-full bg-white shadow-lg items-center justify-center gap-2.5 rounded-full hover:bg-gray-100">
                        <div className="font-medium text-black text-base">
                          앱에서 상담 신청
                        </div>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2.5">
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-3.5 bg-[#fee502] rounded-full hover:bg-[#fee502]/90 cursor-pointer transition-colors">
                      <img
                        src="/lovable-uploads/hospital/kakao-logo.png"
                        alt="Kakao"
                        className="w-5 h-5"
                      />
                      <div className="font-medium text-black text-base">
                        문의
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-3.5 bg-black rounded-full hover:bg-gray-800 cursor-pointer transition-colors">
                      <img
                        src="/lovable-uploads/hospital/instagram-logo.png"
                        alt="Instagram"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center lg:text-left">
            오시는 길
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <h3 className="text-xl font-semibold">위치 안내</h3>
              </div>

              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
                <div className="flex flex-col gap-4 flex-1">
                  <p className="text-lg md:text-xl font-bold">
                    {hospitalData.address1} {hospitalData.address2}
                  </p>
                  {hospitalData.directionGuide && (
                    <div className="font-medium text-gray-700 text-base md:text-[21px] leading-relaxed md:leading-[30px]">
                      {hospitalData.directionGuide}
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="rounded-[20px] px-8 py-6 md:py-12 flex flex-row lg:flex-col items-center lg:items-start gap-2 lg:gap-4 font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full lg:w-auto"
                  onClick={() =>
                    window.open(
                      `https://map.naver.com/v5/search/${encodeURIComponent(
                        hospitalData.address1
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <ArrowRight className="w-4 h-4 lg:mr-2" />
                  <span>지도보기</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                {hospitalData.hospitalName}
              </h3>
              <p className="text-gray-400 text-sm mb-1">
                {hospitalData.address1} {hospitalData.address2}
              </p>
              <p className="text-gray-400 text-sm">
                TEL: {hospitalData.phoneNumber}
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © 2024 {hospitalData.hospitalName}. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Powered by HomeDen Connect
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Staff Profile Modal */}
      <Dialog open={isStaffModalOpen} onOpenChange={setIsStaffModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0 [&>button]:hidden rounded-2xl">
          {selectedStaff && (
            <div className="flex h-full">
              {/* Left side - Image */}
              <div className="aspect-[3/4] max-w-[500px] relative overflow-hidden">
                {selectedStaff.profile_image_url ? (
                  <>
                    <img
                      src={selectedStaff.profile_image_url}
                      alt={selectedStaff.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">이미지 준비중</span>
                  </div>
                )}
              </div>

              {/* Right side - Content */}
              <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-10 pb-6 border-b">
                  <p className="text-blue-500 font-medium mb-2">
                    {selectedStaff.specialty}
                  </p>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {selectedStaff.name} {selectedStaff.position}
                  </h2>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-10 pt-8 space-y-10">
                  {/* Introduction */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      의료진 소개
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {selectedStaff.introduction}
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      학력 및 경력
                    </h3>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {selectedStaff.education}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Homepage;
