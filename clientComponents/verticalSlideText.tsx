"use client";

import React, { useEffect, useState } from "react";

const VERTICAL_SLIDE = ({ textArr }: { textArr: string[] }) => {
  const [showText, setShowText] = useState(0);
  useEffect(() => {
    const updateShowText = () => {
      if (showText === (textArr.length - 1) * 75) {
        setShowText(0);
        return;
      }
      setShowText((showText) => showText + 75);
    };
    const interval = setInterval(() => {
      updateShowText();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [showText, textArr.length]);

  return (
    <>
      <div className="h-[70px] overflow-hidden text-[60px]  ">
        {textArr.map((text, index) => (
          <div key={index} className="flex">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={`text-[#001aff] duration-300 dark:text-[#ff00d4]  `}
                style={{
                  transform: `translateY(-${showText}px)`,
                  transitionDelay: `${index * 30}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* <div>
        <button onClick={updateShowText}>Up</button>
      </div> */}
    </>
  );
};

export default VERTICAL_SLIDE;
