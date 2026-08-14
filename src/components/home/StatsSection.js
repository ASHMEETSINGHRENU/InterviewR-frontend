import React, { useState, useEffect } from 'react';
import { BookOpen, Layers, Users, Shield } from 'lucide-react';

function StatsSection({ animateNumbers }) {
  const stats = [
    { number: 500, label: "Interview Questions", icon: <BookOpen className="w-6 h-6 text-white" />, suffix: "+", color: "bg-blue-500" },
    { number: 50, label: "Topics Covered", icon: <Layers className="w-6 h-6 text-white" />, suffix: "+", color: "bg-green-500" },
    { number: 1000, label: "Active Learners", icon: <Users className="w-6 h-6 text-white" />, suffix: "+", color: "bg-yellow-500" },
    { number: 24, label: "Community Support", icon: <Shield className="w-6 h-6 text-white" />, suffix: "/7", color: "bg-purple-500" }
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
    }, [end, duration]);
    return <>{count}{suffix}</>;
  };

  return (
    <div id="stats-section" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 rounded-3xl p-12 mb-12 shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center hover:scale-105 transition-transform duration-300">
            <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
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
  );
}

export default StatsSection;
