import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn, Github, Chrome } from "lucide-react";


// Import the image
import loginImage from "../photos/login_img.jpg";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  // If user already logged in, redirect to home
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "interviewr-backend.onrender.com/api/auth/login",
        formData
      );

      const { token, user } = res.data;

      // Save authentication data
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user?.id);

      // Set axios default header
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Show success message
      // You can replace this with a toast notification later
      alert("✅ Login Successful! Welcome to InterviewReady.");
      navigate("/home");
    } catch (error) {
      console.error(error);
      setErrors({
        ...errors,
        general: error?.response?.data?.message || "Invalid email or password"
      });
    } finally {
      setLoading(false);
    }
  };

const handleGoogleLogin = () => {
    alert("⚠️ Google login is currently unavailable due to server maintenance. Please use email/password to login manually.");
    // window.location.href = "#";
  };

  const handleGithubLogin = () => {
    alert("🔄 GitHub login service is temporarily down. Please sign in with your email and password instead.");
    // window.location.href = "#";
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cbb2fe] via-[#dcc7ff] to-[#e9d9ff] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      
      {/* Animated Background Elements - Updated with new colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d0b5ff] rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e5d0ff] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f0e4ff] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-40"></div>
      </div>

      {/* Floating Particles - Updated with lighter color */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#cbb2fe]/30 rounded-full animate-float"
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
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          
          <div className="grid lg:grid-cols-2">
            
            {/* Left Side - Image Section - Updated gradient */}
            <div className="hidden lg:block relative h-full min-h-[600px] bg-gradient-to-br from-[#cbb2fe]/90 to-[#dcc7ff]/90">
              <img
                src={loginImage}
                alt="Login visual - Interview preparation"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              
              {/* Overlay Content - Updated gradient */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white bg-gradient-to-t from-[#b39ddb]/90 via-[#cbb2fe]/50 to-transparent">
                <div className="text-center transform hover:scale-105 transition-transform duration-500">
                  <h2 className="text-4xl font-bold mb-4 text-white">Welcome Back!</h2>
                  <p className="text-lg text-white/90 mb-8">
                    Sign in to continue your interview preparation journey
                  </p>
                  
                  {/* Decorative Elements - Updated colors */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-bounce" style={{ animationDelay: "0s" }}>
                      <span className="text-2xl">💼</span>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-bounce" style={{ animationDelay: "0.2s" }}>
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-bounce" style={{ animationDelay: "0.4s" }}>
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>

                  {/* Testimonial/Quote - Updated styles */}
                  <div className="mt-12 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                    <p className="text-sm italic text-white">
                      "The best investment you can make is in yourself. Start your interview preparation journey today!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-8 sm:p-12 lg:p-16 bg-white/20 backdrop-blur-sm">
              <div className="max-w-md mx-auto w-full">
                
                {/* Header - Updated text colors */}
                <div className="text-center lg:text-left mb-8">
              <h1 className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300 truncate max-w-[120px] sm:max-w-none">
                InterviewReady
              </h1>
                  <p className="text-[#4a3b6e]">
                    Welcome back! Please enter your details
                  </p>
                </div>

                {/* Error Message */}
                {errors.general && (
                  <div className="mb-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-2xl text-red-700 text-sm animate-shake">
                    {errors.general}
                  </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Email Field - Updated focus colors */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#2d1b4e]">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-[#6b5b8e] group-focus-within:text-[#cbb2fe] transition-colors" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 bg-white/40 backdrop-blur-sm border-2 ${
                          errors.email ? 'border-red-400' : 'border-[#cbb2fe]'
                        } rounded-2xl text-[#2d1b4e] placeholder-[#6b5b8e]/50 focus:border-[#b39ddb] focus:ring-4 focus:ring-[#cbb2fe]/20 transition-all duration-300 outline-none`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-shake">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Field - Updated focus colors */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#2d1b4e]">
                      Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-[#6b5b8e] group-focus-within:text-[#cbb2fe] transition-colors" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-12 py-4 bg-white/40 backdrop-blur-sm border-2 ${
                          errors.password ? 'border-red-400' : 'border-[#cbb2fe]'
                        } rounded-2xl text-[#2d1b4e] placeholder-[#6b5b8e]/50 focus:border-[#b39ddb] focus:ring-4 focus:ring-[#cbb2fe]/20 transition-all duration-300 outline-none`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#6b5b8e] hover:text-[#cbb2fe] transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1 animate-shake">{errors.password}</p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password - Updated colors */}
                       <div className="flex items-center justify-between">
                         <label className="flex items-center space-x-2 cursor-pointer group">
                           <div className="relative">
                             <input
                               type="checkbox"
                               checked={rememberMe}
                               onChange={(e) => setRememberMe(e.target.checked)}
                               className="absolute opacity-0 w-4 h-4 cursor-pointer"
                             />
                            <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-all duration-200 ${ rememberMe  ? 'bg-blue-500 border-blue-500' 
                                 : 'border-blue-300 bg-white/80 group-hover:border-blue-500'
                             }`}>
                               {rememberMe && (
                                 <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                 </svg>
                               )}
                             </div>
                           </div>
                           <span className="text-sm text-gray-600 group-hover:text-gray-800">Remember me</span>
                         </label>
                       </div>

                  {/* Login Button - Updated gradient */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-[#cbb2fe] to-[#b39ddb] text-[#2d1b4e] py-4 rounded-2xl font-semibold text-lg hover:from-[#b39ddb] hover:to-[#a58ac7] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-[#2d1b4e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Logging in...</span>
                        </>
                      ) : (
                        <>
                          <LogIn className="w-5 h-5" />
                          <span>Login</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b39ddb] to-[#a58ac7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  {/* Social Login Divider - Updated colors */}
                  <div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-[#4a3b6e]">Or continue with</span>
                    </div>
                  </div>

                  {/* Social Login Buttons - Updated colors */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="flex items-center justify-center space-x-2 py-3 px-4 bg-white/40 backdrop-blur-sm border border-[#cbb2fe] rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <Chrome className="w-5 h-5 text-[#4a3b6e] group-hover:text-[#2d1b4e]" />
                      <span className="text-sm text-[#4a3b6e] group-hover:text-[#2d1b4e]">Google</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleGithubLogin}
                      className="flex items-center justify-center space-x-2 py-3 px-4 bg-white/40 backdrop-blur-sm border border-[#cbb2fe] rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <Github className="w-5 h-5 text-[#4a3b6e] group-hover:text-[#2d1b4e]" />
                      <span className="text-sm text-[#4a3b6e] group-hover:text-[#2d1b4e]">GitHub</span>
                    </button>
                  </div>

                  {/* Register Link - Updated colors */}
                  <p className="text-center text-[#4a3b6e] text-sm">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-[#6b5b8e] hover:text-[#cbb2fe] font-semibold hover:underline transition-all"
                    >
                      Create account
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
      `}</style>
    </div>
  );
}

export default Login;