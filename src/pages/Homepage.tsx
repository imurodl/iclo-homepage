import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getHospital } from "../lib/getHospital";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import {
  MapPin,
  Heart,
  Calendar,
  Star,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { HospitalResponse, StaffMember } from "@/types/hospital";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "../styles/homepage.css";
import data from "../lib/mockupData.json";

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

  // const { data, isLoading, error } = useQuery<HospitalResponse>({
  //   queryKey: ["homepage", urlSlug],
  //   queryFn: () => getHospital(urlSlug),
  //   enabled: !!urlSlug,
  // });

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

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
  //         <p className="mt-4 text-gray-600">Loading...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error instanceof Error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <p className="text-red-600">Error: {error.message}</p>
  //       </div>
  //     </div>
  //   );
  // }

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
    <div className="min-h-screen bg-white homepage-container">
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
              <div className="flex items-center gap-0.5">
                <span className="text-[#F15757] text-base font-semibold leading-[24px] text-center flex items-center gap-2">
                  <span>홈덴 단골수</span>
                  <span>{hospitalData.regularCount || 0}</span>
                </span>

                <img src="/lovable-uploads/hospital/ic-love.svg" />
              </div>
              <button className="flex px-4 py-2.5 justify-center items-center gap-2.5 rounded-[100px] bg-black hover:bg-gray-800 transition-colors">
                <span className="text-white text-base font-bold leading-[24px]">
                  앱에서 보기
                </span>
              </button>
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
                <div className="px-4 flex items-center">
                  <Heart className="w-4 h-4 mr-1 fill-current text-[#F15757]" />
                  <span className="text-[#F15757] text-base font-semibold leading-[24px]">
                    홈덴 단골수: {hospitalData.regularCount || 0}명
                  </span>
                </div>
                <div className="px-4">
                  <button className="w-full flex px-4 py-2.5 justify-center items-center gap-2.5 rounded-[100px] bg-black hover:bg-gray-800 transition-colors">
                    <span className="text-white text-base font-bold leading-[24px]">
                      앱에서 보기
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[672px] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hospitalData.profile?.introduction_images[0]?.image_url})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/65" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white pt-[240px]">
          <h1 className="text-[68px] font-bold leading-[102px] tracking-[-0.68px]">
            {hospitalData.hospitalName}
          </h1>
          <p className="text-2xl mb-[44px] max-w-[787px] font-medium leading-[33.6px]">
            건강하게 예빠지는 교정을 보여주는 교정치과,
            웃는바른이교정치과입니다.
          </p>
          <button
            className="inline-flex px-[30px] py-5 justify-center items-center gap-2.5 rounded-[100px] bg-white hover:bg-gray-100 transition-colors"
            onClick={() => window.open(`${hospitalData.naverLinkUrl}`)}
          >
            <span className="text-[#191f28] text-[21px] font-semibold leading-[30.45px]">
              예약하기
            </span>
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="py-[140px] bg-neutral-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="inline-flex items-start gap-[69px]">
            <div className="inline-flex flex-col items-start gap-7">
              <Card className="bg-white rounded-[20px] shadow-none border-none w-[1360px]">
                <CardContent className="flex flex-col items-start justify-center gap-[22px] p-[45px]">
                  <div className="w-[137px] h-[75px]">
                    {hospitalData.profile?.logo_image_url ? (
                      <img
                        src={hospitalData.profile.logo_image_url}
                        alt="Hospital Logo"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="flex w-[137px] h-[75px] items-center justify-center gap-2.5 px-[30px] py-[17px] bg-[#d9d9d9]">
                        <div className="font-bold text-black text-[17px]">
                          로고
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-[#505966] text-[21px] font-medium leading-[30.45px]">
                    {hospitalData.profile?.introduction_text ||
                      "건강하게 예뻐지는 교정을 보여주는 교정치과, 웃는바른이교정치과입니다. 저희 웃는바른이교정치과는 많은 환자분들의 성원에 힘입어, 작년 이수역 4번출구로 병원 확장 이전을 하고, 현재 더 넓고 쾌적한 진료환경에서 안전하고 편안한 진료만을 해드리고 있습니다."}
                  </p>
                </CardContent>
              </Card>

              {/* Service Highlights */}
              <div className="inline-flex items-center gap-5">
                <Card
                  className="bg-neutral-100 rounded-[20px] border-none overflow-hidden w-[440px]"
                  style={{ boxShadow: "0 0 15px 0 rgba(25, 31, 40, 0.12)" }}
                >
                  <CardContent className="flex flex-col items-start gap-2.5 px-[45px] py-9">
                    <div className="flex flex-col items-start gap-[19px] w-full">
                      <div
                        className="w-[62px] h-[62px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#F6F6F6" }}
                      >
                        <Users className="w-[31px] h-[31px] text-blue-500" />
                      </div>
                      <h3 className="text-[#191f28] text-2xl font-bold leading-[33.6px]">
                        전문의료진
                      </h3>
                      <p className="text-[#6b7580] text-lg font-medium leading-[26.1px]">
                        각 분야의 전문의가 직접 진료하며
                        <br />
                        전문 치위생사 선생님들이 함께합니다.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-neutral-100 rounded-[20px] border-none overflow-hidden w-[440px]"
                  style={{ boxShadow: "0 0 15px 0 rgba(25, 31, 40, 0.12)" }}
                >
                  <CardContent className="flex flex-col items-start gap-2.5 px-[45px] py-9">
                    <div className="flex flex-col items-start gap-[19px] w-full">
                      <div
                        className="w-[62px] h-[62px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#FFF3E0" }}
                      >
                        <Star className="w-[31px] h-[31px] text-orange-500" />
                      </div>
                      <h3 className="text-[#191f28] text-2xl font-bold leading-[33.6px]">
                        AI와 함께하는 투명병원
                      </h3>
                      <p className="text-[#6b7580] text-lg font-medium leading-[26.1px]">
                        저희 병원은 홈덴과 연계된 병원으로,
                        <br />
                        AI와 전문의 2중 검진을 진행하는 투명 병원입니다
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-neutral-100 rounded-[20px] border-none overflow-hidden w-[440px]"
                  style={{ boxShadow: "0 0 15px 0 rgba(25, 31, 40, 0.12)" }}
                >
                  <CardContent className="flex flex-col items-start gap-2.5 px-[45px] py-9">
                    <div className="flex flex-col items-start gap-[19px] w-full">
                      <div
                        className="w-[62px] h-[62px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#FCE4EC" }}
                      >
                        <Calendar className="w-[31px] h-[31px] text-pink-500" />
                      </div>
                      <h3 className="text-[#191f28] text-2xl font-bold leading-[33.6px]">
                        편리한 상담
                      </h3>
                      <p className="text-[#6b7580] text-lg font-medium leading-[26.1px]">
                        위급상황이 생기거나, 궁금한 점이 있을 때 등<br />
                        집에서도 앱을 통한 편리한 상담이 가능합니다.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section with Auto-scrolling Carousel */}
      {hospitalData.staff && hospitalData.staff.length > 0 && (
        <section id="services" className="py-[140px] bg-white">
          <div className="container mx-auto px-10">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="flex flex-row justify-center">
                {hospitalData.staff.map((member) => (
                  <CarouselItem
                    key={member.id}
                    className="md:basis-1/2 lg:basis-1/3 px-4 md:px-5"
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      )}

      {/* Operation Hours & Contact Section */}
      <section id="hours" className="w-full bg-neutral-100 py-[165px]">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
            <div className="flex flex-col lg:flex-row items-start gap-6 w-full lg:w-auto">
              <Card className="flex flex-col w-full sm:w-[238px] h-[238px] items-start gap-2.5 p-[30px] bg-white rounded-[20px] overflow-hidden shrink-0 mx-auto lg:mx-0">
                <CardContent className="p-0 flex-1 flex">
                  <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full">
                    <div className="font-bold text-gray-900 text-3xl item-start">
                      진료시간
                    </div>
                    <div className="flex justify-end w-[178px]">
                      <img
                        src="/lovable-uploads/hospital/clock-icon.svg"
                        alt="Clock Icon"
                        className="w-23 h-22"
                      />
                    </div>
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
                            {hour.is_closed === true ? (
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
              className="w-full lg:w-auto h-auto md:h-[492px] flex items-center justify-center gap-2.5 px-8 md:px-[58px] py-12 md:py-[65px] rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(154deg, #000 0%, #666 99.96%)",
              }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-[60px]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2.5">
                      <div className="text-white text-[27px] font-bold leading-[36.45px] tracking-[-0.27px] text-center">
                        대표전화
                      </div>

                      <div className="text-white text-[36px] font-bold leading-[48.6px] tracking-[-0.36px]">
                        {hospitalData.phoneNumber}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2.5 mt-5">
                      <div className="text-white text-lg font-medium leading-[26.1px] text-center">
                        홈덴 앱에서 <br />
                        비대면 상담 신청이 가능합니다
                      </div>

                      <button
                        className="flex px-4 py-3.5 justify-center items-center gap-2.5 self-stretch rounded-[100px] bg-white hover:bg-gray-100 transition-colors"
                        style={{
                          boxShadow: "0 0 15px 0 rgba(25, 31, 40, 0.12)",
                        }}
                      >
                        <span className="text-[#191f28] text-lg font-bold leading-[26.1px]">
                          앱에서 상담 신청
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2.5">
                    <div
                      className="inline-flex items-center justify-center gap-2.5 px-4 py-3.5 bg-[#fee502] rounded-full hover:bg-[#fee502]/90 cursor-pointer transition-colors"
                      onClick={() =>
                        window.open(`${hospitalData.kakaoLinkUrl}`)
                      }
                    >
                      <img
                        src="/lovable-uploads/hospital/kakao-logo.png"
                        alt="Kakao"
                        className="w-5 h-5"
                      />
                      <div className="font-medium text-black text-base">
                        문의
                      </div>
                    </div>

                    <div
                      className="inline-flex items-center justify-center gap-2.5 px-4 py-3.5 bg-black rounded-full hover:bg-gray-800 cursor-pointer transition-colors"
                      onClick={() =>
                        window.open(`${hospitalData.instaLinkUrl}`)
                      }
                    >
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
      <section id="location" className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-[109px]">
            <h2 className="text-3xl font-bold whitespace-nowrap">오시는 길</h2>

            <div className="flex flex-col items-start gap-[30px] flex-1">
              <MapPin className="w-8 h-8 text-blue-500" />

              <div className="flex items-start justify-between w-full gap-12">
                <div className="flex flex-col items-start gap-10">
                  <p className="text-[27px] font-bold">
                    {hospitalData.address1} {hospitalData.address2}
                  </p>
                  {hospitalData.directionGuide && (
                    <p className="text-[21px] font-medium text-gray-700 leading-[30.5px]">
                      {hospitalData.directionGuide}
                    </p>
                  )}
                </div>

                <Card
                  className="flex w-[200px] flex-col justify-between items-start self-stretch rounded-[20px] border border-[#505966] cursor-pointer transition-shadow"
                  onClick={() => window.open(`${hospitalData.naverLinkUrl}`)}
                >
                  <CardContent className="flex flex-col items-start justify-between p-[30px] h-full min-w-[200px]">
                    <ArrowRight />
                    <div className="text-[#505966] text-2xl font-medium leading-[33.6px]">
                      지도보기
                    </div>
                  </CardContent>
                </Card>
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
