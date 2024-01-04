import React from "react";
import Image from "next/image";

import MAIN_PHOTO from "@/clientComponents/mainPhoto";
import MAIN_TEXT from "@/components/mainText";

const HOME = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full  flex justify-evenly items-center mt-[50px] px-[20px] ">
          <MAIN_TEXT />
          <MAIN_PHOTO />
        </div>
      </div>
    </>
  );
};

export default HOME;
