"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WORK = () => {
  const workText = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "+=600px",
        end: "+=300px",
        markers: true,
      },
    });
    timeline
      .fromTo(
        workText.current,
        { scale: "0.5"},
        { scale: "1" },
      )
  }, []);

  return (
    <>
      <div
        className=" top-0 min-h-[400vh] w-full  bg-black p-[20px]"
      >
        <div ref={workText} className="text-center">
          <span className="text-[250px] font-black text-white">WORK</span>
        </div>
      </div>
    </>
  );
};

export default WORK;
