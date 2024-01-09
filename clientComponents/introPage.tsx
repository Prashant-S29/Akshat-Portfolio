"use client";

import React, { ReactElement, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const INTROPAGE = ({ children }: { children: ReactElement }) => {
  const [showIntroPage, setShowIntroPage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [lineAnimationClass, setLineAnimationClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 5000);
    setTimeout(() => {
      setShowText(true);
      setLineAnimationClass("lineLoader");
    }, 500);
  }, []);

  return (
    <>
      <div
        className={`fixed left-0  top-0 ${
          showIntroPage
            ? "[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%);]"
            : "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%);]"
        } z-[999999]  flex min-h-screen w-full items-center justify-center bg-white text-black duration-500 dark:bg-black dark:text-white  `}
      >
        <div className="absolute bottom-3 flex w-full justify-center">
          <div
            className={`${lineAnimationClass} h-[4px]  rounded-full bg-black dark:bg-white`}
          />
        </div>
        <div className="absolute left-[70px] top-[150px] ">
          <div className="h-[30px] overflow-hidden leading-none ">
            <div
              className="duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(30px)",
              }}
            >
              <span className="text-[24px] font-bold">
                India based Entrepreneur
              </span>
            </div>
          </div>
          <div className="h-[20px] overflow-hidden leading-none">
            <div
              className="duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(30px)",
              }}
            >
              <span>aimed to</span>
            </div>
          </div>
          <div className="h-[60px] overflow-hidden  leading-none">
            <div
              className="uppercase duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(60px)",
              }}
            >
              <span className="text-[64px] font-black">Educate</span>
            </div>
          </div>
          <div className="h-[60px] overflow-hidden  leading-none">
            <div
              className="uppercase duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(60px)",
              }}
            >
              <span className="text-[64px] font-black">Society</span>
            </div>
          </div>
          <div className="mt-[10px] h-[20px] overflow-hidden  leading-none">
            <div
              className=" duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <span className="text-[18px] font-bold">@AkshatKhandelwal</span>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-[150px] right-[70px] text-right">
          <div className="h-[20px]  overflow-hidden leading-none">
            <div
              className="uppercase duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <span className="text-[16px] font-semibold">
                We learn from others,
              </span>
            </div>
          </div>
          <div className="h-[20px]  overflow-hidden leading-none">
            <div
              className="uppercase duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <span className="text-[16px] font-semibold">
                ANALYZE their mistakes
              </span>
            </div>
          </div>
          <div className="h-[35px]  overflow-hidden leading-none">
            <div
              className="uppercase duration-300"
              style={{
                transform: showText ? "translateY(0px)" : "translateY(35px)",
              }}
            >
              <span className="text-[28px] font-black ">& GROW</span>
            </div>
          </div>
        </div>
        <div className="absolute right-[70px] top-[40px] overflow-hidden">
          <div
            className=" h-[23px] overflow-hidden  uppercase leading-none duration-300"
            style={{
              transform: showText ? "translateY(0px)" : "translateY(23px)",
            }}
          >
            <span className="text-[18px] font-extrabold">
              Learn &#xb7; Explore &#xb7; Innovate
            </span>
          </div>
        </div>
        <div className="absolute  bottom-[50px]  flex h-[25px] w-full  overflow-hidden ">
          <div
            className=" flex w-full justify-end bg-black text-white cursor-pointer duration-300 dark:bg-white dark:text-black"
            style={{
              transform: showButton ? "translateY(0px)" : "translateY(28px)",
            }}
            onClick={() => {
              setShowIntroPage(true);
            }}
          >
            <Marquee autoFill direction="right">
              <span className="px-[20px] font-medium dark:font-semibold">
                Get In &rarr;
              </span>
            </Marquee>
          </div>
        </div>
      </div>

      {children}
    </>
  );
};

export default INTROPAGE;
