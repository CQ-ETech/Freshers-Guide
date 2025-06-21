// components/ScrollToTopButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Or use any icon you prefer

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          padding: "1rem",
          borderRadius: "50%",
          background: "#333",
          color: "#FFEA00",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;