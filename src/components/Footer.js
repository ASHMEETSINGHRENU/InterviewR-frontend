// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const languages = [
    'JavaScript', 'Python', 'Java', 'MongoDB', 'MySql', 
    'ML'
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/forms' },
    { name: 'WorkWagon', path: 'https://frontend-workwagon.vercel.app/login' },
    { name: 'PortFolio', path: 'https://portfolio-xi-nine-42.vercel.app/home' },
    { name: 'Terms & Conditions', path: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[#5e60ce]/10 backdrop-blur-sm border-t border-[#5e60ce]/20 pt-16 pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5e60ce]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5e60ce]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5e60ce]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#5e60ce] mb-4 animate-fade-in">
              InterviewReady
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Empowering developers to ace their interviews with comprehensive language preparation and real-world practice.
            </p>
            <div className="flex space-x-4">


               <a 
                href="https://github.com/ASHMEETSINGHRENU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5e60ce]/10 hover:bg-[#5e60ce] rounded-full flex items-center justify-center text-[#5e60ce] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
               <a 
                href="https://www.instagram.com/ashmeetsingh022/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5e60ce]/10 hover:bg-[#5e60ce] rounded-full flex items-center justify-center text-[#5e60ce] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ashmeet-singh-renu-9a2a36275/" className="w-10 h-10 bg-[#5e60ce]/10 hover:bg-[#5e60ce] rounded-full flex items-center justify-center text-[#5e60ce] hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Languages */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold text-[#5e60ce] mb-4">Languages</h4>
            <ul className="space-y-2">
              {languages.slice(0, 5).map((lang, index) => (
                <li key={index}>
                  <Link 
                    to={`/${lang.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-[#5e60ce] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#5e60ce] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {lang}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/html" className="text-[#5e60ce] hover:underline text-sm font-medium">
                  View All Languages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold text-[#5e60ce] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-[#5e60ce] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#5e60ce] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold text-[#5e60ce] mb-4">Stay Updated</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Subscribe to get interview tips and new language updates
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-2 bg-white/50 backdrop-blur-sm border border-[#5e60ce]/30 rounded-lg focus:outline-none focus:border-[#5e60ce] focus:ring-1 focus:ring-[#5e60ce] transition-all duration-300"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-[#5e60ce] text-white rounded-lg hover:bg-[#4a4cb3] transform hover:scale-105 transition-all duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#5e60ce]/20"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 dark:text-gray-300 text-sm text-center md:text-left">
            © {currentYear} InterviewReady. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <span className="text-gray-600 dark:text-gray-300">
              Developed by{' '}
              <a 
                href="https://portfolio-xi-nine-42.vercel.app/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5e60ce] font-semibold hover:underline transition-all duration-300 hover:scale-105 inline-block"
              >
                Ashmeet Singh Renu
              </a>
            </span>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <a 
              href="https://frontend-workwagon.vercel.app/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[#5e60ce] transition-all duration-300 hover:scale-105 inline-block"
            >
              View Another Project
            </a>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-0 bottom-0 w-10 h-10 bg-[#5e60ce]/10 hover:bg-[#5e60ce] rounded-lg flex items-center justify-center text-[#5e60ce] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </footer>
  );
};

export default Footer;