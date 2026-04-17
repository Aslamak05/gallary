import React from "react"; 
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Login from "./Login";
import Footer from "./Footer";
import Gallary from "./Gallary.jsx";
import Room from './Room.jsx';
import Account from './Account.jsx';
import Signup from "./Signup.jsx";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext'; // ✅ import the provider
import Pay from "./Pay.jsx";

const App = () => {
  return (
    // ✅ Wrap the whole app in UserProvider
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/room" element={<Room />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/account" element={<Account />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
