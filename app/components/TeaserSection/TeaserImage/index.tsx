"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

type TeaserImageProps = {
  header: string;
  description: string;
  darkTeaser: string;
  lightTeaser: string;
};

export default function TeaserImage(props: TeaserImageProps) {
  const { theme } = useTheme();
  const { header, description, darkTeaser, lightTeaser } = props;
  return (
    <div className="flex justify-center w-full">
      <article className="bg-gray-100 group max-w-[28rem] border border-black/15 rounded-lg overflow-hidden relative h-[15rem] w-[100%] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg">
        <div className=" px-[1rem] py-[2rem] max-w-[50%] flex flex-col h-full sm:group-even:ml-[14rem]">
          <h2 className="text-2xl font-semibold">{header}</h2>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
        </div>

        {theme === "dark" ? (
          <Image
            width={400}
            height={400}
            src={darkTeaser}
            alt="Dark teaser"
            className="absolute top-0 -right-[8rem] w-[22.25rem] scale-[0.9] rounded-t-lg shadow-2xl
            transition 
        group-hover:scale-[1]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          ></Image>
        ) : (
          <Image
            width={400}
            height={400}
            quality={100}
            src={lightTeaser}
            alt="Light teaser"
            className="absolute top-0 -right-[10rem] sm:-right-[8rem] w-[22.25rem] scale-[0.9] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          ></Image>
        )}
      </article>
    </div>
  );
}
