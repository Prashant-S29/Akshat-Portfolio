import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";
import CURSOR from "@/clientComponents/cursor";

import Theme_Provider from "@/clientComponents/themeProvider";
import ThemeSwitcherTwo from "@/clientComponents/themeChangerTwo";
import ErrorBoundary from "@/errorBoundry";
import INTROPAGE from "@/clientComponents/introPage";

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
        <ErrorBoundary>
          <Theme_Provider>
            <INTROPAGE>
              <div>
                <ThemeSwitcherTwo />
                <div>
                  <CURSOR />
                  <NAVBAR />
                  {children}
                  <FOOTER />
                </div>
              </div>
            </INTROPAGE>
          </Theme_Provider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
