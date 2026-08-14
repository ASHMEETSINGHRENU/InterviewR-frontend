import React, { useRef, useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "./Chatbot";

import HeroSection from "../components/home/HeroSection";
import PopularTopics from "../components/home/PopularTopics";
import CategoryCards from "../components/home/CategoryCards";
import CodingSectionBanner from "../components/home/CodingSectionBanner";
import QuickAccess from "../components/home/QuickAccess";
import StatsSection from "../components/home/StatsSection";
import CtaSection from "../components/home/CtaSection";

function Home() {
  const categoriesRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);

  // Scroll animation trigger
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimateNumbers(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Navbar />
      
      {/* 1. Hero Banner */}
      <HeroSection scrolled={scrolled} scrollToCategories={scrollToCategories} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 2. Popular Interview Topics */}
        <PopularTopics />

        {/* 3. Interactive Coding Practice Banner */}
        <CodingSectionBanner />

        {/* 4. Category Cards (Frontend & Backend) */}
        <CategoryCards categoriesRef={categoriesRef} />

        {/* 5. Quick Access Shortcuts */}
        <QuickAccess />

        {/* 6. Stats Section */}
        <StatsSection animateNumbers={animateNumbers} />

        {/* 7. Call To Action Banner */}
        <CtaSection />
      </div>

      <Chatbot />
      <Footer />

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Home;