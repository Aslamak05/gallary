import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

const Nav = () => {
  const { email } = useUser();

  return (
    <nav className="bg-gray-900 text-cyan-300 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl text-white font-extrabold tracking-tight hover:scale-105 transition-transform duration-300"
        >
          Pic<span className="text-cyan-400">Garden</span>
        </Link>

        <ul className="hidden md:flex space-x-10 font-semibold items-center">
          <li>
            <Link
              to="/"
              className="hover:text-cyan-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-600 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:text-cyan-600 transition-colors duration-300"
            >
              Gallery
            </Link>
          </li>

          {/* Show Login only if no user is logged in */}
          {!email && (
            <li>
              <Link
                to="/login"
                className="hover:text-cyan-600 transition-colors duration-300"
              >
                Login
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/account"
              className="hover:text-cyan-600 transition-colors duration-300"
            >
              Account
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon here, etc. */}
      </div>
    </nav>
  );
};

export default Nav;
