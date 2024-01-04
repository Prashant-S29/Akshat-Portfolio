import React from "react";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const FOOTER = () => {
  return (
    <>
      <div className="w-full border-t-[1px] flex justify-between border-t-gray-400 py-[60px] px-[80px]">
        <div>
          <div className="leading-tight">
            <span className="font-black text-[22px]">@Akshat Khandelwal</span>
          </div>
          <div className="w-[300px] leading-tight my-[15px]">
            <span className="text-[14px] text-gray-500">
              Join my Social channels or follow me on Twitter keep up to date
              with my latest work and announcements.
            </span>
          </div>
          <div>
            <ul className="flex gap-3">
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
            </ul>
          </div>
        </div>
        <div className="flex gap-[150px] mr-[100px]">
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
