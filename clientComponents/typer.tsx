"use client";

import React from "react";

import Typewriter from "typewriter-effect";

const TYPER_EFFECT = () => {
  return (
    <>
      <div className="font-black">
        <Typewriter
          options={{
            strings: ["Entrepreneur", "Product Manager", "Tech & B2C Builder"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
};

export default TYPER_EFFECT;
