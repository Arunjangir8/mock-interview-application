import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [LoginData, setLoginData] = useState({ email: "", password: "" });

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  const HandalSubmit = async (e) => {
    e.preventDefault();
  };

  const HandelLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center px-4 py-8" style={{
      backgroundImage: `url('https://images.pexels.com/photos/19118579/pexels-photo-19118579/free-photo-of-a-person-standing-on-top-of-a-mountain-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md md:max-w-xl lg:max-w-2xl px-6 sm:px-12 py-10">
        <div className="flex mb-8">
          <div
            className={`flex-1 text-center py-2 cursor-pointer font-semibold text-lg ${
              isLogin ? "border-b-2 border-[#be5959] text-[#be5959]" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </div>
          <div
            className={`flex-1 text-center py-2 cursor-pointer font-semibold text-lg ${
              !isLogin ? "border-b-2 border-[#be5959] text-[#be5959]" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            REGISTER
          </div>
        </div>

        {isLogin ? (
          <form onSubmit={HandelLogin} className="space-y-4">
            <h2 className="text-xl font-bold text-center text-gray-800">Welcome Back</h2>

            <div>
              <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setLoginData({ ...LoginData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setLoginData({ ...LoginData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#be5959] text-white py-3 rounded-lg font-semibold hover:bg-[#a24e4e] transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <span className="text-[#be5959] font-medium cursor-pointer underline" onClick={switchForm}>
                Register
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={HandalSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center text-gray-800">Create an Account</h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be5959]"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#be5959] text-white py-3 rounded-lg font-semibold hover:bg-[#a24e4e] transition"
            >
              Register
            </button>

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
