import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import hill from "./assets/hill.webp";
import new2 from "./assets/new2.png";
import oip from "./assets/OIP.webp";
import st from "./assets/st.jpeg";
import steve from "./assets/steve.jpg";
import cherryBlossom from "./assets/cherryBlosm.webp";
import Nav from "./Nav";

const Room = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Selected image from location
  const selected = location.state;

  // Example: replace with DB data later
  const allImages = [
   { loc: cherryBlossom, name: "Cherry Blossom", tags: ["Free"] },
    { loc: hill, name: "hill", tags: ["Free"] },
    { loc: new2, name: "New2", tags: ["Premium"] },
    { loc: oip, name: "OIP", tags: ["Free"] },
    { loc: st, name: "ST", tags: ["Free"] },
    { loc: steve, name: "Steve", tags: ["Free"] },
  ];

  if (!selected) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-lg text-gray-600 mb-4">No image data found 🚫</p>
        <button
          onClick={() => navigate("/")}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:bg-cyan-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Nav />

      {/* TOP SECTION (40%) */}
      <div className="flex flex-row h-[40vh] border-b bg-white shadow">
        {/* Left: Big Image */}
        <div className="w-2/5 flex items-center justify-center p-4">
          <img
            src={selected.loc}
            alt={selected.name}
            className="h-full w-full object-contain rounded-lg shadow"
          />
        </div>

        {/* Right: Details */}
        <div className="w-3/5 flex flex-col justify-center p-6">
          <h1 className="text-3xl font-bold mb-4">{selected.name}</h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {selected.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  tag === "Free"
                    ? "bg-green-300 text-gray-900"
                    : "bg-yellow-300 text-gray-900"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          {selected.tags.includes("Free") ? (
            <a href={selected.loc} download>
              <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg shadow hover:bg-cyan-600 transition">
                Download
              </button>
            </a>
          ) : (
            <button
              onClick={() => navigate("/pay", { state: selected })}
              className="bg-indigo-500 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-600 transition"
            >
              Buy / Pay
            </button>
          )}
        </div>
      </div>

      {/* BOTTOM SECTION (60%) */}
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Other Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allImages
            .filter((img) => img.name !== selected.name) // exclude current
            .map((img, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg overflow-hidden shadow hover:scale-105 transition"
                onClick={() => navigate("/room", { state: img })} // navigate to selected image
              >
                <img
                  src={img.loc}
                  alt={img.name}
                  className="w-full h-40 object-cover"
                />
                <div className="flex justify-between items-center bg-gray-100 px-2 py-1">
                  <p className="font-medium">{img.name}</p>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      img.tags.includes("Free")
                        ? "bg-green-300 text-gray-900"
                        : "bg-yellow-300 text-gray-900"
                    }`}
                  >
                    {img.tags[0]}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
