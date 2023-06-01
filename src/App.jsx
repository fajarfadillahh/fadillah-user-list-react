import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import UserId from "./pages/UserId";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserId />} />
      </Routes>
    </Router>
  );
};

export default App;
