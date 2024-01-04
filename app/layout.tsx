import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";

import Theme_Provider from "@/clientComponents/themeProvider";
import ThemeSwitcher from "@/clientComponents/themeChanger";
import NAVBAR_TWO from "@/components/navbarTwo";

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
      </body>
    </html>
  );
}
