"use client";

import React, { useEffect, useState } from "react";

const POPULAR_BLOGS = () => {
  const [activeBlogCard, setActiveBlogCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeBlogCard >= 3) {
        setActiveBlogCard(0);
      } else {
        setActiveBlogCard((activeBlogCard) => activeBlogCard + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeBlogCard]);
  return (
    <>
      <div className="flex w-full  justify-center gap-[20px] overflow-hidden px-[20px]">
        {Array(4)
          .fill(" ")
          .map((value, index) => (
            <div
              key={index}
              className={` h-[500px] ${
                index === activeBlogCard
                  ? "w-[55%] cursor-default "
                  : "w-[15%] cursor-pointer"
              } overflow-hidden rounded-[40px] bg-gray-100 duration-700`}
              onClick={() => {
                setActiveBlogCard(index);
              }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default POPULAR_BLOGS;
