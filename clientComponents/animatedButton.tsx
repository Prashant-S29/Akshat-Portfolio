"use client";

import React, { useEffect, useState } from "react";

const ANIMATED_BUTTON = ({
  buttonText,
  buttonStyle,
  shrink,
  clickEffect,
  uniqueID,
}: {
  buttonText: string;
  buttonStyle: string;
  shrink: boolean;
  clickEffect: boolean;
  uniqueID: string;
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    let myAnimatedBtn = document.getElementById(uniqueID);
    myAnimatedBtn?.addEventListener("click", handleButtonClick);

    return () => {
      myAnimatedBtn?.removeEventListener("click", handleButtonClick);
    };
  });

  const handleButtonClick = (e: any) => {
    if (clickEffect) {
      let myAnimatedBtn = document.getElementById(uniqueID);
      let circle = document.createElement("div");
      circle.style.left = e.clientX - e.target.offsetLeft + "px";
      circle.style.top = e.clientY - e.target.offsetTop + "px";
      circle.classList.add("animatedBtn");

      myAnimatedBtn?.appendChild(circle);
      setTimeout(() => {
        myAnimatedBtn?.removeChild(circle);
      }, 400);
    }
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 200);
  };

  return (
    <>
      <div>
        <button
          id={uniqueID}
          className={`${buttonStyle} ${
            shrink && isButtonClicked ? "scale-95" : ""
          } relative flex items-center justify-center overflow-hidden duration-100`}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default ANIMATED_BUTTON;
