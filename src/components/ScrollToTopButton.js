// src/components/ScrollToTopButton.js

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // ใช้ไอคอนลูกศรขึ้นจาก react-icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ฟังก์ชันการตรวจจับการเลื่อนหน้า
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // เพิ่ม Event listener เมื่อหน้าเว็บถูกเลื่อน
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // ฟังก์ชันการเลื่อนขึ้นสุดของหน้า
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#f1c40f", // สีเหลือง
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
