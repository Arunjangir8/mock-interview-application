import { useState } from "react";
// import { signup, login } from "../assets/pexels-mikhail-nilov-6707626.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [LoginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  const HandalSubmit = async (e) => {
    
  };

  const HandelLogin = async (e) => {
    
  };

  return (
    <div className="min-h-screen w-full flex justify-end items-center bg-[url('https://images.pexels.com/photos/19118579/pexels-photo-19118579/free-photo-of-a-person-standing-on-top-of-a-mountain-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover h-[100vh]">
      <div className="mr-20 w-[700px] flex flex-col bg-white rounded-lg shadow-md overflow-hidden px-24 py-10 pb-16">
        <div className="flex mb-5 w-full">
          <div
            className={`flex-1 text-center py-2 cursor-pointer font-bold ${
              isLogin ? "border-b-2 border-[#be5959] text-[#be5959]" : "border-b-2 border-transparent"
            }`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </div>
          <div
            className={`flex-1 text-center py-2 cursor-pointer font-bold ${
              !isLogin ? "border-b-2 border-[#be5959] text-[#be5959]" : "border-b-2 border-transparent"
            }`}
            onClick={() => setIsLogin(false)}
          >
            REGISTRATION
          </div>
        </div>

        <div className="w-full bg-white">
          {isLogin ? (
            <form onSubmit={HandelLogin} className="w-full">
              <h3 className="mb-5 text-center font-bold text-gray-800">LOGIN</h3>
              <label htmlFor="mailidtologin" className="block mb-1 text-gray-600 text-lg">
                Email
              </label>
              <input
                type="email"
                required
                name="givenemail"
                id="mailidtologin"
                className="w-full py-4 px-12 border border-gray-300 border-b-2 rounded-xl bg-white transition-all duration-300 focus:border-[#c17979] outline-none text-base my-1"
                onChange={(e) => setLoginData({ ...LoginData, email: e.target.value })}
              />

              <label htmlFor="passforlogin" className="block mb-1 text-gray-600 text-lg">
                Password
              </label>
              <input
                type="password"
                required
                name="givenpass"
                id="passforlogin"
                className="w-full py-4 px-12 border border-gray-300 border-b-2 rounded-xl bg-white transition-all duration-300 focus:border-[#c17979] outline-none text-base my-1"
                onChange={(e) => setLoginData({ ...LoginData, password: e.target.value })}
              />
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-[#be5959] text-white border-none rounded font-bold text-base cursor-pointer"
              >
                Login
              </button>

              <div className="text-center mt-4 text-sm text-gray-600">
                Don't have an account?{" "}
                <span className="text-[#be5959] cursor-pointer underline" onClick={switchForm}>
                  Register here
                </span>
              </div>
            </form>
          ) : (
            <form onSubmit={HandalSubmit} id="formForReg" className="w-full">
              <h3 className="mb-5 text-center font-bold text-gray-800">REGISTRATION</h3>
              <label htmlFor="name" className="block mb-1 text-gray-600 text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full py-4 px-12 border border-gray-300 border-b-2 rounded-xl bg-white transition-all duration-300 focus:border-[#c17979] outline-none text-base my-1"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
              <label htmlFor="email" className="block mb-1 text-gray-600 text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full py-4 px-12 border border-gray-300 border-b-2 rounded-xl bg-white transition-all duration-300 focus:border-[#c17979] outline-none text-base my-1"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <label htmlFor="password" className="block mb-1 text-gray-600 text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full py-4 px-12 border border-gray-300 border-b-2 rounded-xl bg-white transition-all duration-300 focus:border-[#c17979] outline-none text-base my-1"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-[#be5959] text-white border-none rounded font-bold text-base cursor-pointer"
              >
                Submit
              </button>

              <div className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <span className="text-[#be5959] cursor-pointer underline" onClick={switchForm}>
                  Login here
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export { Login };