import { useState, useEffect } from "react";
import { assets } from "../assets/asset";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update token when localStorage changes (in same or other tabs)
  useEffect(() => {
    const syncToken = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", syncToken);
    return () => window.removeEventListener("storage", syncToken);
  }, []);

  // Also check token on mount (or every route change)
  useEffect(() => {
    const tokenCheck = () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken !== token) {
        setToken(storedToken);
      }
    };

    const interval = setInterval(tokenCheck, 500); // Poll every 500ms
    return () => clearInterval(interval);
  }, [token]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-[#F3F4F6]/90 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
            <div className="h-11 w-11 bg-gradient-to-r from-[#BE5959] to-[#a94444] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="ml-3 font-bold text-xl text-[#374151]">
              <span className="text-[#BE5959]">Navigate </span>Growth
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link text-[#374151] hover:text-[#BE5959]">Home</a>
            <a href="/interviewer" className="nav-link text-[#374151] hover:text-[#BE5959]">All Interviewers</a>
            <a href="/my-interviews" className="nav-link text-[#374151] hover:text-[#BE5959]">Events</a>
            <a href="/about" className="nav-link text-[#374151] hover:text-[#BE5959]">About</a>

            {token ? (
              <div className="relative group ml-6 cursor-pointer">
                <div className="w-10 h-10 bg-cover rounded-full border-2 border-[#BE5959] overflow-hidden">
                  <img src={assets.img22} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 pt-12 hidden group-hover:block z-20">
                  <div className="bg-white rounded-lg shadow-lg p-3 w-40">
                    <p onClick={() => navigate("/my-profile")} className="dropdown-item text-[#374151] hover:text-[#BE5959]">My Profile</p>
                    <p onClick={() => navigate("/my-interviews")} className="dropdown-item text-[#374151] hover:text-[#BE5959]">My Interviews</p>
                    <div className="my-1 border-t border-gray-200"></div>
                    <p onClick={handleLogout} className="dropdown-item text-red-500 hover:bg-red-50">Logout</p>
                  </div>
                </div>
              </div>
            ) : (
              <a href="/login" className="ml-6 px-6 py-2 bg-[#BE5959] text-white font-medium rounded-lg shadow hover:bg-[#a94444] transition-all duration-300">
                Sign Up
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 focus:outline-none focus:ring-2 focus:ring-[#BE5959]">
              {isOpen ? (
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="w-6 h-0.5 bg-[#374151] rotate-45 transform translate-y-0.5" />
                  <span className="w-6 h-0.5 bg-[#374151] -rotate-45 transform -translate-y-0.5" />
                </div>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-between">
                  <span className="w-6 h-0.5 bg-[#374151]" />
                  <span className="w-6 h-0.5 bg-[#374151]" />
                  <span className="w-6 h-0.5 bg-[#374151]" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="px-4 py-3 space-y-2">
          <a href="/" className="mobile-link text-[#374151] hover:text-[#BE5959]">Home</a>
          <a href="/interviewer" className="mobile-link text-[#374151] hover:text-[#BE5959]">All Interviewers</a>
          <a href="/my-interviews" className="mobile-link text-[#374151] hover:text-[#BE5959]">Events</a>
          <a href="/about" className="mobile-link text-[#374151] hover:text-[#BE5959]">About</a>

          {token ? (
            <div className="pt-2 space-y-2">
              <button onClick={() => navigate("/my-profile")} className="mobile-link text-left text-[#374151] hover:text-[#BE5959]">My Profile</button>
              <button onClick={() => navigate("/my-interviews")} className="mobile-link text-left text-[#374151] hover:text-[#BE5959]">My Interviews</button>
              <button onClick={handleLogout} className="mobile-link text-left text-red-500 hover:bg-red-50">
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="block w-full px-4 py-3 bg-[#BE5959] text-white text-center font-medium rounded-lg shadow hover:bg-[#a94444] transition-all duration-300 mt-4">
              Sign Up
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
