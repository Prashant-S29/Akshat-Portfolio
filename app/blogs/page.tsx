import React from "react";

import POPULAR_BLOGS from "@/clientComponents/popularBlogs";
import CURVE_TEXT from "@/clientComponents/curveText";

const BLOG = () => {
  return (
    <>
      <div className="mt-[50px]">
        <POPULAR_BLOGS />
      </div>
      <div className="pointer-events-none -mt-[350px]">
        <CURVE_TEXT>
          Not just any written articles. Writing blogs that are based on true
          facts and knowledge Not just any written articles Writing blogs that
          are based on true facts and knowledge
        </CURVE_TEXT>
      </div>
      <div className="h-[500px] w-full" />
    </>
  );
};

export default BLOG;
