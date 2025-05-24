
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Join from "./Join";
import Support from "./Support";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">الرئيسية</Link>
        <Link to="/about">من نحن</Link>
        <Link to="/join">انضم</Link>
        <Link to="/support">ادعمنا</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
