"use client";

import { ThemeProvider } from "next-themes";

const Theme_Provider = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Theme_Provider;
