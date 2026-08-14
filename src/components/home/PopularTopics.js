import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Database, Brain, Cpu, Users, BarChart, Star, ChevronRight } from 'lucide-react';

function PopularTopics() {
  const navigate = useNavigate();

  const featuredPaths = [
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, description: "NoSQL Mastery", color: "from-green-500 to-teal-500", path: "/mongodb", popularity: 92 },
    { name: "MySQL", icon: <Database className="w-6 h-6" />, description: "Relational DB", color: "from-blue-500 to-cyan-500", path: "/mysql", popularity: 88 },
    { name: "DSA", icon: <Brain className="w-6 h-6" />, description: "Problem Solving", color: "from-purple-500 to-indigo-500", path: "/dsa", popularity: 96 },
    { name: "Machine Learning", icon: <Cpu className="w-6 h-6" />, description: "AI Fundamentals", color: "from-orange-500 to-red-500", path: "/ml", popularity: 85 },
    { name: "HR Interview", icon: <Users className="w-6 h-6" />, description: "Soft Skills", color: "from-pink-500 to-rose-500", path: "/hr", popularity: 90 },
    { name: "Java", icon: <BarChart className="w-6 h-6" />, description: "OOP Concepts", color: "from-indigo-500 to-purple-500", path: "/java", popularity: 87 }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Popular Interview Topics
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Most requested topics by our community members</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {featuredPaths.map((path, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 transform border border-gray-100"
            onClick={() => navigate(path.path)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${path.color} rounded-full opacity-0 group-hover:opacity-20 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700`}></div>
            
            <div className={`relative z-10 bg-gradient-to-br ${path.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
  );
}

export default PopularTopics;
