import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";
import CURSOR from "@/clientComponents/cursor";

import Theme_Provider from "@/clientComponents/themeProvider";
import ThemeSwitcherTwo from "@/clientComponents/themeChangerTwo";

const montserrat = Montserrat({ subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshat's Portfolio",
  description: "Akshat Khandelwal - Founder, Techvevtor Volume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-white text-black dark:bg-[#0f051d] dark:text-white`}
      >
        <Theme_Provider>
          <ThemeSwitcherTwo />
          <div>
            <CURSOR />
            <NAVBAR />
            {children}
            <FOOTER />
          </div>
        </Theme_Provider>
      </body>
    </html>
  );
}
