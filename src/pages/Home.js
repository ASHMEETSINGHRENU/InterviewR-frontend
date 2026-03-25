import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react'; 
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
  BarChart
} from 'lucide-react';
import homeBg from '../photos/homebg.jpg'; 
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



function Home() {
  const navigate = useNavigate();
  const categoriesRef = useRef(null); 

  // Scroll function
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
      color: "bg-green-500",
      skills: [
        { name: "HTML", path: "/html", icon: <Palette className="w-4 h-4" /> },
        { name: "Tailwind CSS", path: "/tailwind", icon: <Sparkles className="w-4 h-4" /> },
        { name: "JavaScript", path: "/javascript", icon: <Braces className="w-4 h-4" /> },
        { name: "React", path: "/react", icon: <Atom className="w-4 h-4" /> }
      ]
    },
    {
      title: "Backend & Languages",
      icon: <Server className="w-6 h-6" />,
      color: "bg-yellow-500",
      skills: [
        { name: "Node.js", path: "/node", icon: <Terminal className="w-4 h-4" /> },
        { name: "Express.js", path: "/express", icon: <Server className="w-4 h-4" /> },
        { name: "Java", path: "/java", icon: <Coffee className="w-4 h-4" /> },
        { name: "Python", path: "/python", icon: <Cpu className="w-4 h-4" /> }
      ]
    }
  ];

  // Featured Learning Paths - Now showing actual languages/topics
  const featuredPaths = [
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, description: "NoSQL Database", color: "bg-green-100 text-green-600", path: "/mongodb" },
    { name: "MySQL", icon: <Database className="w-6 h-6" />, description: "Relational Database", color: "bg-blue-100 text-blue-600", path: "/mysql" },
    { name: "DSA", icon: <Brain className="w-6 h-6" />, description: "Data Structures & Algorithms", color: "bg-purple-100 text-purple-600", path: "/dsa" },
    { name: "Machine Learning", icon: <Cpu className="w-6 h-6" />, description: "AI & ML Concepts", color: "bg-orange-100 text-orange-600", path: "/ml" },
    { name: "HR Interview", icon: <Users className="w-6 h-6" />, description: "Common HR Questions", color: "bg-pink-100 text-pink-600", path: "/hr" },
    { name: "Java", icon: <BarChart className="w-6 h-6" />, description: "Java Programming", color: "bg-indigo-100 text-indigo-600", path: "/java" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px) brightness(0.7)',
            transform: 'scale(1.1)'
          }}
        ></div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Content */}
{/* Content */}
<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Daily 30-Minute Interview Mindset
    </h1>

    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
      Thirty focused minutes every day beats hours of irregular practice.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      
      <Link
        to="/html"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
      >
        <BookOpen className="w-5 h-5" />
        Start Learning
      </Link>

      <button
        onClick={scrollToCategories}
        className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 cursor-pointer w-full sm:w-auto"
      >
        <Code2 className="w-5 h-5" />
        Browse Topics
      </button>

    </div>
  </div>
</div>
</div>



      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Featured Learning Paths */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Interview Topics</h2>
            <Link to="/html" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all cursor-pointer border border-gray-100 hover:scale-105 transform duration-200"
                onClick={() => navigate(path.path)}
              >
                <div className={`${path.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                  {path.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{path.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{path.description}</p>
                <div className="mt-3 text-xs text-blue-600 font-medium flex items-center gap-1">
                  View Questions <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>








       {/* Categories Grid - Professional Poster Style */}
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








{/* Popular Topics Section */}

<div className="px-4 md:px-0 mb-16">
  {/* Section Header */}
  <div className="flex items-center gap-2 mb-5">
    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Coding Questions</h2>
    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
  </div>
  
  {/* Mobile: Stacked cards */}
  {/* Desktop: Grid */}
  <div className="space-y-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:space-y-0">
    {[
      "JavaScript Closures",
      "Java Closures", 
      "React Hooks",
      "Python Decorators",
    ].map((topic, index) => (
      <div 
        key={index}
        className="relative bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
      >
        {/* Glass blur overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] rounded-2xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Row layout for mobile */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            {/* Text content */}
            <div className="flex-1">
              <h3 className="text-gray-900 font-medium text-sm md:text-base">{topic}</h3>
              <p className="text-xs text-gray-400">15+ questions</p>
            </div>
            
            {/* Lock icon */}
            <div className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          
          {/* Coming Soon badge */}
          <div className="mt-2 ml-13">
            <span className="inline-block text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">
              📅 Coming Soon
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  {/* See all button */}
  <div className="mt-4 text-center md:hidden">
    <button className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full w-full">
      Notify me when available
    </button>
  </div>
</div>

        {/* Quick Access Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">

  <Link to="/mongodb">
    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:scale-105 transition">
      <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
      <div className="text-xl font-bold text-green-700">Database</div>
      <div className="text-sm text-green-600">MongoDB & MySQL</div>
    </div>
  </Link>

  <Link to="/dsa">
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:scale-105 transition">
      <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
      <div className="text-xl font-bold text-purple-700">DSA</div>
      <div className="text-sm text-purple-600">Algorithms</div>
    </div>
  </Link>

  <Link to="/ml">
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:scale-105 transition">
      <Cpu className="w-8 h-8 text-orange-600 mx-auto mb-2" />
      <div className="text-xl font-bold text-orange-700">ML</div>
      <div className="text-sm text-orange-600">Machine Learning</div>
    </div>
  </Link>

  <Link to="/hr">
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl text-center hover:scale-105 transition">
      <Users className="w-8 h-8 text-pink-600 mx-auto mb-2" />
      <div className="text-xl font-bold text-pink-700">HR</div>
      <div className="text-sm text-pink-600">Interview Prep</div>
    </div>
  </Link>

</div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Interview Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">50+</div>
            <div className="text-gray-600">Topics Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">1000+</div>
            <div className="text-gray-600">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">Community Support</div>
          </div>
        </div>
              
          
      </div>
      <Footer />
    </>
  );
}

export default Home;