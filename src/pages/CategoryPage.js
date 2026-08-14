import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  CheckCircle2,
  Circle, 
  Search, 
  Copy, 
  Check, 
  Home, 
  Sparkles, 
  Menu, 
  X, 
  ArrowLeft,
  Share2,
  HelpCircle,
  Award
} from "lucide-react";

/* CATEGORY BRAND ACCENT MAP */
const categoryAccents = {
  javascript: { color: "from-amber-500 to-yellow-600", bgTint: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  react: { color: "from-cyan-500 to-blue-600", bgTint: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
  html: { color: "from-orange-500 to-red-600", bgTint: "bg-orange-500/10 text-orange-400 border-orange-500/30" },
  tailwind: { color: "from-teal-400 to-cyan-500", bgTint: "bg-teal-500/10 text-teal-400 border-teal-500/30" },
  node: { color: "from-emerald-500 to-green-600", bgTint: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  express: { color: "from-gray-500 to-slate-700", bgTint: "bg-slate-500/10 text-slate-300 border-slate-500/30" },
  java: { color: "from-red-500 to-amber-700", bgTint: "bg-red-500/10 text-red-400 border-red-500/30" },
  python: { color: "from-blue-500 to-amber-500", bgTint: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  dsa: { color: "from-purple-500 to-indigo-600", bgTint: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
  mongodb: { color: "from-emerald-500 to-teal-700", bgTint: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  mysql: { color: "from-blue-600 to-indigo-700", bgTint: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
};

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedAnswer, setCopiedAnswer] = useState(false);
  const [copiedQuestion, setCopiedQuestion] = useState(false);

  // LocalStorage learned tracking per category
  const storageKey = `interviewready_learned_${category?.toLowerCase()}`;
  const [learnedQuestions, setLearnedQuestions] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(learnedQuestions));
  }, [learnedQuestions, storageKey]);

  // Fetch Questions from API
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://interviewr-backend.onrender.com/api/questions/${category}`)
      .then((res) => {
        setQuestions(res.data || []);
        setCurrentIndex(0);
      })
      .catch((err) => {
        console.error("Error loading questions:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  const currentAccents = categoryAccents[category?.toLowerCase()] || {
    color: "from-indigo-600 via-purple-600 to-pink-600",
    bgTint: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
  };

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  const prevQuestion = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') nextQuestion();
      if (e.key === 'ArrowLeft') prevQuestion();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextQuestion, prevQuestion]);

  const toggleLearned = (index) => {
    if (learnedQuestions.includes(index)) {
      setLearnedQuestions(prev => prev.filter(i => i !== index));
    } else {
      setLearnedQuestions(prev => [...prev, index]);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'answer') {
      setCopiedAnswer(true);
      setTimeout(() => setCopiedAnswer(false), 2000);
    } else {
      setCopiedQuestion(true);
      setTimeout(() => setCopiedQuestion(false), 2000);
    }
  };

  const formatCategoryName = (cat) => {
    if (!cat) return "";
    return cat.toUpperCase() === "DSA" || cat.toUpperCase() === "HTML"
      ? cat.toUpperCase()
      : cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

  const filteredQuestions = questions.filter((q, idx) => {
    return q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           (q.answer && q.answer.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const isCurrentLearned = learnedQuestions.includes(currentIndex);
  const progressPercentage = questions.length > 0 
    ? Math.round((learnedQuestions.length / questions.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Top Category Hero Banner */}
      <div className="bg-slate-900/90 border-b border-slate-800 backdrop-blur-md pt-20 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left: Breadcrumbs & Title */}
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <Link to="/home" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-purple-400 font-semibold">{formatCategoryName(category)}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-r ${currentAccents.color} text-white shadow-lg`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                  {formatCategoryName(category)} Interview Preparation
                </h1>
                <p className="text-xs sm:text-sm text-slate-400">
                  Master core concepts, frequent interview questions, & detailed explanations
                </p>
              </div>
            </div>
          </div>

          {/* Right: Progress Tracker Widget */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
            <div className="flex items-center gap-2 text-emerald-400">
              <Award className="w-5 h-5" />
              <div>
                <div className="text-xs text-slate-400">Learned Progress</div>
                <div className="text-sm font-bold text-white">{learnedQuestions.length} / {questions.length} Questions</div>
              </div>
            </div>
            <div className="w-28 bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-green-400 h-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="text-xs font-bold text-emerald-400">{progressPercentage}%</span>
          </div>

        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Sidebar Toggle Button for Mobile */}
        <div className="lg:hidden flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-600/10 border border-purple-500/30 px-3 py-2 rounded-lg"
          >
            <Menu className="w-4 h-4" />
            <span>Question List ({questions.length})</span>
          </button>
          <span className="text-xs text-slate-400">
            Q {currentIndex + 1} of {questions.length}
          </span>
        </div>

        {/* SIDEBAR: Question Navigator (4 Columns Desktop) */}
        <div className={`
          lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col h-[750px] overflow-hidden
          fixed lg:relative inset-y-0 left-0 z-40 w-80 lg:w-auto transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Mobile Close Button */}
          <div className="lg:hidden flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <span className="font-bold text-sm text-slate-200">Select Question</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Box */}
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search in questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          {/* Question List Scrollable */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {isLoading ? (
              <div className="text-center py-10 text-xs text-slate-500 animate-pulse">Loading questions...</div>
            ) : filteredQuestions.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-500">No matching questions</div>
            ) : (
              questions.map((q, idx) => {
                const originalIndex = questions.findIndex(orig => orig._id === q._id || orig.question === q.question);
                const targetIdx = originalIndex !== -1 ? originalIndex : idx;
                const isSelected = targetIdx === currentIndex;
                const isLearned = learnedQuestions.includes(targetIdx);

                if (searchQuery && !filteredQuestions.includes(q)) return null;

                return (
                  <div
                    key={q._id || idx}
                    onClick={() => {
                      setCurrentIndex(targetIdx);
                      setIsSidebarOpen(false);
                    }}
                    className={`p-3 rounded-xl cursor-pointer border transition-all duration-200 ${
                      isSelected
                        ? 'bg-purple-600/15 border-purple-500/50 text-white shadow-md'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-950 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className={`w-6 h-6 rounded-lg text-[11px] font-bold flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {targetIdx + 1}
                        </span>
                        <p className="text-xs font-semibold truncate leading-tight">
                          {q.question}
                        </p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLearned(targetIdx);
                        }}
                        className="text-slate-500 hover:text-emerald-400 transition-colors"
                        title={isLearned ? "Marked as learned" : "Mark as learned"}
                      >
                        {isLearned ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-600" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* MAIN QUESTION DISPLAY CARD (8 Columns Desktop) */}
        <div className="lg:col-span-8 flex flex-col h-[750px]">
          
          {isLoading ? (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-12 flex-1 flex flex-col items-center justify-center text-center">
              <Sparkles className="w-10 h-10 text-purple-400 animate-spin mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Preparing Questions</h3>
              <p className="text-xs text-slate-400">Fetching {formatCategoryName(category)} interview content...</p>
            </div>
          ) : questions.length > 0 ? (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Question Header Controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentAccents.bgTint}`}>
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  {isCurrentLearned && (
                    <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Learned
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLearned(currentIndex)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      isCurrentLearned 
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30' 
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isCurrentLearned ? 'Learned' : 'Mark Learned'}</span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(questions[currentIndex].question, 'question')}
                    title="Copy Question"
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-400 hover:text-white transition-all"
                  >
                    {copiedQuestion ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Scrollable Question & Answer Content */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
                
                {/* QUESTION STATEMENT */}
                <div>
                  <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    <span>Interview Question:</span>
                  </h3>
                  <div className="bg-gradient-to-r from-indigo-950/40 to-slate-950/60 border-l-4 border-indigo-500 rounded-2xl p-5 border border-slate-800/80 shadow-md">
                    <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                      {questions[currentIndex].question}
                    </h2>
                  </div>
                </div>

                {/* DETAILED ANSWER SECTION */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Model Answer & Explanation:</span>
                    </h3>

                    <button
                      onClick={() => copyToClipboard(questions[currentIndex].answer, 'answer')}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/60 transition-all"
                    >
                      {copiedAnswer ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Answer</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 shadow-inner text-slate-200 text-sm leading-relaxed whitespace-pre-line font-sans">
                    {questions[currentIndex].answer}
                  </div>
                </div>

              </div>

              {/* Bottom Keyboard & Navigation Control Footer */}
              <div className="pt-4 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={prevQuestion}
                  disabled={currentIndex === 0}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 text-slate-200 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="text-xs text-slate-500 font-mono hidden sm:block">
                  Tip: Use <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-300">←</kbd> <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-300">→</kbd> arrow keys to navigate
                </div>

                {currentIndex === questions.length - 1 ? (
                  <button
                    onClick={() => navigate('/home')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Complete Category</span>
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          ) : (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-12 flex-1 flex flex-col items-center justify-center text-center">
              <HelpCircle className="w-12 h-12 text-slate-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Questions Found</h3>
              <p className="text-xs text-slate-400 mb-6">No questions available for category "{formatCategoryName(category)}".</p>
              <Link
                to="/home"
                className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default CategoryPage;