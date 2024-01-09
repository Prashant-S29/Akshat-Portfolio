"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import MAIN_PHOTO from "@/clientComponents/mainPhoto";
import MAIN_TEXT from "@/components/mainText";

import HERO_TEXT from "@/components/heroSectionText";
import BACKGROUND_IMAGE from "@/clientComponents/backgroundImage";
import WORK from "@/clientComponents/work";
import TAG_PARA from "@/clientComponents/tagParagraph";

const HOME = () => {
  useEffect(() => {
    (async () => {
      //@ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <div>
        <div className="absolute left-0 top-0 -z-50 w-full overflow-hidden">
          <BACKGROUND_IMAGE />
        </div>
        <div className=" fixed left-0 top-0 -z-40 h-[200px] w-full bg-gradient-to-b from-white to-[90%] duration-300 dark:from-[#0f051d]" />
        <div className=" absolute bottom-0 left-0 -z-40 h-[200px] w-full bg-gradient-to-t from-white to-[#0f051d00] to-[90%] duration-300 dark:from-[#0f051d]" />
        <div className="flex min-h-[70vh] w-full justify-center px-[20px] pt-[80px] ">
          <HERO_TEXT />
        </div>
        <div className="mt-[50px]  flex w-full items-center justify-evenly px-[20px] ">
          <MAIN_PHOTO />
          <MAIN_TEXT />
        </div>
        {/* <div className="mt-[50px]"> */}
        {/* </div> */}
        <div className="mt-[120px] px-[20px]">
          <TAG_PARA />
        </div>
      </div>
      {/* <div className="h-[50vh] w-full" /> */}
      <WORK />
      <div className="h-[50vh] w-full" />
    </>
  );
};

export default HOME;
