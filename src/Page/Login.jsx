import React, { useState, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false); 
  const emailRef = useRef(null);

  const { signIn, resetPassword, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Email-password login
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

  // Forgot Password
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

  // Google Login
  const handleGoogleLogin = () => {
    setLoading(true);
    googleLogin()
      .then(() => {
        setLoading(false);
        navigate(location.state ? location.state : "/");
        toast.success("Logged in with Google!");
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition-all"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {/* OR Continue with */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full rounded-lg bg-white hover:bg-[#e01476] text-black border-[#e5e5e5] flex items-center justify-center gap-2"
        >
          <svg
            aria-label="Google logo"
            width="18"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

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
