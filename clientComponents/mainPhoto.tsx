"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { designOne, mindImage, bodyImage, mindInside } from "@/public";

const MAIN_PHOTO = () => {
  const ideaOne = useRef(null);
  const ideaTwo = useRef(null);
  const ideaThree = useRef(null);
  const backPorpOne = useRef(null);
  const backPorpTwo = useRef(null);
  const frontProp = useRef(null);
  const mindImg = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "300px",
        end: "+=150px",
        // markers: true,
      },
    });
    timeline
      .fromTo(
        ideaOne.current,
        { rotate: "15deg", left: "145px", top: "-40px" },
        { rotate: "90deg", left: "100px", top: "70px" },
      )
      .fromTo(
        ideaTwo.current,
        { rotate: "20deg", left: "140px", top: "-20px" },
        { rotate: "90deg", left: "100px", top: "70px" },
      )
      .fromTo(
        ideaThree.current,
        { rotate: "30deg", left: "135px", top: "-5px" },
        { rotate: "90deg", left: "100px", top: "70px" },
      )
      .fromTo(
        backPorpOne.current,
        { rotate: "-30deg", marginLeft: "-80px", top: "35px" },
        { rotate: "0deg", marginLeft: "0px", top: "66px" },
      )
      .fromTo(
        backPorpTwo.current,
        { right: "-30px", top: "80px" },
        { right: "10px", top: "150px" },
      )
      .fromTo(
        frontProp.current,
        { rotate: "-30deg", marginBottom: "-50px" },
        { rotate: "0deg", marginBottom: "0px" },
      )
      .fromTo(
        mindImg.current,
        { marginLeft: "-60px", rotate: "-40deg" },
        { marginLeft: "0px", rotate: "0deg" },
        "+=0.5",
      );
  }, []);

  return (
    <>
      <div className="relative flex h-fit text-black">
        <div className="relative">
          <div className="absolute left-[86px] top-[23px] -z-10">
            <Image src={mindInside} alt="prashant" className="w-[120px]" />
          </div>
          <div ref={mindImg} className="duration-300">
            <Image
              src={mindImage}
              alt="prashant"
              className={`w-[300px] duration-300`}
            />
          </div>
          <div>
            <Image src={bodyImage} alt="prashant" className="w-[300px]" />
          </div>
        </div>
        <div
          className={`absolute  -z-20 flex cursor-pointer items-center gap-1  rounded-full border border-black bg-white px-[10px] py-[2px] duration-[500ms]`}
          ref={ideaThree}
        >
          <div className="aspect-square w-[10px] rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Ideas</span>
          </div>
        </div>
        <div
          className={`absolute  -z-20 flex cursor-pointer items-center gap-1  rounded-full border border-black bg-white px-[10px] py-[2px] duration-[400ms]`}
          ref={ideaTwo}
        >
          <div className="aspect-square w-[10px] rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Innovation</span>
          </div>
        </div>
        <div
          className={`absolute  -z-20 flex cursor-pointer items-center gap-1  rounded-full border border-black bg-white px-[10px] py-[2px] duration-[400ms]`}
          ref={ideaOne}
        >
          <div className="aspect-square w-[10px] rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Creativity</span>
          </div>
        </div>

        <div className=" absolute  bottom-0 -z-10 -ml-[60px] h-[80px] w-full rounded-bl-full bg-pink-500" />
        <div
          className={`absolute  -z-10 aspect-square w-[100px]  rounded-full bg-blue-500 duration-300`}
          ref={backPorpTwo}
        />
        <div
          className={`absolute  bottom-0 right-0 -mb-[25px] flex items-center justify-center gap-2 rounded-[10px]
          bg-white p-[10px] shadow-xl duration-300 `}
          ref={frontProp}
        >
          <div className="leading-none">
            <span className="text-[30px] font-black">5k+</span>
          </div>
          <div className="text-[12px] font-bold leading-none">
            <div>
              <span>Tech Vector</span>
            </div>
            <div>
              <span>Community</span>
            </div>
          </div>
        </div>
        <div
          className={`absolute -z-10  aspect-square w-[130px] rounded-br-[20px] 
          rounded-tl-full duration-200`}
          style={{ backgroundImage: `url(${designOne.src})` }}
          ref={backPorpOne}
        />
      </div>
    </>
  );
};

export default MAIN_PHOTO;
