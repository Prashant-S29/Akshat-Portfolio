"use client";

import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState({
    xProgress: 0,
    yProgress: 0,
  });

  useEffect(() => {
    const updateScrollProgress = () => {
      setScrollProgress({
        xProgress: window.scrollX,
        yProgress: window.scrollY,
      });
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  });

  return scrollProgress;
};

export default ScrollProgress;
