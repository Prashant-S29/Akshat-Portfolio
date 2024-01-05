"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import MAIN_PHOTO from "@/clientComponents/mainPhoto";
import MAIN_TEXT from "@/components/mainText";

import { background } from "@/public";
import HERO_TEXT from "@/clientComponents/heroSectionText";

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
        <div className="absolute top-0 w-full -z-50 opacity-20">
          <Image
            src={background}
            alt="background"
            className=" w-full  object-cover"
          />
        </div>
        <div className="w-full min-h-[70vh] flex justify-center pt-[80px] px-[20px] ">
          <HERO_TEXT />
        </div>
        <div className="w-full  flex justify-evenly items-center mt-[50px] px-[20px] ">
          <MAIN_PHOTO />
          <MAIN_TEXT />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default HOME;
