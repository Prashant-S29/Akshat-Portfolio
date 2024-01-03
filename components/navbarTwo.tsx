import React from "react";
import Link from "next/link";

import NAVBAR_MENU_D from "@/clientComponents/navbarMenuDesktop";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const NAVBAR_TWO = () => {
  return (
    <>
      <div className="flex justify-between mt-[10px] px-[12%]">
        <div className="flex gap-3">
          <div className="flex gap-1 items-center">
            <div>
              <EmailRoundedIcon className="text-black dark:text-white  text-[20px]" />
            </div>
            <div>
              <span className="text-[14px] font-semibold dark:font-medium">
                me@gamil.com
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <PhoneRoundedIcon className="text-black dark:text-white  text-[20px]" />
            </div>
            <div>
              <span className="text-[14px] font-semibold dark:font-medium">
                +91-9079215052
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-3 ">
            <li>
              <Link href="">
                <FacebookIcon className="text-[24px] hover:text-blue-800 dark:hover:text-white duration-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <LinkedInIcon className="text-[24px] hover:text-blue-800 dark:hover:text-white duration-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <TwitterIcon className="text-[24px] hover:text-blue-800 dark:hover:text-white duration-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <InstagramIcon className="text-[24px] hover:text-blue-800 dark:hover:text-white duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="w-full z-50 h-[100px] backdrop-blur-[5px] sticky top-0 py-[10px] px-[10%]">
        <div
          className="w-full h-full bg-white relative overflow-hidden  flex justify-between px-[20px] items-center rounded-[20px]
         shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)]"
        >
          {/* <div className="absolute w-[30px] -rotate-[25deg] h-[110px] navbar-animation bg-gray-200"></div> */}
          <div className="z-10">
            <span className="font-black text-black text-[24px]">
              A<span className="text-red-500">.</span>K
            </span>
          </div>
          <div className="z-10">
            <NAVBAR_MENU_D />
          </div>
          <div className="z-10">
            <Link href="/contact" tabIndex={-1}>
              <button
                className="px-[20px] py-[11px] duration-200 ring-1 ring-[#2662fa]  hover:bg-[#2662fa]
                   hover:text-white text-[#2662fa] dark:bg-[#2662fa] dark:text-white  rounded-full text-[13px] font-semibold outline-none"
                tabIndex={-1}
              >
                Contact
              </button>
            </Link>
          </div>{" "}
        </div>
      </nav>
    </>
  );
};

export default NAVBAR_TWO;
