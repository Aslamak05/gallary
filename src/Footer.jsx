import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Pic<span className="text-cyan-400">Garden</span></h2>
          <p className="mt-3 text-gray-400 text-sm">
            Free & premium high-quality photos for your creative projects.  
            Grow your imagination with Pic Garden 🌱
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-cyan-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-300 transition">About</a></li>
            <li><a href="/login" className="hover:text-cyan-300 transition">Login</a></li>
            <li><a href="/premium" className="hover:text-cyan-300 transition">Premium</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cyan-300 transition" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.75-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-cyan-300 transition" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.633 7.997q.013.175.013.35 0 3.587-2.73 7.717t-7.73 7.717q-4.433 0-8.1-2.367.45.05.888.05 3.675 0 6.363-2.25-1.713-.038-2.963-1.05t-1.5-2.55q.525.088 1.05.088.75 0 1.425-.2-1.825-.375-3.012-1.8t-1.188-3.35v-.05q1 .55 2.125.588-1-.675-1.588-1.7t-.588-2.25q0-1.275.638-2.3 2.25 2.75 5.55 4.4t6.863 1.8q-.125-.55-.125-1.1 0-2.05 1.45-3.5T20.5 6q1.55 0 2.6 1.15-.975-.188-1.95.25t-1.517 1.597Z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-cyan-300 transition" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3h4a1 1 0 0 1 1 1v4h-2.5a1 1 0 0 0-1 1v3H18l-.5 4h-2.5v8h-4v-8H9v-4h2.5v-3a4 4 0 0 1 4-4Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-cyan-400">
        © {new Date().getFullYear()} Pic Garden. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
