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
        end: "+=200px",
        // markers: true,
      },
    });
    timeline
      .fromTo(
        ideaOne.current,
        { rotate: "15deg", left: "145px", top: "-40px" },
        { rotate: "90deg", left: "100px", top: "70px" }
      )
      .fromTo(
        ideaTwo.current,
        { rotate: "20deg", left: "140px", top: "-20px" },
        { rotate: "90deg", left: "100px", top: "70px" }
      )
      .fromTo(
        ideaThree.current,
        { rotate: "30deg", left: "135px", top: "-5px" },
        { rotate: "90deg", left: "100px", top: "70px" }
      )
      .fromTo(
        backPorpOne.current,
        { rotate: "-30deg", marginLeft: "-80px", top: "35px" },
        { rotate: "0deg", marginLeft: "0px", top: "66px" }
      )
      .fromTo(
        backPorpTwo.current,
        { right: "-30px", top: "80px" },
        { right: "10px", top: "150px" }
      )
      .fromTo(
        frontProp.current,
        { rotate: "-30deg", marginBottom: "-50px" },
        { rotate: "0deg", marginBottom: "0px" }
      )
      .fromTo(
        mindImg.current,
        { marginLeft: "-60px", rotate: "-40deg" },
        { marginLeft: "0px", rotate: "0deg" },
        "+=0.5"
      );
  }, []);

  return (
    <>
      <div className="relative flex h-fit text-black">
        <div className="relative">
          <div className="absolute left-[86px] top-[23px] -z-10">
            <Image src={mindInside} alt="prashant" className="w-[120px]" />
          </div>
          <div ref={mindImg}>
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
          className={`absolute  border border-black duration-[500ms] cursor-pointer -z-20  bg-white px-[10px] py-[2px] rounded-full flex gap-1 items-center`}
          ref={ideaThree}
        >
          <div className="w-[10px] aspect-square rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Ideas</span>
          </div>
        </div>
        <div
          className={`absolute  border border-black duration-[400ms] cursor-pointer -z-20  bg-white px-[10px] py-[2px] rounded-full flex gap-1 items-center`}
          ref={ideaTwo}
        >
          <div className="w-[10px] aspect-square rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Innovation</span>
          </div>
        </div>
        <div
          className={`absolute  border border-black duration-[400ms] cursor-pointer -z-20  bg-white px-[10px] py-[2px] rounded-full flex gap-1 items-center`}
          ref={ideaOne}
        >
          <div className="w-[10px] aspect-square rounded-full bg-red-500" />
          <div>
            <span className="text-[13px] font-bold">Creativity</span>
          </div>
        </div>

        <div className=" absolute  bottom-0 w-full -z-10 h-[80px] bg-pink-500 rounded-bl-full -ml-[60px]" />
        <div
          className={`absolute  w-[100px] aspect-square rounded-full  bg-blue-500 -z-10 duration-300`}
          ref={backPorpTwo}
        />
        <div
          className={`absolute  flex gap-2 justify-center items-center p-[10px] shadow-xl rounded-[10px] duration-300
          bg-white right-0 bottom-0 -mb-[25px] `}
          ref={frontProp}
        >
          <div className="leading-none">
            <span className="text-[30px] font-black">5k+</span>
          </div>
          <div className="leading-none text-[12px] font-bold">
            <div>
              <span>Tech Vector</span>
            </div>
            <div>
              <span>Community</span>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-[130px]  aspect-square -z-10 rounded-tl-full 
          rounded-br-[20px] duration-200`}
          style={{ backgroundImage: `url(${designOne.src})` }}
          ref={backPorpOne}
        />
      </div>
    </>
  );
};

export default MAIN_PHOTO;
