"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
                  className={`px-[18px] py-[6px] ${
                    pathName === navLinkDetail.href
                      ? "bg-white "
                      : " text-white font-medium hover:bg-[#ffffff] hover:text-black"
                  } rounded-full relative  text-black font-semibold duration-300`}
                  onMouseEnter={() => {
                    setLineWidth(!lineWidth);
                  }}
                  onMouseLeave={() => {
                    setLineWidth(!lineWidth);
                  }}
                  tabIndex={-1}
                >
                  {navLinkDetail.text}
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
