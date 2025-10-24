import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    if (location.state?.email) setEmail(location.state.email);
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Redirecting to Gmail...");
      window.open("https://mail.google.com", "_blank");
      setEmail(""); 
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-12 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
