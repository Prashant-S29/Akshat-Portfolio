import React from "react";
// import { motion } from "framer-motion";

const ABOUT = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const [isHovered, setIsHovered] = useState(false);
  // const glowSize = {
  //   width: isHovered ? 80 : 0,
  //   height: isHovered ? 80 : 0,
  // };

  

  // useEffect(() => {
  //   const updateMousePosition = (e: any) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // });

  return (
    <>
      {/* <div className="flex min-h-screen w-full items-center justify-evenly">
        <div>
          <button
            className={`rounded-[15px] bg-[#2662fa] px-[20px] py-[11px] text-[14px] font-semibold text-white ${
              isButtonClicked ? "scale-95" : ""
            } duration-200 `}
            onClick={handleButtonClick}
          >
            Click Me
          </button>
        </div>

        <div
          className=" aspect-square w-[300px] overflow-hidden rounded-[50px] bg-[#2662fa] text-white"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        ></div>
        <motion.div
          className="pointer-events-none fixed left-0 top-0 h-[80px] w-[80px] rounded-full bg-[#ffffff] blur-[50px]"
          transition={{ type: "tween", ease: "backOut" }}
          animate={{
            width: glowSize.width,
            height: glowSize.height,
            x: mousePosition.x - glowSize.width / 2,
            y: mousePosition.y - glowSize.width / 2,
          }}
        />
      </div> */}
      <div className="glex min-h-screen w-full flex items-center justify-center">
        <div>
          <span>About Page</span>
        </div>
        {/* <div className="roundedCorner rounded-[50px] aspect-square w-[200px] bg-blue-500" /> */}
      </div>
    </>
  );
};

export default ABOUT;
