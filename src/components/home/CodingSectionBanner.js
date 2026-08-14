import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Play, Sparkles, CheckCircle2, Terminal, ArrowRight, Brain } from 'lucide-react';

function CodingSectionBanner() {
  const navigate = useNavigate();

  const previewProblems = [
    { title: "Two Sum (Hash Map)", topic: "DSA / Arrays", difficulty: "Easy", lang: "JS / Python / C++" },
    { title: "Reverse String & Palindrome", topic: "Strings", difficulty: "Easy", lang: "JS / Java / Python" },
    { title: "Valid Parentheses Stack", topic: "Data Structures", difficulty: "Medium", lang: "Multi-Language" },
    { title: "Longest Substring Without Repeating", topic: "Sliding Window", difficulty: "Medium", lang: "DSA" }
  ];

  return (
    <div className="mb-20">
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden border border-indigo-500/20">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Interactive Practice & Compiler Environment</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Master Technical Interviews with Live Coding
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Step into our powerful coding playground. Write code in <span className="text-amber-300 font-semibold">JavaScript</span>, <span className="text-cyan-300 font-semibold">Python</span>, <span className="text-emerald-300 font-semibold">C++</span>, or <span className="text-orange-300 font-semibold">Java</span>, run real test cases, and get immediate <span className="text-purple-300 font-semibold">AI code reviews</span> with Big-O analysis!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
              <div className="flex items-center gap-2 text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Multi-language compilation & sandbox</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated Test Case verification</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>AI Code Review & Big-O Complexity</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Track progress & solved problems</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/coding')}
                className="group bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Open Coding Playground</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs text-indigo-300 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Instant In-Browser Compiler Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Snippet Card Preview */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-400 font-mono ml-2">solution.js</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">JS / Live Sandbox</span>
              </div>

              {/* Sample Code Block */}
              <div className="font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto p-2 bg-slate-900/90 rounded-lg border border-slate-800/80">
                <div><span className="text-purple-400">function</span> <span className="text-blue-300">twoSum</span>(nums, target) &#123;</div>
                <div className="pl-4"><span className="text-purple-400">const</span> map = <span className="text-purple-400">new</span> <span className="text-yellow-300">Map</span>();</div>
                <div className="pl-4"><span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = 0; i &lt; nums.length; i++) &#123;</div>
                <div className="pl-8"><span className="text-purple-400">const</span> diff = target - nums[i];</div>
                <div className="pl-8"><span className="text-purple-400">if</span> (map.<span className="text-blue-300">has</span>(diff)) <span className="text-purple-400">return</span> [map.<span className="text-blue-300">get</span>(diff), i];</div>
                <div className="pl-8">map.<span className="text-blue-300">set</span>(nums[i], i);</div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Sample Test Case Output */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Test Case 1 & 2 Passed (12ms)</span>
                </div>
                <button
                  onClick={() => navigate('/coding')}
                  className="text-purple-400 hover:text-purple-300 text-xs font-semibold flex items-center gap-1"
                >
                  Try in Sandbox →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Problems Quick Grid */}
        <div className="mt-10 pt-8 border-t border-indigo-500/20">
          <p className="text-xs uppercase tracking-wider text-indigo-300 mb-4 font-semibold">Top Practice Coding Challenges</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {previewProblems.map((prob, idx) => (
              <div 
                key={idx}
                onClick={() => navigate('/coding')}
                className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">{prob.difficulty}</span>
                  <span className="text-[11px] text-gray-400">{prob.topic}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1 truncate">{prob.title}</h4>
                <div className="text-[11px] text-gray-400 flex items-center justify-between">
                  <span>{prob.lang}</span>
                  <Play className="w-3 h-3 text-purple-400 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodingSectionBanner;
