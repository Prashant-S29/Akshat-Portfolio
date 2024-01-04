"use client";

import Image from "next/image";
import React, { useState } from "react";

import {
  prashant_img,
  designOne,
  mindImage,
  bodyImage,
  mindInside,
} from "@/public";

const MAIN_PHOTO = () => {
  const [showImageProps, setShowImageProps] = useState(false);
  return (
    <>
      <div className="relative flex h-fit text-black">
        <div className="relative">
          <div className="absolute left-[86px] top-[23px] -z-10">
            <Image src={mindInside} alt="prashant" className="w-[120px]" />
          </div>
          <div>
            <Image
              src={mindImage}
              alt="prashant"
              className={`w-[300px] ${
                showImageProps ? "-ml-[60px] -rotate-[70deg]" : ""
              } w-[300px] duration-300`}
            />
          </div>
          <div>
            <Image src={bodyImage} alt="prashant" className="w-[300px]" />
          </div>
        </div>
        <div
          className={`absolute ${
            showImageProps
              ? "-rotate-[70deg] left-[165px] top-[15px]"
              : "-rotate-[90deg] left-[100px] top-[60px]"
          } border border-black duration-[500ms] cursor-pointer -z-20  bg-white px-[10px] py-[2px] rounded-full flex gap-1 items-center`}
        >
          <div className="w-[10px] aspect-square rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Ideas</span>
          </div>
        </div>
        <div
          className={`absolute ${
            showImageProps
              ? "-rotate-[20deg] left-[120px] top-[0px]"
              : "-rotate-[90deg] left-[100px] top-[60px]"
          } border border-black duration-[400ms] cursor-pointer -z-20  bg-white px-[10px] py-[2px] rounded-full flex gap-1 items-center`}
        >
          <div className="w-[10px] aspect-square rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Innovation</span>
          </div>
        </div>
        <div
          className={`absolute ${
            showImageProps
              ? "rotate-[10deg] left-[125px] -top-[20px]"
              : "-rotate-[90deg] left-[100px] top-[60px]"
          } border border-black duration-[400ms] cursor-pointer -z-20  bg-white px-[10px] py-[2px] rounded-full flex gap-1 items-center`}
        >
          <div className="w-[10px] aspect-square rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Creativity</span>
          </div>
        </div>

        <div className=" absolute  bottom-0 w-full -z-10 h-[80px] bg-pink-500 rounded-bl-full -ml-[60px]" />
        <div
          className={`absolute  w-[100px] aspect-square rounded-full ${
            showImageProps
              ? "-right-[30px] top-[80px] animate-bounceOne "
              : "right-[10px] top-[150px]"
          } bg-blue-500 -z-10 duration-300`}
        />
        <div className="absolute  bottom-[70px]">
          {/* <div
            className={`absolute w-[10px] aspect-square bg-red-500 rounded-full ${
              showImageProps ? "" : "animate-ping"
            }`}
          /> */}
          <button
            className="px-[15px] py-[8px] text-[13px] font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-blue-700 rounded-full outline-none"
            onClick={() => {
              setShowImageProps(!showImageProps);
            }}
            tabIndex={-1}
          >
            {showImageProps ? "Close" : "Open"} Mind
          </button>
        </div>
        <div
          className={`absolute  flex gap-2 justify-center items-center p-[10px] shadow-xl rounded-[10px] duration-300
          bg-white right-0 bottom-0 -mb-[25px] ${
            showImageProps ? "-rotate-[30deg] -mb-[50px]" : ""
          }`}
        >
          <div className="leading-none">
            <span className="text-[30px] font-black">5k+</span>
          </div>
          <div className="leading-none text-[12px] font-bold">
            <div>
              <span>Tech Vector</span>
            </div>
            <div>
              <span>Community</span>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-[130px]  aspect-square -z-10 ${
            showImageProps
              ? "top-[30px] -ml-[80px]  animate-bounceTwo"
              : "top-[66px] ml-0"
          } duration-300 rounded-tl-full 
          rounded-br-[20px]`}
          style={{ backgroundImage: `url(${designOne.src})` }}
        />
      </div>
    </>
  );
};

export default MAIN_PHOTO;
