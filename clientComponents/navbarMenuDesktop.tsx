"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeSwitcher from "@/clientComponents/themeChanger";

import { navMenuLinks } from "@/contants";

const NAVBAR_MENU_D = () => {
  const pathName = usePathname();
// bg-[#2662fa]
  return (
    <>
      <div className="flex items-center">
        <div>
          <ul className="flex gap-[6px] text-[13px] bg-gradient-to-r from-[#2662fa]  to-purple-600  p-[7px] rounded-full">
            {navMenuLinks.map((navLinkDetail, index) => (
              <li
                key={index}
                className={`px-[18px] py-[6px] ${
                  pathName === navLinkDetail.href
                    ? "bg-[#ffffff] text-black "
                    : "hover:bg-[#ffffff]  hover:text-black text-white"
                }  duration-200 rounded-full font-semibold `}
              >
                <Link
                  href={navLinkDetail.href}
                  className="outline-none"
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
