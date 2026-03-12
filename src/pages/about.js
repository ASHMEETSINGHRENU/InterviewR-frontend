// src/pages/about.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profilePic from '../photos/pic.jpg';

const About = () => {
  const skills = [
    'Full-Stack Development',
    'React.js & Node.js',
    'Database Management',
    'API Integration',
    'Problem Solving',
    'Team Leadership'
  ];

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      number: '50+',
      label: 'Projects Completed'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      number: '1000+',
      label: 'Practice Questions'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 2c-1.66 0-5 1.34-5 4v2h10v-2c0-2.66-3.34-4-5-4z"/>
        </svg>
      ),
      number: '500+',
      label: 'Happy Learners'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#5e60ce] via-purple-600 to-blue-600 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-lg rotate-45 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-lg animate-float-slow"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Profile Image with Animation */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src={profilePic} 
                  alt="Ashmeet Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Rings */}
              <div className="absolute -top-4 -left-4 w-72 h-72 border-2 border-white/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 border-2 border-white/20 rounded-full animate-spin-slow-reverse"></div>
            </div>

            {/* Intro Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                Ashmeet Singh
              </h1>
              <p className="text-xl text-white/90 mb-6 animate-fade-in-delayed">
                Full-Stack Developer | MCA Student | Problem Solver
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  🎓 MCA at DY Patil College, Pune
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  💻 Full-Stack Developer
                </span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4 text-[#5e60ce]">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{item.number}</div>
                <div className="text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About the Developer Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
                About the Developer
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#5e60ce] rounded-full"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Hello! I am <span className="text-[#5e60ce] font-semibold">Ashmeet Singh</span>, a passionate Full-Stack Developer currently pursuing a Master of Computer Applications (MCA) at DY Patil College, Pune. I completed my Bachelor of Computer Applications (BCA) from GH Raisoni College of Commerce, Science and Technology, Nagpur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy building scalable web applications, solving complex programming problems, and creating user-friendly digital experiences. My interest in technology comes from curiosity—understanding how systems work and how software can simplify real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                During my academic journey, I have worked on several projects involving frontend development, backend systems, database management, and API integration. I also completed a Full-Stack Development program and gained practical experience through internships and project-based learning.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-gray-700 group"
                  >
                    <div className="w-2 h-2 bg-[#5e60ce] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:text-[#5e60ce] transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quote Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5e60ce] to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
                <svg className="w-12 h-12 text-white/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-xl italic mb-4">
                  "The best software solutions are created when technical knowledge meets creativity and teamwork."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ashmeet Singh</p>
                    <p className="text-sm text-white/80">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Website Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About InterviewReady</h2>
            <div className="w-24 h-1 bg-[#5e60ce] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Purpose */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#5e60ce]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5e60ce] group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-[#5e60ce] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Purpose</h3>
              <p className="text-gray-600">
                To bridge the gap between students and technical interviews by providing structured preparation resources, real interview questions, and comprehensive learning materials.
              </p>
            </div>

            {/* Card 2 - Problem Solving */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#5e60ce]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5e60ce] group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-[#5e60ce] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6h-2v3h-2V6h-2V4h2V1h2v3h2v2zm-6-4v2h-2V2h2zm0 8v2h-2v-2h2zm-2-4v2h-2V6h2zm-2 8h-2v-2h2v2zm6-4v2h-2v-2h2zm-6 4h-2v2h2v-2zm4-8h-2v2h2V6zm0 8h-2v2h2v-2zM6 4h4v2H8v10h8v-2h2v4H2V4h4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Focus on Problem Solving</h3>
              <p className="text-gray-600">
                Encouraging logical thinking, breaking down complex problems, and developing a problem-solving mindset essential for both interviews and real-world development.
              </p>
            </div>

            {/* Card 3 - Learning Approach */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#5e60ce]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5e60ce] group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-[#5e60ce] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 11.5l-6-3.25V13c0 3.11 2.69 6 6 6s6-2.89 6-6v-1.75l-6 3.25z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Approach</h3>
              <p className="text-gray-600">
                Promoting conceptual clarity over memorization, consistent practice, and step-by-step improvement to build confidence for technical interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#5e60ce] to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Crack Your Interview?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of learners who have improved their interview skills with InterviewReady
          </p>
          <button className="px-8 py-4 bg-white text-[#5e60ce] rounded-full font-semibold text-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-pulse">
            Start Practicing Now
          </button>
        </div>
      </section>

      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default About;