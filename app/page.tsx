"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import MAIN_PHOTO from "@/clientComponents/mainPhoto";
import MAIN_TEXT from "@/components/mainText";

import { background } from "@/public";
import HERO_TEXT from "@/components/heroSectionText";

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
        <div className="absolute top-0 -z-50 w-full opacity-20">
          <Image
            src={background}
            alt="background"
            className=" w-full  object-cover"
          />
        </div>
        <div className="flex min-h-[70vh] w-full justify-center px-[20px] pt-[80px] ">
          <HERO_TEXT />
        </div>
        <div className="mt-[50px]  flex w-full items-center justify-evenly px-[20px] ">
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
