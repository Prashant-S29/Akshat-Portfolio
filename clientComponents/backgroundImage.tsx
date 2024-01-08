"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BACKGROUND_IMAGE = () => {
  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const lineThree = useRef(null);
  const lineFour = useRef(null);
  const lineFive = useRef(null);
  const lineSix = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top top",
        end: "+=500px",
        // markers: true,
      },
    });
    timeline
      .fromTo(
        lineOne.current,
        { marginTop: "0px" },
        { marginTop: "-200px" },
        "-=100%",
      )
      .fromTo(
        lineTwo.current,
        { marginTop: "-350px" },
        { marginTop: "0px" },
        "-=100%",
      )
      .fromTo(
        lineThree.current,
        { marginTop: "-50px" },
        { marginTop: "-250px" },
        "-=100%",
      )
      .fromTo(
        lineFour.current,
        { marginTop: "-220px" },
        { marginTop: "180px" },
        "-=100%",
      )
      .fromTo(
        lineFive.current,
        { marginTop: "-10px" },
        { marginTop: "-190px" },
        "-=100%",
      )
      .fromTo(
        lineSix.current,
        { marginTop: "-200px" },
        { marginTop: "0px" },
        "-=100%",
      );
  }, []);

  return (
    <>
      <div className="-z-50 flex   h-screen w-full justify-evenly overflow-hidden">
        <div ref={lineOne} className=" px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgOne_wcntnf.png"
            alt="bgOne"
            width={250}
            height={200}
            className="min-w-[250px] opacity-20 duration-300 dark:opacity-40 dark:brightness-50"
          />
        </div>
        <div ref={lineTwo} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgTwo_qqzkwu.png"
            alt="bgTwo"
            width={250}
            height={200}
            className="min-w-[250px] opacity-20 duration-300 dark:opacity-40 dark:brightness-50"
          />
        </div>
        <div ref={lineThree} className=" px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgThree_olznef.png"
            alt="bgThree"
            width={250}
            height={200}
            className="min-w-[250px] opacity-20 duration-300 dark:opacity-40 dark:brightness-50"
          />
        </div>
        <div ref={lineFour} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgFour_o1q8ij.png"
            alt="bgFour"
            width={250}
            height={200}
            className="min-w-[250px] opacity-20 duration-300 dark:opacity-40 dark:brightness-50"
          />
        </div>
        <div ref={lineFive} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgFive_stewrt.png"
            alt="bgFive"
            width={250}
            height={200}
            className="min-w-[250px] opacity-20 duration-300 dark:opacity-40 dark:brightness-50"
          />
        </div>
        <div ref={lineSix} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgSix_ds97oi.png"
            alt="bgSix"
            width={250}
            height={200}
            className="min-w-[250px] opacity-20 duration-300 dark:opacity-40 dark:brightness-50"
          />
        </div>
      </div>
    </>
  );
};

export default BACKGROUND_IMAGE;
