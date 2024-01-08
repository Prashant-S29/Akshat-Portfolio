import React from "react";
import Link from "next/link";

import NAVBAR_MENU_D from "@/clientComponents/navbarMenuDesktop";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ANIMATED_BUTTON from "@/clientComponents/animatedButton";

const NAVBAR = () => {
  return (
    <>
      <div className="mt-[10px] flex justify-between px-[18%] pb-[10px]">
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <div>
              <EmailRoundedIcon className="text-[20px] text-black  dark:text-white" />
            </div>
            <div>
              <span className="text-[13px] font-semibold dark:font-medium">
                khandelwalakshat2002@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <PhoneRoundedIcon className="text-[20px] text-black  dark:text-white" />
            </div>
            <div>
              <span className="text-[13px] font-semibold dark:font-medium">
                +91-7740854960
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-3 ">
            <li className="">
              <Link href="">
                <FacebookIcon className="text-[24px]  hover:text-blue-500" />
              </Link>
            </li>
            <li className="">
              <Link href="">
                <InstagramIcon className="text-[24px]  hover:text-pink-500" />
              </Link>
            </li>
            <li className="">
              <Link href="">
                <TwitterIcon className="text-[24px]  hover:text-blue-500" />
              </Link>
            </li>
            <li className="">
              <Link href="">
                <LinkedInIcon className="text-[24px]  hover:text-blue-500" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="sticky top-0 z-50  h-[80px]  w-full  px-[16%]">
        <div className="relative flex  h-full w-full items-center justify-between bg-[#ffffff1d] overflow-hidden rounded-[20px]  px-[20px] shadow-[0_0px_30px_-15px_rgba(0,0,0,0.4)] backdrop-blur-[5px]  ">
          <div className="z-10">
            <Link href="/">
              <span className="text-[24px] font-black mix-blend-difference ">
                A<span className="text-red-500">.</span>K
              </span>
            </Link>
          </div>
          <div className="z-10">
            <NAVBAR_MENU_D />
          </div>
          <div className="z-10">
            {/* <Link href="/contact" tabIndex={-1}> */}
            <ANIMATED_BUTTON
              shrink={true}
              clickEffect={false}
              uniqueID="myBtnOne"
              buttonText="Contact"
              buttonStyle="rounded-[14px] bg-[#2662fa] px-[20px] py-[10px]   text-[13px]
                   font-semibold text-[#ffffff] outline-none  hover:text-white dark:text-white"
            />
            {/* </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NAVBAR;
