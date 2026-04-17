import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "./UserContext";

const Login = () => {
  const [email, setEmailState] = useState(""); // renamed from emailInput
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // "success" or "error"
  const [showMessageBox, setShowMessageBox] = useState(false);

  const navigate = useNavigate();
  const { email: contextEmail, setEmail } = useUser();

  // Redirect already logged-in users immediately (optional)
  useEffect(() => {
    if (contextEmail) {
      navigate("/"); // already logged-in users go to home
    }
  }, [contextEmail, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send key "email" to backend
      const res = await axios.post("http://localhost:5000/login", {
        email, // using state variable email
        password,
      });

      // Show success message
      setMessage(res.data.message);
      setType("success");
      setShowMessageBox(true);

      // Save email in context
      setEmail(email);

      setEmailState("");
      setPassword("");

      // Redirect after 2.5 sec
      setTimeout(() => navigate("/"), 2500);
    } catch (err) {
      // Show error message
      setMessage(err.response?.data?.message || "Login failed");
      setType("error");
      setShowMessageBox(true);

      // Auto-hide error after 3 sec
      setTimeout(() => setShowMessageBox(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-green-100 to-green-50">
      {showMessageBox ? (
        <div
          className={`bg-white shadow-lg rounded-2xl p-10 w-full max-w-md flex items-center justify-center transition-opacity duration-500 ${
            showMessageBox ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </h2>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Pic Garden
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmailState(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-500 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
