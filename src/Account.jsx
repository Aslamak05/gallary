import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const Account = () => {
  const { email, savedImages, logout, removeSavedImage } = useUser();
  const navigate = useNavigate();

  const goroom = (img) => {
    navigate("/room", { state: img });
  };

  const handleLogout = () => {
    logout();
    navigate("/login"); // or "/" depending on your flow
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pic Garden Account</h1>
          <div className="flex items-center space-x-4">
            {email && <span className="text-lg">Logged in as: {email}</span>}
            {email && (
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {email ? (
          <>
            <h2 className="text-3xl font-semibold mb-6">Welcome, {email}</h2>

            <section>
              <h3 className="text-2xl font-medium mb-4">Saved Images</h3>
              {savedImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {savedImages.map((i, index) => (
                    <div
                      key={index}
                      className="bg-white shadow rounded-lg h-64 flex flex-col items-center justify-center text-gray-700 cursor-pointer relative"
                    >
                      <img
                        src={i.loc}
                        alt={i.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                        onClick={() => goroom(i)}
                      />
                      <p className="py-2 font-semibold text-center">{i.name}</p>
                      {/* Remove button */}
                      <button
                        onClick={() => removeSavedImage(i.name)}
                        className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>You have no saved images yet.</p>
              )}
            </section>
          </>
        ) : (
          <p className="text-red-500 text-xl">No user logged in!</p>
        )}
      </main>
    </div>
  );
};

export default Account;
