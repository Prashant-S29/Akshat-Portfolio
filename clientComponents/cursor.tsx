"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CURSOR = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{ x: cursorPosition.x - 20, y: cursorPosition.y - 20 }}
        transition={{ type: "tween", ease: "backOut" }}
        className={` pointer-events-none fixed left-0 top-0 z-[99999] aspect-square w-[40px] rounded-full border-[1px] 
        border-orange-500 mix-blend-difference duration-150 `}
      />
      <motion.div
        animate={{ x: cursorPosition.x - 4, y: cursorPosition.y - 4 }}
        transition={{ type: "tween", ease: "backOut" }}
        className={` pointer-events-none fixed left-0 top-0 z-[99999] aspect-square w-[8px] rounded-full
         bg-orange-500 mix-blend-difference duration-300`}
      />
    </>
  );
};

export default CURSOR;
