import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Brain, Cpu, Users } from 'lucide-react';

function QuickAccess() {
  const getColorClass = (color, type) => {
    const colorMap = {
      purple: {
        bg: "bg-purple-500",
        gradient: "from-purple-500 to-purple-600",
        light: "from-purple-50 to-purple-100",
        text: "text-purple-600"
      },
      orange: {
        bg: "bg-orange-500",
        gradient: "from-orange-500 to-orange-600",
        light: "from-orange-50 to-orange-100",
        text: "text-orange-600"
      },
      pink: {
        bg: "bg-pink-500",
        gradient: "from-pink-500 to-pink-600",
        light: "from-pink-50 to-pink-100",
        text: "text-pink-600"
      },
      green: {
        bg: "bg-green-500",
        gradient: "from-green-500 to-green-600",
        light: "from-green-50 to-green-100",
        text: "text-green-600"
      }
    };
    return colorMap[color]?.[type] || colorMap.purple[type];
  };

  const quickAccessItems = [
    { name: "Database", icon: Database, path: "/mongodb", color: "green", desc: "MongoDB & MySQL" },
    { name: "DSA", icon: Brain, path: "/dsa", color: "purple", desc: "Algorithms" },
    { name: "ML", icon: Cpu, path: "/ml", color: "orange", desc: "Machine Learning" },
    { name: "HR", icon: Users, path: "/hr", color: "pink", desc: "Interview Prep" }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickAccessItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className={`group relative bg-gradient-to-br ${getColorClass(item.color, 'light')} rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform overflow-hidden border border-gray-100`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${getColorClass(item.color, 'gradient')} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className={`bg-gradient-to-br ${getColorClass(item.color, 'gradient')} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
  );
}

export default QuickAccess;
