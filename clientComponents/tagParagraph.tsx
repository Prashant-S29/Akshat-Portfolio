"use client";

import React, { Children, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const TAG_PARA = () => {
  const paragraph: string =
    "I believe in the incredible potential of education to shape destinies and break down limitations. My vision is to create a platform where knowledge becomes a catalyst for personal evolution.";

  const words: string[] = paragraph.split(" ");

  const paraElement = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paraElement,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <>
      <div
        ref={paraElement}
        className="flex flex-wrap justify-center text-center leading-none"
      >
        {/* <span className="text-[52px] font-black">{paragraph}</span> */}
        {words.map((word, index) => (
          <WORDS
            key={index}
            range={[
              index / words.length,
              index / words.length + 1 / words.length,
            ]}
            progress={scrollYProgress}
          >
            {word}
          </WORDS>
        ))}
      </div>
    </>
  );
};

const WORDS = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: any;
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  const character: string[] = children.split("");
  return (
    <>
      <span className="relative px-[8px] text-[54px] font-black">
        {character.map((char, index) => (
          <CHARACTER
            key={index}
            range={[range[0] + step * index, range[0] + step * (index + 1)]}
            progress={progress}
          >
            {char}
          </CHARACTER>
        ))}
      </span>
    </>
  );
};

const CHARACTER = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span className="absolute opacity-10 duration-200">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default TAG_PARA;
