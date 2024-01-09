"use client";

import React, { ReactElement } from "react";
import { ThemeProvider } from "next-themes";

const Theme_Provider = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default Theme_Provider;
