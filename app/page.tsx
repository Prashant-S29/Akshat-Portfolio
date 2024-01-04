import React from "react";
import Image from "next/image";

import MAIN_PHOTO from "@/clientComponents/mainPhoto";
import MAIN_TEXT from "@/components/mainText";

import { background } from "@/public";

const HOME = () => {
  return (
    <>
      <div className="absolute top-0 w-full -z-50 opacity-20">
        <Image
          src={background}
          alt="background"
          className=" w-full  object-cover"
        />
      </div>
      <div className="w-full min-h-screen ">
        <div className="w-full  flex justify-evenly items-center mt-[50px] px-[20px] ">
          <MAIN_PHOTO />
          <MAIN_TEXT />
        </div>
      </div>
    </>
  );
};

export default HOME;
