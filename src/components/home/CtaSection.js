import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Play, Code2 } from 'lucide-react';

function CtaSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-32 translate-y-32"></div>
      
      <div className="relative z-10">
        <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ace Your Technical Interview?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful developers who leveled up their skills and landed dream software engineering roles.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            to="/coding"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:bg-purple-50 transition-all duration-300 hover:-translate-y-1 transform"
          >
            Start Coding Now
            <Code2 className="w-5 h-5" />
          </Link>
          <Link
            to="/html"
            className="inline-flex items-center gap-2 border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:-translate-y-1 transform"
          >
            Explore Questions
            <Play className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
