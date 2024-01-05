import React from "react";

import HELLO_TEXT from "@/clientComponents/helloText";
import Image from "next/image";
import { lineStroke } from "@/public";
import TYPER from "@/clientComponents/typer";

const MAIN_TEXT = () => {
  return (
    <>
      <div className="text-[30px]  leading-tight">
        <div>
          <HELLO_TEXT />
          <div>
            <span className="font-black">I am 👋</span>
          </div>
        </div>
        <div className="relative">
          <div>
            <span className="font-black text-[40px] text-[#001aff] dark:text-[#ff00d4]">
              Akshat Khandelwal
            </span>
            {/* <span className="font-black text-[40px] bg-gradient-to-tr from-[#001aff] dark:from-[#47f8c9] to-purple-500
            dark:to-pink-500 nameText-gradient">
              Akshat Khandelwal */}
            {/* </span> */}
          </div>
          <div className="absolute -z-10">
            <Image
              src={lineStroke}
              alt="lineStroke"
              className="w-[400px] -mt-[15px]"
            />
          </div>
        </div>
        <div>
          <TYPER />
        </div>
      </div>
    </>
  );
};

export default MAIN_TEXT;
