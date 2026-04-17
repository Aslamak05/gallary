import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // Message to show
  const [type, setType] = useState(""); // "success" or "error"
  const [showMessageBox, setShowMessageBox] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      setType("error");
      setShowMessageBox(true);
      setTimeout(() => setShowMessageBox(false), 3000);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
        confirmPassword,
      });

      setMessage(response.data.message);
      setType("success");
      setShowMessageBox(true);

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // After 3 seconds, hide message and redirect to home
      setTimeout(() => {
        setShowMessageBox(false);
        navigate("/"); // Redirect to home
      }, 3000);
    } catch (err) {
      console.error(err);
      setMessage("Error signing up. Try again!");
      setType("error");
      setShowMessageBox(true);
      setTimeout(() => setShowMessageBox(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-green-100 to-green-50">
      {showMessageBox ? (
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md flex items-center justify-center">
          <h2 className={`text-2xl font-bold ${type === "success" ? "text-green-500" : "text-red-500"}`}>
            {message}
          </h2>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Create Account</h2>
          <p className="text-center text-gray-500 mb-8">Join Pic Garden and start sharing your images.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-500 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
