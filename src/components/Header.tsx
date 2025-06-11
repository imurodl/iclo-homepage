
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/709a9408-cb20-4564-b2c9-3b5f957e1fa6.png" 
              alt="HomeDen Logo" 
              className="w-10 h-10"
            />
            <img 
              src="/lovable-uploads/0cec2142-b651-40e4-941e-053470ab5171.png" 
              alt="HomeDen" 
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-homeden-navy hover:text-homeden-red transition-colors font-semibold text-shadow-sm"
            >
              서비스 소개
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-homeden-navy hover:text-homeden-red transition-colors font-semibold text-shadow-sm"
            >
              기능
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-homeden-navy hover:text-homeden-red transition-colors font-semibold text-shadow-sm"
            >
              가격
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-homeden-navy hover:text-homeden-red transition-colors font-semibold text-shadow-sm"
            >
              고객 후기
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-homeden-navy hover:text-homeden-red transition-colors font-semibold text-shadow-sm"
            >
              문의
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-homeden-red hover:bg-homeden-red-light text-white px-6 py-2 font-semibold shadow-lg"
            >
              무료 데모 신청
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-homeden-navy transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-homeden-navy transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-homeden-navy transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-homeden-navy hover:text-homeden-red transition-colors font-semibold px-4 py-2"
              >
                서비스 소개
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-homeden-navy hover:text-homeden-red transition-colors font-semibold px-4 py-2"
              >
                기능
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-homeden-navy hover:text-homeden-red transition-colors font-semibold px-4 py-2"
              >
                가격
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-homeden-navy hover:text-homeden-red transition-colors font-semibold px-4 py-2"
              >
                고객 후기
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-homeden-navy hover:text-homeden-red transition-colors font-semibold px-4 py-2"
              >
                문의
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-homeden-red hover:bg-homeden-red-light text-white font-semibold"
                >
                  무료 데모 신청
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
