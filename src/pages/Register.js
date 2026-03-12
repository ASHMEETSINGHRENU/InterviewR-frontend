import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Calendar, Lock, Briefcase } from "lucide-react";

// Import the image
import registerImage from "../photos/regis_img.jpg";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    interviewCategory: [],
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

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
    "Node.js"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        interviewCategory: [...formData.interviewCategory, value]
      });
    } else {
      setFormData({
        ...formData,
        interviewCategory: formData.interviewCategory.filter(
          (cat) => cat !== value
        )
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 1 || formData.age > 90) {
      newErrors.age = "Please enter a valid age";
    }
    
    if (formData.interviewCategory.length === 0) {
      newErrors.interviewCategory = "Please select at least one category";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to the first error
      const firstError = document.querySelector('.border-red-400');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful");
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c0c0c0] via-[#d3d3d3] to-[#e0e0e0] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#a0a0a0]/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#b0b0b0]/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#808080]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="max-w-6xl w-full relative z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60">
          
          <div className="grid lg:grid-cols-2">
            
            {/* Left Side - Image Section */}
            <div className="hidden lg:block relative h-full min-h-[700px] bg-gradient-to-br from-[#a0a0a0] to-[#c0c0c0]">
              <img
                src={registerImage}
                alt="Registration visual - Interview preparation"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white bg-gradient-to-t from-[#606060]/80 via-[#808080]/40 to-transparent">
                <div className="text-center transform hover:scale-105 transition-transform duration-500">
                  <h2 className="text-4xl font-bold mb-4 text-white">Join InterviewReady!</h2>
                  <p className="text-lg text-white/90 mb-8">
                    Create your account and start your interview preparation journey
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: "0s" }}>
                      <span className="text-2xl">📚</span>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: "0.2s" }}>
                      <span className="text-2xl">💪</span>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: "0.4s" }}>
                      <span className="text-2xl">🎯</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-12 space-y-4">
                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <span className="text-2xl">✓</span>
                      <span className="text-sm">Personalized interview preparation</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <span className="text-2xl">✓</span>
                      <span className="text-sm">Access to 1000+ interview questions</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <span className="text-2xl">✓</span>
                      <span className="text-sm">Expert guidance and feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="p-8 sm:p-12 lg:p-16 max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#c0c0c0] scrollbar-track-transparent">
              <div className="max-w-md mx-auto w-full">
                
                {/* Header */}
                <div className="text-center lg:text-left mb-8">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-2">
                    Create Account
                  </h1>
                  <p className="text-gray-500">
                    Join us and ace your interviews! ✨
                  </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-600">
                      Full Name
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-[#a0a0a0] group-focus-within:text-[#808080] transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border-2 ${
                          errors.fullName ? 'border-red-400' : 'border-[#c0c0c0]'
                        } rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#a0a0a0] focus:ring-4 focus:ring-[#c0c0c0]/30 transition-all duration-300 outline-none`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 animate-shake">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-600">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-[#a0a0a0] group-focus-within:text-[#808080] transition-colors" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border-2 ${
                          errors.email ? 'border-red-400' : 'border-[#c0c0c0]'
                        } rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#a0a0a0] focus:ring-4 focus:ring-[#c0c0c0]/30 transition-all duration-300 outline-none`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 animate-shake">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-600">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-[#a0a0a0] group-focus-within:text-[#808080] transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border-2 ${
                          errors.phone ? 'border-red-400' : 'border-[#c0c0c0]'
                        } rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#a0a0a0] focus:ring-4 focus:ring-[#c0c0c0]/30 transition-all duration-300 outline-none`}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 animate-shake">{errors.phone}</p>
                    )}
                  </div>

                  {/* Age */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-600">
                      Age
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-[#a0a0a0] group-focus-within:text-[#808080] transition-colors" />
                      </div>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border-2 ${
                          errors.age ? 'border-red-400' : 'border-[#c0c0c0]'
                        } rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#a0a0a0] focus:ring-4 focus:ring-[#c0c0c0]/30 transition-all duration-300 outline-none`}
                        placeholder="25"
                        min="1"
                        max="120"
                      />
                    </div>
                    {errors.age && (
                      <p className="text-red-500 text-xs mt-1 animate-shake">{errors.age}</p>
                    )}
                  </div>

                  {/* Interview Category */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                      Interview Categories
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <Briefcase className="h-5 w-5 text-[#a0a0a0]" />
                      </div>
                      <div className={`pl-10 pr-3 py-2 bg-white/80 backdrop-blur-sm border-2 ${
                        errors.interviewCategory ? 'border-red-400' : 'border-[#c0c0c0]'
                      } rounded-xl max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-[#c0c0c0] scrollbar-track-transparent`}>
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((category) => (
                            <label key={category} className="flex items-center space-x-2 cursor-pointer group">
                              <input
                                type="checkbox"
                                value={category}
                                onChange={handleCategoryChange}
                                className="w-4 h-4 accent-[#808080]"
                              />
                              <span className="text-xs text-gray-600 group-hover:text-gray-800">{category}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    {errors.interviewCategory && (
                      <p className="text-red-500 text-xs mt-1 animate-shake">{errors.interviewCategory}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-[#a0a0a0] group-focus-within:text-[#808080] transition-colors" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-12 py-3 bg-white/80 backdrop-blur-sm border-2 ${
                          errors.password ? 'border-red-400' : 'border-[#c0c0c0]'
                        } rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#a0a0a0] focus:ring-4 focus:ring-[#c0c0c0]/30 transition-all duration-300 outline-none`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#a0a0a0] hover:text-[#808080] transition-colors"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1 animate-shake">{errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-600">
                      Confirm Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-[#a0a0a0] group-focus-within:text-[#808080] transition-colors" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-12 py-3 bg-white/80 backdrop-blur-sm border-2 ${
                          errors.confirmPassword ? 'border-red-400' : 'border-[#c0c0c0]'
                        } rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#a0a0a0] focus:ring-4 focus:ring-[#c0c0c0]/30 transition-all duration-300 outline-none`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#a0a0a0] hover:text-[#808080] transition-colors"
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1 animate-shake">{errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-[#a0a0a0] to-[#c0c0c0] text-gray-800 py-3 rounded-xl font-semibold text-lg hover:from-[#909090] hover:to-[#b0b0b0] transition-all duration-300 transform hover:scale-105 hover:shadow-xl mt-6"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>Create Account</span>
                    </span>
                  </button>

                  {/* Login Link */}
                  <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account?{" "}
                    <Link
                      to="/"
                      className="text-[#808080] hover:text-[#606060] font-semibold hover:underline transition-all"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Custom scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #c0c0c0;
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a0a0a0;
        }
      `}</style>
    </div>
  );
}

export default Register;