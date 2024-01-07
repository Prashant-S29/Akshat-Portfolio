"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import { navMenuLinks } from "@/contants";

const NAVBAR_MENU_D = () => {
  const pathName = usePathname();
  const [lineWidth, setLineWidth] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <div>
          <ul className="flex gap-[6px] text-[13px] bg-[#2662fa]  py-[10px] px-[7px] rounded-full">
            {navMenuLinks.map((navLinkDetail, index) => (
              <li key={index}>
                <Link
                  href={navLinkDetail.href}
                  className={`px-[18px] py-[6px] rounded-full relative ${
                    pathName === navLinkDetail.href
                      ? "text-black"
                      : "text-white"
                  }  text-black font-semibold duration-200`}
                  onMouseEnter={() => {
                    setLineWidth(!lineWidth);
                  }}
                  onMouseLeave={() => {
                    setLineWidth(!lineWidth);
                  }}
                  tabIndex={-1}
                >
                  {pathName === navLinkDetail.href && (
                    <motion.div
                      layoutId="active-link"
                      className="bg-white inset-0 w-full absolute"
                      style={{borderRadius: "9999px",}}
                    />
                  )}
                  <span className="relative z-10">{navLinkDetail.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NAVBAR_MENU_D;
