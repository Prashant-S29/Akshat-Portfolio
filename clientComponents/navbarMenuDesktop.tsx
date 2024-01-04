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
          <ul className="flex gap-[6px] text-[14px] rounded-full">
            {navMenuLinks.map((navLinkDetail, index) => (
              <li
                key={index}
                className={`px-[18px] py-[6px] relative text-black font-semibold`}
                onMouseEnter={() => {
                  setLineWidth(!lineWidth);
                }}
                onMouseLeave={() => {
                  setLineWidth(!lineWidth);
                }}
              >
                <Link
                  href={navLinkDetail.href}
                  className="outline-none"
                  tabIndex={-1}
                >
                  {navLinkDetail.text}
                </Link>
                {pathName === navLinkDetail.href && (
                  <div className="absolute flex justify-center left-[50%] -translate-x-[50%]">
                    <div
                      className={`  duration-300 w-[5px] aspect-square rounded-full bg-black`}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NAVBAR_MENU_D;
