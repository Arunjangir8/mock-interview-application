import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup,login } from "../api";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

 
  const switchForm = () => {
    setMessage(""); 
    setIsLogin(!isLogin);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      setMessage(response.data.message);
  
      // ✅ Store token and user data in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      setTimeout(() => navigate("/"), 0); 
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginData);
      setMessage(response.data.message);
  
      // ✅ Store token and user data in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      setTimeout(() => navigate("/"), 0); 
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md md:max-w-xl lg:max-w-2xl px-6 sm:px-12 py-10">
        {/* Switchable Login/Register tabs */}
        <div className="flex mb-8">
          <div
            className={`flex-1 text-center py-2 cursor-pointer font-semibold text-lg ${isLogin ? "border-b-2 border-[#be5959] text-[#be5959]" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </div>
          <div
            className={`flex-1 text-center py-2 cursor-pointer font-semibold text-lg ${!isLogin ? "border-b-2 border-[#be5959] text-[#be5959]" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            REGISTER
          </div>
        </div>

        {/* Message for errors or successful action */}
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-xl font-bold text-center text-gray-800">Welcome Back</h2>
            <div>
              <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="loginEmail"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="loginPassword"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            <button type="submit" className="w-full bg-[#be5959] text-white py-3 rounded-lg font-semibold hover:bg-[#a24e4e] transition">Login</button>
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <span className="text-[#be5959] font-medium cursor-pointer underline" onClick={switchForm}>
                Register
              </span>
            </p>
          </form>
        ) : (
          // Register Form
          <form onSubmit={handleSignup} className="space-y-4">
            <h2 className="text-xl font-bold text-center text-gray-800">Create an Account</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <button type="submit" className="w-full bg-[#be5959] text-white py-3 rounded-lg font-semibold hover:bg-[#a24e4e] transition">Register</button>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <span className="text-[#be5959] font-medium cursor-pointer underline" onClick={switchForm}>
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export { Login };
