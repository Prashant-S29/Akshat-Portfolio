"use client";

import React, { useEffect } from "react";

const BLOGS = () => {
  useEffect(() => {
    let myBox = document.getElementById("myBox");
    myBox?.addEventListener("click", handleMouseClick);

    return () => {
      myBox?.removeEventListener("click", handleMouseClick);
    };
  });

  const handleMouseClick = (e: any) => {
    let myBox = document.getElementById("myBox");
    let circle = document.createElement("div");
    circle.style.left = e.clientX - e.target.offsetLeft + "px";
    circle.style.top = e.clientY - e.target.offsetTop + "px";
    circle.classList.add("animatedBtn");

    myBox?.appendChild(circle);

    setTimeout(() => {
      myBox?.removeChild(circle);
    }, 400);
  };

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div
          id="myBox"
          className="relative aspect-square w-[300px] overflow-hidden rounded-[50px] bg-blue-500"
        ></div>
      </div>
    </>
  );
};

export default BLOGS;
