"use client";

import React, { useState } from "react";

import { spaceGrotesk } from "@/app/layout";
import { bulbImage } from "@/public";
import Image from "next/image";

const HERO_TEXT = () => {
  const [bulbOn, setBulbOn] = useState(false);

  return (
    <>
      <div>
        <div className={` text-center text-[60px] font-black leading-tight`}>
          <div className="relative flex justify-center">
            <div>
              <span>The Future</span>
            </div>
            <div className="absolute flex justify-center ml-[400px] -mt-[50px] rotate-[30deg]">
              <Image
                src={bulbImage}
                alt="bulbImage"
                className={`w-[70px] ${bulbOn ? "grayscale-0" : "grayscale"}`}
              />
              <div
                className={`w-[30px]  absolute rounded-full duration-300 -z-20 mt-[10px] blur-md aspect-square ${
                  bulbOn ? "bg-yellow-400" : "bg-white"
                }`}
              />
            </div>
            <div
              className="absolute ml-[450px] mt-[20px]"
              onClick={() => {
                setBulbOn(!bulbOn);
              }}
            >
              <div
                className={`w-[40px] h-[20px] rounded-full cursor-pointer flex ${
                  bulbOn ? "pl-[24px] bg-green-500" : "pl-[4px] bg-gray-500"
                } p-[4px] duration-300`}
              >
                <div className="w-[12px] aspect-square  rounded-full bg-white" />
              </div>
            </div>
          </div>
          <div>
            <span>Belongs to Those </span>
          </div>
          <div>
            <span>who Learn</span>
          </div>
          <div>
            <span>what Matters</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[50px] mt-[50px]">
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
