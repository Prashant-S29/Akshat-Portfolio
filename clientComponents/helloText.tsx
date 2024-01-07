"use client";

import React, { useEffect, useState } from "react";

const HELLO_TEXT = () => {
  const helloText = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "こんにちは",
    "你好",
    "Привет",
    "مرحبا",
    "नमस्ते",
  ];
  const [activeText, setActiveText] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setActiveText((prevIndex) => (prevIndex + 1) % helloText.length);
      }

      if (activeText === helloText.length - 1) {
        setPause(true);

        setTimeout(() => {
          setPause(false);
        }, 2000);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [pause, helloText.length, activeText]);
  return (
    <>
      <div>
        {helloText.map((text, index) => (
          <div
            key={index}
            className={`${activeText === index ? "block" : "hidden"}`}
          >
            <span className="font-black">{text},</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default HELLO_TEXT;
