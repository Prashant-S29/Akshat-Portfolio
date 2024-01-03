import NAVBAR_MENU_D from "@/clientComponents/navbarMenuDesktop";
import Link from "next/link";
import React from "react";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const NAVBAR = () => {
  return (
    <>
      <nav className="w-full p-[20px] sticky top-0 backdrop-blur-sm">
        <div className="flex justify-center gap-[20px]">
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
        <div className="w-full mt-[10px]">
          <div className="flex justify-evenly gap-[60px] items-center w-full">
            <div>
              <span className="font-black text-[24px]">
                A<span className="text-red-500">.</span>K
              </span>
            </div>
            <div className="ml-[30px]">
              <NAVBAR_MENU_D />
            </div>

            <div>
              <Link href="/contact" tabIndex={-1}>
                <button
                  className="px-[20px] py-[11px] duration-200 ring-1 ring-[#2662fa]  hover:bg-[#2662fa]
                   hover:text-white text-[#2662fa] dark:bg-[#2662fa] dark:text-white  rounded-full text-[13px] font-semibold outline-none"
                  tabIndex={-1}
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NAVBAR;
