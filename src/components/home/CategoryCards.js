import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Server, Palette, Sparkles, Braces, Atom, Terminal, Coffee, Cpu, ChevronRight } from 'lucide-react';

function CategoryCards({ categoriesRef }) {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5" />,
      color: "green",
      image: require('../../photos/frontendposter.jpg'),
      tag: "Popular",
      skillsOverview: "React • JavaScript • Tailwind • HTML",
      skills: [
        { name: "HTML", path: "/html", icon: <Palette className="w-4 h-4" /> },
        { name: "Tailwind CSS", path: "/tailwind", icon: <Sparkles className="w-4 h-4" /> },
        { name: "JavaScript", path: "/javascript", icon: <Braces className="w-4 h-4" /> },
        { name: "React", path: "/react", icon: <Atom className="w-4 h-4" /> }
      ]
    },
    {
      title: "Backend & Languages",
      icon: <Server className="w-5 h-5" />,
      color: "yellow",
      image: require('../../photos/backendposter.jpg'),
      tag: "Trending",
      skillsOverview: "Node.js • Python • Java • Express",
      skills: [
        { name: "Node.js", path: "/node", icon: <Terminal className="w-4 h-4" /> },
        { name: "Express.js", path: "/express", icon: <Server className="w-4 h-4" /> },
        { name: "Java", path: "/java", icon: <Coffee className="w-4 h-4" /> },
        { name: "Python", path: "/python", icon: <Cpu className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <div ref={categoriesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 scroll-mt-20">
      {/* Frontend Card */}
      <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100">
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-green-50 to-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-500 p-2 rounded-lg text-white">
                {categories[0].icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800">{categories[0].title}</h2>
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
            
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>24+ interview questions</span>
            </div>
          </div>
          
          <div className="md:w-48 lg:w-56 h-48 md:h-auto relative overflow-hidden">
            <img 
              src={categories[0].image} 
              alt={categories[0].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">{categories[0].tag}</p>
              <p className="text-xs opacity-90">{categories[0].skillsOverview}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Card */}
      <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100">
        <div className="flex flex-col md:flex-row-reverse h-full">
          <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-500 p-2 rounded-lg text-white">
                {categories[1].icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800">{categories[1].title}</h2>
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
            
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>32+ interview questions</span>
            </div>
          </div>
          
          <div className="md:w-48 lg:w-56 h-48 md:h-auto relative overflow-hidden">
            <img 
              src={categories[1].image} 
              alt={categories[1].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">{categories[1].tag}</p>
              <p className="text-xs opacity-90">{categories[1].skillsOverview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCards;
