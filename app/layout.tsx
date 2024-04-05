import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/ThemeContext";
import Header from "./components/Header/header";
import ThemeSwitch from "./components/Theme/ThemeSwitch";
import ActiveSectionContextProvider from "../context/ActiveSection";
import HeaderProvider from "@/context/HeaderProvider";
import TimetableProvider from "@/context/TimetableProvider";
import MiniStopwatch from "./components/Timetable/MiniStopwatch";
import HandleTitle from "./components/HandleTitle";
import Footer from "./components/Footer";
//import MouseTrail from "./components/MouseTrail/MouseTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saioren's Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} w-100vw justify-center flex h-100vh  bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#ffd6d8] absolute top-[-6rem] -z-10 right-[2rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] dark:bg-opacity-10" />
        <div className="bg-[#d7d3fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] dark:bg-opacity-20" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <TimetableProvider>
              <HeaderProvider>
                <Header />
                {children}
                <HandleTitle />
                <MiniStopwatch />
                <ThemeSwitch />
              </HeaderProvider>
            </TimetableProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
