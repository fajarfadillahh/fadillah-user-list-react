import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
