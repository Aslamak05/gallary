import React from "react";
import Nav from "./Nav";

const About = () => (
  <div className="bg-gray-100 min-h-screen">
    <Nav />

    {/* Hero Section */}
    <section className="bg-cyan-500 py-36 flex items-center justify-center">
      <div className="max-w-xl w-full text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          About <span className="text-white">Pic Garden</span>
        </h1>
        <p className="text-xl text-white mb-4">
          A growing library of stunning, high-quality photos.
        </p>
      </div>
    </section>

    {/* Mission Section */}
    <section className="bg-gray-100 py-24">
      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-cyan-600 mb-8">Our Mission</h2>
        <p className="text-xl text-gray-700">
          <span className="text-cyan-600">Pic Garden</span> makes beautiful visuals accessible for everyone—free for personal use, or premium for exclusive content.
        </p>
      </div>
    </section>

    {/* Features Grid */}
    <section className="py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {[
          { title: "High Quality", text: "HD & 4K photos perfect for any project." },
          { title: "Free & Premium", text: "Download instantly or unlock more with a subscription." },
          { title: "Diverse Categories", text: "Nature, tech, abstract, people and more." },
          { title: "Simple Licensing", text: "Easy terms for personal and commercial use." }
        ].map((item, i) => (
          <div key={i} className="bg-cyan-500 text-white rounded-xl p-10 shadow text-center">
            <h3 className="font-bold text-2xl mb-3 text-white">{item.title}</h3>
            <p className="text-gray-900 text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Feature Spotlight */}
    <section className="bg-cyan-500 py-24">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          Spotlight: <span className="text-gray-900">Nature Collection</span>
        </h2>
        <p className="text-xl text-gray-900 mb-4">
          Explore breathtaking nature shots curated weekly from top photographers.
        </p>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-gray-100 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-cyan-600 mb-8 text-center">
          What Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-cyan-500 rounded-xl p-8 shadow text-white">
            <p className="text-lg mb-4 text-gray-900">"Pic Garden’s free library has transformed our creative workflow."</p>
            <span className="font-bold text-gray-900">— Raj, Designer</span>
          </div>
          <div className="bg-cyan-500 rounded-xl p-8 shadow text-white">
            <p className="text-lg mb-4 text-gray-900">"Premium images are totally worth the price for our campaigns."</p>
            <span className="font-bold text-gray-900">— Nisha, Marketer</span>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-gray-100 py-24">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-cyan-600 mb-8">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-cyan-500 rounded-xl px-8 py-12 shadow">
            <span className="block text-xl font-bold text-white mb-2">Amit</span>
            <span className="block text-lg text-gray-900">Founder</span>
          </div>
          <div className="bg-cyan-500 rounded-xl px-8 py-12 shadow">
            <span className="block text-xl font-bold text-white mb-2">Priya</span>
            <span className="block text-lg text-gray-900">Lead Photographer</span>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-cyan-500 py-24">
      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          Start Exploring <span className="text-gray-900">Pic Garden</span>
        </h2>
        <p className="text-xl text-gray-900 mb-8">
          Find free images or upgrade to premium for exclusive collections.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-cyan-600 font-semibold px-8 py-4 rounded-xl shadow hover:bg-gray-100 transition">
            Browse Free Photos
          </button>
          <button className="bg-gray-100 text-cyan-600 font-semibold px-8 py-4 rounded-xl shadow hover:bg-white transition">
            Go Premium
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default About;
