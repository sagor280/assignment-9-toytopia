import React, { useState, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false); // ✅ password show/hide
  const emailRef = useRef(null);

  const { signIn, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);
    signIn(email, password)
      .then(() => {
        setLoading(false);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  // Forgot Password function
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    setLoading(true);
    resetPassword(email)
      .then(() => {
        setLoading(false);
        toast.success("Check your email to reset password!");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Login to access your ToyTopia account
        </p>

        <form onSubmit={handleLogin} className="space-y-5 mt-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Password with eye icon */}
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-white/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg px-4 py-2"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-[36px] cursor-pointer z-50 text-gray-600"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm text-end">{error}</p>}

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={handleForgetPassword}
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition-all"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
