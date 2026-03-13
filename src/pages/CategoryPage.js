import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* BACKGROUND IMAGES */
import jsBg from "../photos/js.jpg";
import devBg from "../photos/devops.jpg";
import defaultBg from "../photos/default.jpg";

/* CATEGORY → BACKGROUND MAP */
const categoryBackground = {
  javascript: jsBg,
  react: devBg
};

function CategoryPage() {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /* SELECT BACKGROUND BASED ON CATEGORY */
  const bgImage = categoryBackground[category?.toLowerCase()] || defaultBg;

  useEffect(() => {
    axios
      .get(`https://interviewr-backend.onrender.com/api/questions/${category}`)
      .then((res) => {
        setQuestions(res.data);
      });
  }, [category]);

  const nextQuestion = () => {
    if(currentIndex < questions.length - 1){
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDone = () => {
    window.location.href = '/home';
  };

  // Format category name for display
  const formatCategoryName = (cat) => {
    return cat?.charAt(0).toUpperCase() + cat?.slice(1).toLowerCase() || '';
  };

  return (
    <>
      <Navbar />
     
      {/* BACKGROUND CONTAINER */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* DARK OVERLAY WITH PURPLE/BLUE BLUR */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5e60ce]/80 via-purple-600/70 to-blue-600/80 backdrop-blur-md"></div>

        {/* MAIN LAYOUT */}
        <div className="relative flex flex-col lg:flex-row min-h-screen">
          {/* Mobile Sidebar Toggle - Updated with new color */}
          <div className="lg:hidden fixed bottom-4 right-4 z-50">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-[#5e60ce] hover:bg-[#4a4cb3] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* SIDEBAR - Desktop & Mobile */}
          <div className={`
            lg:w-80 lg:block lg:relative lg:translate-x-0
            fixed inset-y-0 left-0 z-40 w-72
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            <div className="h-full bg-white/95 backdrop-blur-md shadow-2xl overflow-y-auto">
              {/* Sidebar Header - Updated with gradient */}
              <div className="sticky top-0 bg-gradient-to-r from-[#5e60ce] to-purple-600 text-white p-6">
                <h2 className="text-2xl font-bold capitalize flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {formatCategoryName(category)} Questions
                </h2>
                <p className="text-purple-100 text-sm mt-2">{questions.length} Questions Available</p>
                
                {/* Language Progress in Sidebar */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">Progress: {formatCategoryName(category)}</span>
                    <span>{questions.length > 0 ? `${Math.round(((currentIndex + 1) / questions.length) * 100)}%` : '0%'}</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-300"
                      style={{ width: questions.length > 0 ? `${((currentIndex + 1) / questions.length) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Questions List */}
              <div className="p-4 space-y-2">
                {questions.map((q, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      p-4 cursor-pointer rounded-xl transition-all duration-300 transform hover:scale-102
                      ${index === currentIndex
                        ? "bg-gradient-to-r from-[#5e60ce] to-purple-600 text-white shadow-lg scale-105"
                        : "bg-gray-50 hover:bg-purple-50 text-gray-700 hover:shadow-md"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${index === currentIndex 
                          ? "bg-white text-[#5e60ce]" 
                          : "bg-purple-100 text-purple-700"}
                      `}>
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium truncate">Question {index + 1}</p>
                        <p className="text-xs opacity-75 truncate mt-1">
                          {q.question.substring(0, 40)}...
                        </p>
                      </div>
                      {index === currentIndex && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}

          {/* MAIN CONTENT */}
          <div className="flex-1 flex justify-center items-start p-4 lg:p-10">
            {questions.length > 0 ? (
              <div className="w-full max-w-4xl">
                {/* Progress Bar with Language */}
                <div className="mb-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <div className="flex justify-between text-white text-sm mb-2">
                    <span className="font-semibold flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Progress: {formatCategoryName(category)}
                    </span>
                    <span>{currentIndex + 1} of {questions.length} Questions</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question Card - Updated with new colors */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                  {/* Card Header - Updated gradient */}
                  <div className="bg-gradient-to-r from-[#5e60ce] to-purple-600 px-6 py-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Question {currentIndex + 1}
                    </h2>
                  </div>

                  {/* Question Content */}
                  <div className="p-6 lg:p-8">
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-[#5e60ce] uppercase tracking-wider mb-3">Question:</h3>
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5 border-l-4 border-[#5e60ce]">
                        <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                          {questions[currentIndex].question}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-[#5e60ce] uppercase tracking-wider mb-3">Answer:</h3>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border-l-4 border-purple-600">
                        <p className="text-gray-700 leading-relaxed">
                          {questions[currentIndex].answer}
                        </p>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                      <button
                        onClick={prevQuestion}
                        disabled={currentIndex === 0}
                        className={`
                          flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium w-full sm:w-auto
                          transition-all duration-300 transform hover:scale-105
                          ${currentIndex === 0
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-[#5e60ce] hover:bg-[#4a4cb3] text-white shadow-lg hover:shadow-xl"
                          }
                        `}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Previous
                      </button>

                      <span className="text-sm text-gray-500 order-first sm:order-none">
                        Question {currentIndex + 1} of {questions.length}
                      </span>

                      {currentIndex === questions.length - 1 ? (
                        <button
                          onClick={handleDone}
                          className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium w-full sm:w-auto
                            bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                            text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Done
                        </button>
                      ) : (
                        <button
                          onClick={nextQuestion}
                          disabled={currentIndex === questions.length - 1}
                          className={`
                            flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium w-full sm:w-auto
                            transition-all duration-300 transform hover:scale-105
                            ${currentIndex === questions.length - 1
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl"
                            }
                          `}
                        >
                          Next
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-12 text-center">
                <div className="animate-pulse">
                  <div className="w-24 h-24 bg-[#5e60ce]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#5e60ce]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Loading Questions</h3>
                  <p className="text-gray-600">Please wait while we prepare your {formatCategoryName(category)} questions...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
       <Footer />
    </>
  );
}

export default CategoryPage;