import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { LogOut, Home, Contact, Info } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://interviewr-backend.onrender.com/api/auth/profile/${userId}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
  }, [userId]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleLogout = () => {
  // Show confirmation dialog
  const confirmLogout = window.confirm("👋 Are you sure you want to logout?");
  
  if (confirmLogout) {
    localStorage.clear();
    // Show success message
    alert("✅ You have been successfully logged out. See you again!");
    navigate("/");
  }
};

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-1 sm:py-2"
            : "bg-white/50 backdrop-blur-md py-2 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Brand - Smaller on mobile */}
            <div
              onClick={() => handleNavigation("/home")}
              className="relative group cursor-pointer"
            >
              <h1 className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300 truncate max-w-[120px] sm:max-w-none">
                InterviewReady
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Desktop Navigation */}
            {user && (
              <div className="hidden md:flex items-center space-x-4">
                {/* Home Link */}
                <button
                  onClick={() => handleNavigation("/home")}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 group ${
                    isActive("/home")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </span>
                  {isActive("/home") && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>

               {/* Contact Link */}
<button
  onClick={() => handleNavigation("/contact")}
  className={`relative px-4 py-2 rounded-xl transition-all duration-300 group ${
    isActive("/contact")
      ? "text-blue-600 bg-blue-50"
      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
  }`}
>
  <span className="flex items-center space-x-2">
    <Contact className="w-4 h-4" />
    <span>Contact</span>
  </span>
  {isActive("/contact") && (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
  )}
</button>

{/* About Us Link */}
<button
  onClick={() => handleNavigation("/about")}
  className={`relative px-4 py-2 rounded-xl transition-all duration-300 group ${
    isActive("/about")
      ? "text-blue-600 bg-blue-50"
      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
  }`}
>
  <span className="flex items-center space-x-2">
    <Info className="w-4 h-4" />
    <span>About Us</span>
  </span>
  {isActive("/about") && (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
  )}
</button>









                {/* Profile Dropdown/Button */}
                <div className="relative group">
                  <button
                    onClick={() => handleNavigation("/profile")}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive("/profile")
                        ? "bg-purple-50 text-purple-600"
                        : "hover:bg-purple-50 text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={
                          user.profileImage
                            ? `https://interviewr-backend.onrender.com/uploads/${user.profileImage}`
                            : `https://ui-avatars.com/api/?name=${user.fullName}&background=6366f1&color=fff&bold=true`
                        }
                        alt={user.fullName}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-purple-400 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="font-medium hidden lg:block">{user.fullName}</span>
                  </button>

                  {/* Quick Stats Tooltip */}
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-3">
                      <p className="text-xs text-gray-500">Welcome back!</p>
                      <p className="text-sm font-semibold text-gray-800 truncate">{user.email}</p>
                    </div>
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}

            {/* Mobile - Show only hamburger menu when user is logged in */}
            {user && (
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative w-9 h-9 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && user && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel - Smaller width and positioned to not cover content */}
          <div className="absolute right-0 top-12 h-full w-64 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-300 animate-slideIn">
            <div className="p-5">
              {/* User Info - Compact */}
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                <div className="relative">
                  <img
                    src={
                      user.profileImage
                        ? `https://interviewr-backend.onrender.com/uploads/${user.profileImage}`
                        : `https://ui-avatars.com/api/?name=${user.fullName}&background=6366f1&color=fff&bold=true`
                    }
                    alt={user.fullName}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm truncate">{user.fullName}</h3>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              </div>

              {/* Mobile Navigation Links - Compact */}
              <div className="mt-4 space-y-1">
                <button
                  onClick={() => handleNavigation("/home")}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive("/home")
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span className="text-sm font-medium">Home</span>
                </button>

                <button
                  onClick={() => handleNavigation("/profile")}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive("/profile")
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Profile</span>
                </button>


 <button
    onClick={() => handleNavigation("/contact")}
    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${
      isActive("/contact")
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    <Contact className="w-4 h-4" />
    <span className="text-sm font-medium">Contact</span>
  </button>

  {/* Add About to mobile menu */}
  <button
    onClick={() => handleNavigation("/about")}
    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${
      isActive("/about")
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    <Info className="w-4 h-4" />
    <span className="text-sm font-medium">About Us</span>
  </button>

  <button
    onClick={() => handleNavigation("/profile")}
    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${
      isActive("/profile")
        ? "bg-purple-50 text-purple-600"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    <User className="w-4 h-4" />
    <span className="text-sm font-medium">Profile</span>
  </button>




                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 mt-3"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer - Adjusted for mobile to prevent content hiding */}
<div className="h-12 sm:h-14"></div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;