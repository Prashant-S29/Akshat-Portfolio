"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";

const ThemeSwitchTwo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 right-0 m-[20px] cursor-pointer "
      onClick={handleTheme}
    >
      <div
        className="relative flex aspect-square w-[30px]  items-center justify-center rounded-full bg-black 
      shadow-xl dark:bg-white "
      >
        <div
          className={`absolute flex justify-center items-center duration-300 ${
            theme === "dark"
              ? "-z-10 rotate-[360deg] scale-0"
              : "z-10 -rotate-[360deg] scale-100"
          }`}
        >
          <Brightness7RoundedIcon className="text-[22px] leading-none text-white" />
        </div>
        <div
          className={`absolute flex justify-center items-center duration-300 ${
            theme === "dark"
              ? "z-10 rotate-[360deg] scale-100"
              : "-z-10 -rotate-[360deg] scale-0"
          }`}
        >
          <Brightness2RoundedIcon className="text-[22px]  leading-none text-purple-500" />
        </div>
      </div>
    </div>
  );
};
export default ThemeSwitchTwo;
