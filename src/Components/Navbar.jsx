import { useState, useEffect } from "react";
import { assets } from "../assets/asset";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [tokan,setToken]=useState(true)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-white/90 py-4"}`}>
      <div className="max-[1350px] mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div onClick={()=>navigate("/home")} className="flex items-center cursor-pointer">
            <div className="h-10 w-10 bg-gradient-to-r from-be5959 to-be5959 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="ml-3 font-bold text-xl text-gray-800">
              <span className="text-be5959">Navigate </span>Growth
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:w-[650px] lg:flex lg:justify-around">
            <a href="/home" className="px-3 py-2 text-gray-700 hover:text-be5959 font-medium transition duration-200">Home</a>
            <a href="/interviewer" className="px-3 py-2 text-gray-700 hover:text-be5959 font-medium transition duration-200">All Interviewers</a>
            <a href="/my-interviews" className="px-3 py-2 text-gray-700 hover:text-be5959 font-medium transition duration-200">Events</a>
            <a href="/about" className="px-3 py-2 text-gray-700 hover:text-be5959 font-medium transition duration-200">About</a>
            {
                tokan 
                ? <div className="flex items-center gap-2 cursor-pointer group relative">
                    <img className="w-10 h-10 bg-cover rounded-[50%]" src={assets.img22} alt="" />
                    <div className="w-[110px] absolute top-0 right-0 pt-12 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-5 p-4">
                            <p onClick={()=>navigate("my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                            <p onClick={()=>navigate("my-interviews")} className="hover:text-black cursor-pointer">My Interviews</p>
                            <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                        </div>
                    </div>
                </div>
                : <a href="/login" className="ml-4 px-5 py-2 bg-be5959 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">Sign Up</a>
            }
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-be5959">
              {isOpen ? (
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="block w-6 h-0.5 bg-gray-700 transform rotate-45 translate-y-0.5 transition duration-300"></span>
                  <span className="block w-6 h-0.5 bg-gray-700 transform -rotate-45 -translate-y-0 transition duration-300"></span>
                </div>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-between">
                  <span className="block w-6 h-0.5 bg-gray-700 transition duration-300"></span>
                  <span className="block w-6 h-0.5 bg-gray-700 transition duration-300"></span>
                  <span className="block w-6 h-0.5 bg-gray-700 transition duration-300"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out text-center ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 py-2 space-y-1">
          <a href="/home" className="block px-3 py-2 text-gray-700 hover:bg-be5959/10 hover:text-be5959 rounded-md font-medium transition duration-200">Home</a>
          <a href="/interviewer" className="block px-3 py-2 text-gray-700 hover:bg-be5959/10 hover:text-be5959 rounded-md font-medium transition duration-200">Interviews</a>
          <a href="/my-interviews" className="block px-3 py-2 text-gray-700 hover:bg-be5959/10 hover:text-be5959 rounded-md font-medium transition duration-200">Events</a>
          <a href="/about" className="block px-3 py-2 text-gray-700 hover:bg-be5959/10 hover:text-be5959 rounded-md font-medium transition duration-200">About</a>
    
          {
                tokan 
                ? <div className="flex items-center gap-2 cursor-pointer group relative">
                    <img className="w-10 h-10 bg-cover rounded-[50%] m-auto" src={assets.img22} alt="" />
                    <div className="w-[100%] absolute top-0 right-0 pt-12 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-5 p-4">
                            <p onClick={()=>navigate("my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                            <p onClick={()=>navigate("my-interviews")} className="hover:text-black cursor-pointer">My Interviews</p>
                            <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                        </div>
                    </div>
                </div>
                : <a href="/login" className="block w-full px-4 py-2 bg-be5959 text-white font-medium rounded-lg text-center shadow-md hover:shadow-lg transition duration-300">Sign Up</a>
            }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;