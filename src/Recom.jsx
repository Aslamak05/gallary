// Recom.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

const Recom = () => {
  const { conEmail, savedImages } = useUser(); // get user info
  const [recommended, setRecommended] = useState([]);

  // Fetch recommendations from FastAPI
  const fetchRecommendations = async () => {
    try {
      if (!savedImages.length) return; // no queries yet
      const userQueries = savedImages.map(img => img.name); // example: use saved image names
      const res = await axios.post("http://127.0.0.1:8000/recommend", {
        user_queries: userQueries,
      });
      setRecommended(res.data);
    } catch (err) {
      console.error("Error fetching recommendations:", err);
    }
  };

  useEffect(() => {
    if (conEmail) {
      fetchRecommendations();
    }
  }, [conEmail, savedImages]);

  if (!recommended.length) return null; // hide if empty

  return (
    <section className="p-4 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Recommended for you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommended.map((img, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded shadow">
            <p className="font-medium">{img.name}</p>
            <p className="text-gray-500 text-sm">{img.tags}</p>
            {/* later you can add <img src={img.loc} /> if image URLs available */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recom;
