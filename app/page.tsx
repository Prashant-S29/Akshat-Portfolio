import React from "react";
import Image from "next/image";
import MAIN_PHOTO from "@/clientComponents/mainPhoto";

const HOME = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-evenly mt-[50px] px-[20px] ">
        <div className="text-[30px] leading-tight">
          <div>
            <span className="font-black">Hola, I am</span>
          </div>
          <div>
            <span>Akshat Khandelwal</span>
          </div>
          <div></div>
          <div>
            <span>Entrepreneur / Product Manager / Tech & B2C Builder</span>
          </div>
        </div>
        <MAIN_PHOTO />
      </div>
    </>
  );
};

export default HOME;
