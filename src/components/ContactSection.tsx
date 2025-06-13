import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    phone: "",
    email: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "필수 정보를 입력해주세요",
        description: "이름, 연락처, 이메일은 필수 입력 항목입니다.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);

    toast({
      title: "문의가 성공적으로 전송되었습니다!",
      description: "24시간 내에 담당자가 연락드리겠습니다.",
    });

    // Reset form
    setFormData({
      name: "",
      hospital: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-homeden-navy mb-4">
            문의 & 데모 신청
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HomeDen 솔루션에 대해 더 자세히 알고 싶으시거나
            <br />
            무료 데모를 체험해보고 싶으시다면 언제든 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-on-scroll border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-homeden-navy text-center">
                무료 상담 신청
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      required
                      className="border-gray-300 focus:border-homeden-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      병원명
                    </label>
                    <Input
                      type="text"
                      name="hospital"
                      value={formData.hospital}
                      onChange={handleChange}
                      placeholder="서울대치과의원"
                      className="border-gray-300 focus:border-homeden-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="010-1234-5678"
                      required
                      className="border-gray-300 focus:border-homeden-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      className="border-gray-300 focus:border-homeden-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의사항
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="궁금한 점이나 요청사항을 자유롭게 작성해주세요"
                    rows={4}
                    className="border-gray-300 focus:border-homeden-red"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-homeden-red hover:bg-homeden-red-light text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  지금 상담받기
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <Card className="border-0 shadow-xl mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-homeden-navy mb-6">
                  연락처 정보
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl">📧</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">이메일</div>
                      <div className="text-gray-600">info@iclocorp.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        대표번호
                      </div>
                      <div className="text-gray-600">070-4147-2804</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">주소</div>
                      <div className="text-gray-600">
                        제주특별자치도 제주시
                        <br />
                        중앙로 14길 21
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-homeden-navy mb-6">
                  운영시간
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">평일</span>
                    <span className="font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">토요일</span>
                    <span className="font-semibold">10:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">일요일/공휴일</span>
                    <span className="text-homeden-red font-semibold">휴무</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>24시간 문의:</strong> 온라인 문의는 언제든 가능하며, 
                    영업시간 내 순차적으로 답변드립니다.
                  </p>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
