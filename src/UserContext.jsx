import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const getInitialEmail = () => localStorage.getItem("email") || "";
const getInitialSavedImages = () => {
  const saved = localStorage.getItem("savedImages");
  return saved ? JSON.parse(saved) : [];
};

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(getInitialEmail);
  const [savedImages, setSavedImages] = useState(getInitialSavedImages);

  useEffect(() => {
    if (email) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
      // Don't clear saved images here to keep them after logout
      // setSavedImages([]);
      // localStorage.removeItem("savedImages");
    }
  }, [email]);

  useEffect(() => {
    localStorage.setItem("savedImages", JSON.stringify(savedImages));
  }, [savedImages]);

  const logout = () => {
    setEmail("");
   
  };

  const saveImage = (image) => {
    setSavedImages((prev) => {
      if (prev.find((img) => img.name === image.name)) return prev;
      return [...prev, image];
    });
  };

  const removeSavedImage = (imageName) => {
    setSavedImages((prev) => prev.filter((img) => img.name !== imageName));
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        logout,
        savedImages,
        saveImage,
        removeSavedImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
