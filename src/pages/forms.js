import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    interviewCategory: [],
    educationLevel: [],
    experienceLevel: [],
    doubtQuestion: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        [field]: [...formData[field], value],
      });
    } else {
      setFormData({
        ...formData,
        [field]: formData[field].filter((item) => item !== value),
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (formData.interviewCategory.length === 0) {
      newErrors.interviewCategory = "Please select at least one category";
    }
    
    if (formData.educationLevel.length === 0) {
      newErrors.educationLevel = "Please select your education level";
    }
    
    if (formData.experienceLevel.length === 0) {
      newErrors.experienceLevel = "Please select your experience level";
    }
    
    if (!formData.doubtQuestion.trim()) {
      newErrors.doubtQuestion = "Please describe your doubt";
    } else if (formData.doubtQuestion.length < 10) {
      newErrors.doubtQuestion = "Please provide more details (at least 10 characters)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setLoading(true);

    try {
      await axios.post("interviewr-backend.onrender.com/api/forms/submit", formData);
      
      setLoading(false);
      setShowSuccessModal(true);

    } catch (error) {
      setLoading(false);
      alert("Error submitting form. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Reset form
    setFormData({
      name: "",
      interviewCategory: [],
      educationLevel: [],
      experienceLevel: [],
      doubtQuestion: "",
      message: "",
    });
    // Navigate to home page
    navigate("/");
  };

  const categories = [
    "Data Structures & Algorithms",
    "MERN Stack",
    "Backend Development",
    "Frontend Development",
    "DevOps",
    "Machine Learning",
    "Behavioral / HR",
    "Java",
    "Javascript",
    "Python",
    "React.js",
    "Node.js",
    "System Design",
    "Database Design",
    "Cloud Computing",
  ];

  const educationLevels = [
    { value: "10th", label: "📚 10th (Secondary School)" },
    { value: "12th", label: "📖 12th (Higher Secondary)" },
    { value: "bca", label: "💻 BCA – Bachelor of Computer Applications" },
    { value: "btech", label: "🔧 B.Tech – Bachelor of Technology" },
    { value: "mca", label: "🎓 MCA – Master of Computer Applications" },
    { value: "mtech", label: "⚙️ M.Tech – Master of Technology" },
    { value: "diploma", label: "📘 Diploma in Computer Science" },
    { value: "selfTaught", label: "🌟 Self-Taught / Bootcamp" },
  ];

  const experienceLevels = [
    { value: "student", label: "👨‍🎓 Student", icon: "🎓" },
    { value: "fresher", label: "🌟 Fresher", icon: "🌱" },
    { value: "0-2", label: "📅 0–2 years", icon: "⚡" },
    { value: "2-5", label: "📊 2–5 years", icon: "📈" },
    { value: "5plus", label: "🚀 5+ years", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform animate-slideUp">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-8">
                Your form has been submitted successfully. Thank you for reaching out!
              </p>
              <button
                onClick={handleCloseModal}
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto relative">
        {/* Main Form Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-10 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-2 animate-fadeIn">
              Interview Doubt Submission
            </h1>
            <p className="text-indigo-100 text-center text-lg max-w-2xl mx-auto">
              Get personalized guidance for your interview preparation. Share your doubts and we'll help you succeed! 🚀
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10 sm:py-12 space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 text-xl">👤</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 border-2 ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white/50'
                    } rounded-2xl focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-lg`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 animate-shake">{errors.name}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Interview Category Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-xl">📋</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Interview Categories</h2>
              </div>

              {errors.interviewCategory && (
                <p className="text-red-500 text-sm animate-shake">{errors.interviewCategory}</p>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categories.map((item, index) => (
                  <label
                    key={item}
                    className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                      formData.interviewCategory.includes(item) ? 'scale-105' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <input
                      type="checkbox"
                      value={item}
                      checked={formData.interviewCategory.includes(item)}
                      onChange={(e) => handleCheckboxChange(e, "interviewCategory")}
                      className="absolute opacity-0 w-full h-full cursor-pointer"
                    />
                    <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.interviewCategory.includes(item)
                        ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                        : 'border-gray-200 bg-white/50 hover:border-indigo-300 hover:bg-indigo-50/50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                          formData.interviewCategory.includes(item)
                            ? 'border-indigo-500 bg-indigo-500'
                            : 'border-gray-300 bg-white'
                        }`}>
                          {formData.interviewCategory.includes(item) && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`font-medium ${
                          formData.interviewCategory.includes(item) ? 'text-indigo-700' : 'text-gray-700'
                        }`}>
                          {item}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Education Level Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🎓</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Education Level</h2>
              </div>

              {errors.educationLevel && (
                <p className="text-red-500 text-sm animate-shake">{errors.educationLevel}</p>
              )}

              <div className="grid sm:grid-cols-2 gap-3">
                {educationLevels.map((item, index) => (
                  <label
                    key={item.value}
                    className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                      formData.educationLevel.includes(item.value) ? 'scale-105' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <input
                      type="checkbox"
                      value={item.value}
                      checked={formData.educationLevel.includes(item.value)}
                      onChange={(e) => handleCheckboxChange(e, "educationLevel")}
                      className="absolute opacity-0 w-full h-full cursor-pointer"
                    />
                    <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.educationLevel.includes(item.value)
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 bg-white/50 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                          formData.educationLevel.includes(item.value)
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 bg-white'
                        }`}>
                          {formData.educationLevel.includes(item.value) && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`font-medium ${
                          formData.educationLevel.includes(item.value) ? 'text-blue-700' : 'text-gray-700'
                        }`}>
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xl">💼</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Experience Level</h2>
              </div>

              {errors.experienceLevel && (
                <p className="text-red-500 text-sm animate-shake">{errors.experienceLevel}</p>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {experienceLevels.map((item, index) => (
                  <label
                    key={item.value}
                    className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                      formData.experienceLevel.includes(item.value) ? 'scale-105' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <input
                      type="checkbox"
                      value={item.value}
                      checked={formData.experienceLevel.includes(item.value)}
                      onChange={(e) => handleCheckboxChange(e, "experienceLevel")}
                      className="absolute opacity-0 w-full h-full cursor-pointer"
                    />
                    <div className={`p-5 rounded-xl border-2 transition-all duration-300 text-center ${
                      formData.experienceLevel.includes(item.value)
                        ? 'border-green-500 bg-green-50 shadow-lg'
                        : 'border-gray-200 bg-white/50 hover:border-green-300 hover:bg-green-50/50'
                    }`}>
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <span className={`font-medium block ${
                        formData.experienceLevel.includes(item.value) ? 'text-green-700' : 'text-gray-700'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Doubt Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-xl">❓</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Your Doubt</h2>
              </div>

              <div className="space-y-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doubt / Question <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="doubtQuestion"
                    value={formData.doubtQuestion}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-6 py-4 border-2 ${
                      errors.doubtQuestion ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white/50'
                    } rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 outline-none resize-none text-lg`}
                    placeholder="Describe your doubt in detail... The more specific you are, the better we can help you!"
                  />
                  {errors.doubtQuestion && (
                    <p className="text-red-500 text-sm mt-2 animate-shake">{errors.doubtQuestion}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-6 py-4 border-2 border-gray-200 bg-white/50 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 outline-none resize-none text-lg"
                    placeholder="Any additional context or specific requirements..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button - Full Width at Bottom */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full group relative px-8 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-bold text-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Your Doubt</span>
                      <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Forms;