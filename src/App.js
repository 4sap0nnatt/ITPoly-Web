import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // นำเข้า AOS CSS

import './theme.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // เวลาอนิเมชั่น 1 วินาที
      once: true,     // ให้อนิเมชั่นเกิดขึ้นแค่ครั้งเดียว
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
