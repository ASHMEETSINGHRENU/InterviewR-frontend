import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import { 
  Code2, 
  Palette, 
  Braces, 
  Atom, 
  Server, 
  Database, 
  Coffee, 
  Brain, 
  Users,
  ChevronRight,
  Sparkles,
  BookOpen,
  Terminal,
  Cpu,
  BarChart,
  Rocket,
  Zap,
  Trophy,
  Star,
  ArrowRight,
  Play,
  TrendingUp,
  Layers,
  Shield
} from 'lucide-react';
import homeBg from '../photos/homebg.jpg'; 
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();
  const categoriesRef = useRef(null);
  // const [hoveredCard, setHoveredCard] = useState(null);
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

  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      lightColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      skills: [
        { name: "HTML", path: "/html", icon: <Palette className="w-4 h-4" />, level: "Beginner to Advanced", questions: 45 },
        { name: "Tailwind CSS", path: "/tailwind", icon: <Sparkles className="w-4 h-4" />, level: "All Levels", questions: 38 },
        { name: "JavaScript", path: "/javascript", icon: <Braces className="w-4 h-4" />, level: "Intermediate+", questions: 89 },
        { name: "React", path: "/react", icon: <Atom className="w-4 h-4" />, level: "Advanced", questions: 67 }
      ]
    },
    {
      title: "Backend & Languages",
      icon: <Server className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600",
      lightColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      skills: [
        { name: "Node.js", path: "/node", icon: <Terminal className="w-4 h-4" />, level: "Intermediate", questions: 52 },
        { name: "Express.js", path: "/express", icon: <Server className="w-4 h-4" />, level: "Intermediate", questions: 44 },
        { name: "Java", path: "/java", icon: <Coffee className="w-4 h-4" />, level: "All Levels", questions: 73 },
        { name: "Python", path: "/python", icon: <Cpu className="w-4 h-4" />, level: "Beginner+", questions: 81 }
      ]
    }
  ];

  const featuredPaths = [
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, description: "NoSQL Mastery", color: "from-green-500 to-teal-500", path: "/mongodb", popularity: 92 },
    { name: "MySQL", icon: <Database className="w-6 h-6" />, description: "Relational DB", color: "from-blue-500 to-cyan-500", path: "/mysql", popularity: 88 },
    { name: "DSA", icon: <Brain className="w-6 h-6" />, description: "Problem Solving", color: "from-purple-500 to-indigo-500", path: "/dsa", popularity: 96 },
    { name: "Machine Learning", icon: <Cpu className="w-6 h-6" />, description: "AI Fundamentals", color: "from-orange-500 to-red-500", path: "/ml", popularity: 85 },
    { name: "HR Interview", icon: <Users className="w-6 h-6" />, description: "Soft Skills", color: "from-pink-500 to-rose-500", path: "/hr", popularity: 90 },
    { name: "Java", icon: <BarChart className="w-6 h-6" />, description: "OOP Concepts", color: "from-indigo-500 to-purple-500", path: "/java", popularity: 87 }
  ];

  const stats = [
    { number: 500, label: "Interview Questions", icon: <BookOpen className="w-6 h-6" />, suffix: "+", color: "blue" },
    { number: 50, label: "Topics Covered", icon: <Layers className="w-6 h-6" />, suffix: "+", color: "green" },
    { number: 1000, label: "Active Learners", icon: <Users className="w-6 h-6" />, suffix: "+", color: "yellow" },
    { number: 24, label: "Community Support", icon: <Shield className="w-6 h-6" />, suffix: "/7", color: "purple" }
  ];

  const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (animateNumbers) {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [end, duration, animateNumbers]);
    return <>{count}{suffix}</>;
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
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
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-slow">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold">#1 Interview Preparation Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-slide-in">
              Daily 30-Minute<br />Interview Mindset
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Thirty focused minutes every day beats hours of irregular practice.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-400">
              <Link
                to="/html"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Learning Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={scrollToCategories}
                className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 transform hover:-translate-y-1"
              >
                <Code2 className="w-5 h-5 group-hover:rotate-6 transition-transform" />
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Featured Learning Paths */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Popular Interview Topics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Most requested topics by our community members</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {featuredPaths.map((path, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
                onClick={() => navigate(path.path)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${path.color} rounded-full opacity-0 group-hover:opacity-20 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700`}></div>
                
                <div className={`relative z-10 bg-gradient-to-br ${path.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{path.icon}</div>
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-1">{path.name}</h3>
                <p className="text-sm text-gray-500">{path.description}</p>
                
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-600">{path.popularity}%</span>
                  </div>
                  <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Grid with Enhanced Animations */}

<div ref={categoriesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 scroll-mt-20">
  
  {/* Frontend Card - Image Right */}
  <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
    <div className="flex flex-col md:flex-row h-full">
      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-green-50 to-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-green-500 p-2 rounded-lg text-white">
            <Code2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Frontend Development</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {categories[0].skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => navigate(skill.path)}
              className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200 group/btn"
            >
              <span className="text-green-500">{skill.icon}</span>
              <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
              <ChevronRight className="w-3 h-3 text-gray-400 ml-auto group-hover/btn:text-green-500 group-hover/btn:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span>24+ interview questions</span>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="md:w-48 lg:w-56 h-48 md:h-auto relative overflow-hidden">
        <img 
          src={require('../photos/frontendposter.jpg')} 
          alt="Frontend Development"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold">Popular</p>
          <p className="text-xs opacity-90">React • Vue • Angular</p>
        </div>
      </div>
    </div>
  </div>

  {/* Backend Card - Image Left */}
  <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
    <div className="flex flex-col md:flex-row-reverse h-full">
      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-yellow-500 p-2 rounded-lg text-white">
            <Server className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Backend & Languages</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {categories[1].skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => navigate(skill.path)}
              className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-yellow-200 group/btn"
            >
              <span className="text-yellow-500">{skill.icon}</span>
              <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
              <ChevronRight className="w-3 h-3 text-gray-400 ml-auto group-hover/btn:text-yellow-500 group-hover/btn:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          <span>32+ interview questions</span>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="md:w-48 lg:w-56 h-48 md:h-auto relative overflow-hidden">
        <img 
          src={require('../photos/backendposter.jpg')} 
          alt="Backend Development"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold">Trending</p>
          <p className="text-xs opacity-90">Node.js • Python • Java</p>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Popular Coding Questions */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Coding Questions</h2>
              <p className="text-gray-600">Practice with real interview questions</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Coming Soon 🔥
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript Closures", difficulty: "Medium", questions: 24, icon: "🟡" },
              { name: "Java Collections", difficulty: "Hard", questions: 32, icon: "🔴" },
              { name: "React Hooks", difficulty: "Medium", questions: 28, icon: "🔵" },
              { name: "Python Decorators", difficulty: "Easy", questions: 18, icon: "🟢" },
            ].map((topic, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      topic.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {topic.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{topic.questions} problems</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs">Premium</span>
                    </div>
                    <button className="text-purple-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      Get Notified →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access with Glassmorphism */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Database", icon: Database, path: "/mongodb", color: "green", desc: "MongoDB & MySQL" },
              { name: "DSA", icon: Brain, path: "/dsa", color: "purple", desc: "Algorithms" },
              { name: "ML", icon: Cpu, path: "/ml", color: "orange", desc: "Machine Learning" },
              { name: "HR", icon: Users, path: "/hr", color: "pink", desc: "Interview Prep" }
            ].map((item, index) => (
              <Link to={item.path} key={index}>
                <div className={`group relative bg-gradient-to-br from-${item.color}-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                  <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section with Counters */}
        <div id="stats-section" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className={`bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10">
            <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ace Your Interview?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful developers who landed their dream jobs
            </p>
            <Link
              to="/html"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Journey Now
              <Play className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

// Helper component for Lock icon
const Lock = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default Home;