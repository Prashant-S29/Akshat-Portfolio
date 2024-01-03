import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";

import Theme_Provider from "@/clientComponents/themeProvider";
import ThemeSwitcher from "@/clientComponents/themeChanger";
import NAVBAR_TWO from "@/components/navbarTwo";

const montserrat = Montserrat({ subsets: ["latin"] });

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
        className={`${montserrat.className} bg-white dark:bg-[#0f051d] text-black dark:text-white`}
      >
        <div>
          <div className="fixed -z-20">
            <div
              className={`fixed z-[10px] w-[700px] -ml-[150px] -mt-[100px] aspect-square bg-purple-100 dark:bg-[#0f0534] 
               blur-[80px] rounded-full background-gradient-animation`}
            />
            <div
              className="fixed z-[10px]  w-[700px] right-[0%] top-[50%]  aspect-square bg-blue-100 dark:bg-[#0f0534]
              blur-[80px] rounded-full background-gradient-animation"
            />

            <div
              className="fixed z-[10px]  w-[200px] right-[0%] top-[0%]  aspect-square bg-pink-100 dark:bg-[#0f0534]
              blur-[80px] rounded-full background-gradient-animation"
            />
          </div>
          <Theme_Provider>
            <div>
              <div className="fixed bottom-0 right-0 m-5">
                <ThemeSwitcher />
              </div>
              {/* <NAVBAR /> */}
              <NAVBAR_TWO />
              {children}
              <FOOTER />
            </div>
          </Theme_Provider>
        </div>
      </body>
    </html>
  );
}
