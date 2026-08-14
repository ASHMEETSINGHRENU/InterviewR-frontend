import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BookOpen, ArrowRight, Code2, Trophy, Star, TrendingUp } from 'lucide-react';
import homeBg from '../../photos/homebg.jpg';

function HeroSection({ scrolled, scrollToCategories }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-10000"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px) brightness(0.6)',
          transform: `scale(${scrolled ? 1.1 : 1.2})`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">#1 Interview Preparation Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Daily 30-Minute<br />Interview Mindset
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Thirty focused minutes every day beats hours of irregular practice.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/coding"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
            >
              <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Practice Coding Sandbox
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={scrollToCategories}
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 hover:-translate-y-1 transform"
            >
              <BookOpen className="w-5 h-5 group-hover:rotate-6 transition-transform" />
              Browse All Topics
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-300" />
              <span>10,000+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>4.9 Rating (2.5k reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-300" />
              <span>95% Interview Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
