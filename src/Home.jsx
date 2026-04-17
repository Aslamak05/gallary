import React from "react"; 
import Nav from "./Nav";
import Footer from "./Footer";
import steve from "./assets/steve.jpg";
import new2 from "./assets/new2.png";
import st from "./assets/st.jpeg";
import { Link } from "react-router-dom";
import Recom from "./Recom"; // import recommendation component

const Home = () => {
  return (
    <>
      <Nav />

      {/* Merged Hero + Gallery Section */}
      <section className="bg-cyan-400 text-center py-20 px-6">
        {/* Hero Content */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Welcome to <span className="text-gray-700">Pic Garden</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-900 max-w-2xl mx-auto">
          Discover and download stunning high-quality pictures. Free and premium collections curated just for you.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-200 text-black rounded-xl shadow-md hover:bg-cyan-700 transition duration-300">
          <Link to="/gallery">Explore Gallery</Link>
        </button>

        {/* Gallery Glimpse with Bordered Container */}
        <h2 className="text-3xl font-bold text-gray-600 text-center mt-16 mb-10">
          Featured Collection
        </h2>
        <div className="max-w-6xl mx-auto p-4 border-4 border-cyan-300 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img 
            src={steve} 
            alt="Steve" 
            className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover" 
          />
          <img 
            src={new2} 
            alt="New" 
            className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover" 
          />
          <img 
            src={st} 
            alt="Steve" 
            className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover" 
          />
        </div>
      </section>

      {/* Recommended Images Section */}
      <Recom /> {/* <-- Add it here. It will fetch and display AI recommendations */}

      {/* About Preview */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Why Pic Garden?</h2>
          <p className="text-gray-300 text-lg">
            Pic Garden offers a handpicked collection of royalty-free images for personal and professional use.
            Choose from free downloads or explore our premium gallery for exclusive content.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
