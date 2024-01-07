"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div onClick={handleTheme}>
        <div
          className={`flex h-[20px] w-[40px] cursor-pointer rounded-full
                     ${
                       theme === "light"
                         ? "bg-green-500 pl-[24px]"
                         : "bg-gray-500 pl-[4px]"
                     } p-[4px] duration-300`}
        >
          <div className="aspect-square w-[12px]  rounded-full bg-white" />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;
