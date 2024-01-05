"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { bulbImage } from "@/public";

import ThemeSwitcher from "@/clientComponents/themeChanger";

const HERO_TEXT = () => {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const updateTextAuto = () => {
      if (showText === 140) {
        setShowText(0);
        return;
      }
      setShowText((showText) => showText + 70);
    };
    const interval = setInterval(() => {
      updateTextAuto();
    }, 2000);
    return () => clearInterval(interval);
  }, [showText]);

  return (
    <>
      <div>
        <div className={` text-center text-[60px] font-black leading-tight`}>
          <div className="relative flex justify-center">
            <div
              className=" mainText-gradient bg-gradient-to-r
             from-[#000000] dark:from-[#47f8c9] via-[#5900ff]  via-[25%] dark:via-[#7a6bff] to-[#000000]  to-[120%] dark:to-[#47f8c9]"
            >
              <span>The Future</span>
            </div>
            <div className="absolute flex justify-center ml-[400px] -mt-[50px] rotate-[30deg]">
              <Image
                src={bulbImage}
                alt="bulbImage"
                className={`w-[70px] grayscale-0 dark:grayscale`}
              />
              <div
                className={`w-[30px]  absolute rounded-full duration-300 -z-20 mt-[10px] blur-md aspect-square
                 bg-yellow-400 dark:bg-[#00000003]`}
              />
            </div>
            <div className="absolute ml-[450px] mt-[20px]">
              <ThemeSwitcher />
            </div>
          </div>
          <div
            className=" mainText-gradient bg-gradient-to-r
             from-[#000000] dark:from-[#47f8c9] via-[#5900ff]  via-[25%] dark:via-[#7a6bff] to-[#000000]  to-[120%] dark:to-[#47f8c9]"
          >
            <span>Belongs to Those </span>
          </div>
          <div className="flex gap-[30px] justify-center  mt-[5px]">
            <div
              className=" mainText-gradient bg-gradient-to-r
             from-[#000000] dark:from-[#47f8c9] via-[#5900ff]  via-[25%] dark:via-[#7a6bff] to-[#000000]  to-[120%] dark:to-[#47f8c9]"
            >
              <span>who</span>
            </div>
            <div className="text-left h-[76px] overflow-hidden">
              <div
                className={`-translate-y-[${showText}px] duration-200 dark:text-[#5900ff] text-[#e11d48]`}
              >
                <div
                  className="h-[70px] mainText-gradient bg-gradient-to-r
             from-[#000000] dark:from-[#47f8c9] via-[#5900ff]  via-[25%] dark:via-[#7a6bff] to-[#000000]  to-[120%] dark:to-[#47f8c9] "
                >
                  <span>Explore!</span>
                </div>
                <div
                  className="h-[70px] mainText-gradient bg-gradient-to-r
             from-[#000000] dark:from-[#47f8c9] via-[#5900ff]  via-[25%] dark:via-[#7a6bff] to-[#000000]  to-[120%] dark:to-[#47f8c9] "
                >
                  <span>Learn!</span>
                </div>
                <div
                  className="h-[70px] mainText-gradient bg-gradient-to-r
             from-[#000000] dark:from-[#47f8c9] via-[#5900ff]  via-[25%] dark:via-[#7a6bff] to-[#000000]  to-[120%] dark:to-[#47f8c9] "
                >
                  <span>Innovate!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20px] font-medium text-center leading-tight">
          <span>
            Guiding students to discover their unique
            <br /> talents and find to make strengths.
          </span>
        </div>
        <div className="flex justify-center items-center gap-[50px] mt-[30px]">
          <button className="px-[20px] py-[12px] bg-[#2662fa] font-bold text-[14px] text-white rounded-[14px]">
            Learn & Grow
          </button>
          <button
            className="px-[20px] py-[10px] text-[#2662fa] dark:text-white font-bold text-[14px] border-[2px]
           border-[#2662fa]  rounded-[14px] "
          >
            Explore &nbsp;&rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default HERO_TEXT;
