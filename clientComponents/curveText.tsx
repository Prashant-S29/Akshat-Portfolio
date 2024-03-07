"use client";
import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const CURVE_TEXT = ({ children }: { children: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const paths = useRef<SVGTextPathElement[]>([]);

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", String(i * 40 - e * 40) + "%");
      });
    });
  }, [scrollYProgress]);

  return (
    <>
      <div ref={container}>
        <svg className="mb-40 w-full " viewBox="0 0 250 90">
          <path
            fill="none"
            id="curve"
            d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
          />
          <text className="fill-black text-[6px] font-semibold uppercase">
            {[...Array(1)].map((_, i) => {
              return (
                <textPath
                  key={i}
                  ref={(ref) => ref && (paths.current[i] = ref)}
                  startOffset={i * 10 + "%"}
                  href="#curve"
                >
                  {children}
                </textPath>
              );
            })}
          </text>
        </svg>
      </div>
    </>
  );
};

export default CURVE_TEXT;
