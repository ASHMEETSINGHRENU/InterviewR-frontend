import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import AdminUpload from "./pages/AdminUpload";
// import AdminRegister from "./pages/Admin_register";
import AdminLogin from "./pages/Admin_login";
import Forms from "./pages/forms";
import About from "./pages/about";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin-register" element={<AdminRegister />} /> */}
        <Route path="/ASH2002_admin-login" element={<AdminLogin />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Navbar />
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
  path="/about"
  element={
    <ProtectedRoute>
      <Navbar />
      <About />
    </ProtectedRoute>
  }
/>




        <Route
          path="/forms"
          element={
            <ProtectedRoute>
              <Navbar />
              <Forms />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-upload"
          element={
            <ProtectedRoute>
              <AdminUpload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/:category"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />


      </Routes>
    </Router>
  );
}

export default App;

