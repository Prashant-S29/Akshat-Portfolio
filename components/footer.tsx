import React from "react";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SOCIAL_ICONS from "@/clientComponents/socialIcons";

const FOOTER = () => {
  return (
    <>
      <div className="flex w-full justify-between border-t-[1px] border-t-gray-400 px-[80px] py-[60px]">
        <div>
          <div className="leading-tight">
            <span className="text-[22px] font-black">@Akshat Khandelwal</span>
          </div>
          <div className="my-[15px] w-[300px] leading-tight">
            <span className="text-[14px] text-gray-500">
              Join my Social channels or follow me on Twitter keep up to date
              with my latest work and announcements.
            </span>
          </div>
          <div>
            <SOCIAL_ICONS />
            {/* <ul className="flex gap-3">
              <li>
                <Link href="">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link href="">
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link href="">
                  <LinkedInIcon />
                </Link>
              </li>
              <li>
                <Link href="">
                  <TwitterIcon />
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="mr-[100px] flex gap-[150px]">
          <div>
            <div>
              <span className="font-bold">Quick Links</span>
            </div>
            <div className="text-[14px] ">
              <ul>
                <li className="mt-[10px]">
                  <Link href="">About</Link>
                </li>
                <li className="mt-[10px]">
                  <Link href="">Offerings</Link>
                </li>
                <li className="mt-[10px]">
                  <Link href="">Academic CV</Link>
                </li>
                <li className="mt-[10px]">
                  <Link href="">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <span className="font-bold">Community</span>
            </div>
            <div className="text-[14px] ">
              <ul>
                <li className="mt-[10px]">
                  <Link href="">How it works!</Link>
                </li>
                <li className="mt-[10px]">
                  <Link href="">Community</Link>
                </li>
                <li className="mt-[10px]">
                  <Link href="">Get in Touck</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FOOTER;
