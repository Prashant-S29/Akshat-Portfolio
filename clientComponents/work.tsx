"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WORK = () => {
  const workText = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "-=300px",
        end: "+=300px",
        // markers: true,
      },
    });
    timeline.fromTo(
      workText.current,
      { scale: "0.5", opacity: "0" },
      { scale: "1", opacity: "1" },
    );
    timeline.fromTo(
      container.current,
      { clipPath: `inset(15%)` },
      { clipPath: `inset(0%)` },
      "0",
    );
  }, []);

  return (
    <>
      <div
        ref={container}
        id="box"
        className="relative min-h-[300vh] w-full bg-black p-[20px]"
      >
        <div ref={workText} className="w-full text-center text-white ">
          <span className="text-[250px] font-black ">WORK</span>
        </div>
        {/* <div>
          <div className="text-[170px] font-black text-white  ">
            <div>
              <span>Hello</span>
            </div>
            <div>
              <span>Hello</span>
            </div>
            <div>
              <span>Hello</span>
            </div>
            <div>
              <span>Hello</span>
            </div>
            <div>
              <span>Hello</span>
            </div>
            <div>
              <span>Hello</span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default WORK;
