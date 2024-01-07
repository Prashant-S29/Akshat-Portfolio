import React from "react";
import Image from "next/image";

import { bulbImage } from "@/public";

import ThemeSwitcher from "@/clientComponents/themeChanger";
import VERTICAL_SLIDE from "../clientComponents/verticalSlideText";
import ANIMATED_BUTTON from "@/clientComponents/animatedButton";

const HERO_TEXT = () => {
  return (
    <>
      <div>
        <div className={` text-center text-[60px] font-black leading-tight`}>
          <div className="relative flex justify-center">
            <div
              className=" mainText-gradient bg-gradient-to-r
             from-[#000000] via-[#5900ff] via-[25%]  to-[#000000] to-[120%] dark:from-[#47f8c9]  dark:via-[#7a6bff] dark:to-[#47f8c9]"
            >
              <span>The Future</span>
            </div>
            <div className="absolute -mt-[50px] ml-[400px] flex rotate-[30deg] justify-center">
              <Image
                src={bulbImage}
                alt="bulbImage"
                className={`w-[70px] grayscale-0 dark:grayscale`}
              />
              <div
                className={`absolute  -z-20 mt-[10px] aspect-square w-[30px] rounded-full bg-yellow-400 blur-md
                 duration-300 dark:bg-[#00000003]`}
              />
            </div>
            <div className="absolute ml-[450px] mt-[20px]">
              <ThemeSwitcher />
            </div>
          </div>
          <div
            className=" mainText-gradient bg-gradient-to-r
             from-[#000000] via-[#5900ff] via-[25%]  to-[#000000] to-[120%] dark:from-[#47f8c9]  dark:via-[#7a6bff] dark:to-[#47f8c9]"
          >
            <span>Belongs to Those </span>
          </div>
          <div className="ml-[80px] mt-[5px] flex justify-center  gap-[30px]">
            <div
              className=" mainText-gradient bg-gradient-to-r
             from-[#000000] via-[#5900ff] via-[25%]  to-[#000000] to-[120%] dark:from-[#47f8c9]  dark:via-[#7a6bff] dark:to-[#47f8c9]"
            >
              <span>who</span>
            </div>
            <div className="text-left">
              <div></div>
              <VERTICAL_SLIDE textArr={["Learn!", "Explore!", "Innovate!"]} />
            </div>
          </div>
        </div>
        <div className=" mt-[20px] text-center font-bold leading-tight dark:font-semibold">
          <span>
            Guiding students to discover their unique
            <br /> talents and find to make strengths.
          </span>
        </div>
        <div className="mt-[30px] flex items-center justify-center gap-[50px]">
          <ANIMATED_BUTTON
            shrink={true}
            clickEffect={true}
            uniqueID="myBtnTwo"
            buttonText="Learn & Grow"
            buttonStyle=" rounded-[14px] bg-[#2662fa] px-[20px] py-[12px] text-[14px] font-bold text-white"
          />
          <ANIMATED_BUTTON
            shrink={true}
            clickEffect={true}
            uniqueID="myBtnThree"
            buttonText="Explore &nbsp;&rarr;"
            buttonStyle="rounded-[14px] border-[2px] border-[#2662fa] px-[20px] py-[10px] text-[14px] font-bold
           text-[#2662fa]  dark:text-white"
          />
        </div>
      </div>
    </>
  );
};

export default HERO_TEXT;
