import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const MiniNavbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("HTML");
  const [showGradient, setShowGradient] = useState({ left: false, right: true });
  const scrollContainerRef = React.useRef(null);

  const navItems = [
    'HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'PYTHON', 'JAVA', 'PHP',
    'Node.js', 'Express.js', 'TailwindCSS', 'C++', 'AI', 'Bootstrap', 'React',
    'MySQL', 'MongoDB', 'DSA', 'Git', 'ML', 'HR'
  ];

  // Check scroll position to show/hide gradient overlays
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowGradient({
        left: container.scrollLeft > 0,
        right: container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-full sticky top-0 z-40 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
      
      {/* Main Container */}
      <div className="relative flex items-center max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Left Gradient Overlay */}
        {showGradient.left && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none hidden sm:block"></div>
        )}

        {/* Left Scroll Button - Desktop only */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 z-20 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 ${
            showGradient.left ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth py-3 px-2 sm:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Decorative Sparkle Icon */}
            <Sparkles className="w-4 h-4 text-yellow-400/70 hidden sm:block mr-2 animate-pulse" />
            
            {navItems.map((item, index) => {
              const isActive = location.pathname.includes(item.toLowerCase().replace(/\s+/g, '-'));
              const path = `/${item.toLowerCase().replace(/\s+/g, '-')}`;
              
              return (
                <Link
                  key={index}
                  to={path}
                  onClick={() => setActiveItem(item)}
                  className={`
                    relative group px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium
                    transition-all duration-300 transform hover:scale-105 flex-shrink-0
                    ${isActive 
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {/* Hover effect background */}
                  <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                  )}
                  
                  {/* Item text */}
                  <span className="relative z-10">{item}</span>
                  
                  {/* Tooltip on hover (optional) */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {item} Tutorials
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Gradient Overlay */}
        {showGradient.right && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none hidden sm:block"></div>
        )}

        {/* Right Scroll Button - Desktop only */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 z-20 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 ${
            showGradient.right ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar (optional) */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Add smooth scrolling */
        .scroll-smooth {
          scroll-behavior: smooth;
        }

        /* Animation for active item */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </nav>
  );
};

export default MiniNavbar;