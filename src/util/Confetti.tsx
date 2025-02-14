"use client";

import React, { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";

const Surprise = () => {
  const confettiRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      // Tambahkan event listener untuk resize window
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      ref={confettiRef}
      numberOfPieces={150}
    />
  );
};

export default Surprise;
