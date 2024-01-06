import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

import FOOTER from "@/components/footer";

import Theme_Provider from "@/clientComponents/themeProvider";
import ThemeSwitcherTwo from "@/clientComponents/themeChangerTwo";
import NAVBAR_TWO from "@/components/navbar";

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
        className={`${montserrat.className} bg-white dark:bg-[#0f051d] text-black dark:text-white`}
      >
        <Theme_Provider>
          <ThemeSwitcherTwo/>
          <div>
            <NAVBAR_TWO />
            {children}
            <FOOTER />
          </div>
        </Theme_Provider>
      </body>
    </html>
  );
}
