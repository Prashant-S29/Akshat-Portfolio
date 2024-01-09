"use client";

import React, { useState } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SOCIAL_ICONS = () => {
  const socialHandles = ["Facebook", "Instagram", "LinkedIn", "Twitter"];
  return (
    <>
      <div className="flex">
        {socialHandles.map((socialHandle, index) => (
          <SocialIconComponent
            key={index}
            socialIndex={index}
            socialHandleName={socialHandle}
            //   SocialHandleIcon={<FacebookIcon />}
          />
        ))}
      </div>
    </>
  );
};

const SocialIconComponent = ({
  socialIndex,
  socialHandleName,
}: {
  socialIndex: number;
  socialHandleName: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconList = [
    { icon: FacebookIcon, name: "Facebook" },
    { icon: InstagramIcon, name: "Instagram" },
    { icon: LinkedInIcon, name: "LinkedIn" },
    { icon: TwitterIcon, name: "Twitter" },
  ];
  return (
    <div className="flex items-center gap-3">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div>
          {iconList.map((item, index) => (
            <div key={index} className="cursor-pointer">
              {socialIndex === index && (
                <div key={index}>
                  <item.icon />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          isHovered ? "w-[75px]" : "w-0"
        }  overflow-hidden duration-200`}
      >
        <span className="text-[13px] font-medium">{socialHandleName}</span>
      </div>
    </div>
  );
};

export default SOCIAL_ICONS;

{
  /* <div className="w-[75px] bg-slate-500">
          <span className="text-[13px] font-medium">Instagram</span>
        </div>
        <div className="w-[75px] bg-slate-500">
          <span className="text-[13px] font-medium">LinkedIn</span>
        </div>
        <div className="w-[75px] bg-slate-500">
          <span className="text-[13px] font-medium">Whatsapp</span>
        </div>
        <div className="w-[75px] bg-slate-500">
          <span className="text-[13px] font-medium">Twitter</span>
        </div> */
}
