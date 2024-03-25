"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

type TeaserImageProps = {
  header: string;
  description: string;
  darkTeaser: string;
  lightTeaser: string;
  href: string;
};

export default function TeaserImage(props: TeaserImageProps) {
  const { theme } = useTheme();
  const { header, description, darkTeaser, lightTeaser, href } = props;
  return (
    <Link href={href}>
      <div className="rounded-sm w-full">
        <article className="flex flex-col bg-gray-100 group border max-w-[30rem] border-black/15 rounded-lg overflow-hidden relative h-[20rem] sm:h-[15rem] w-[100%] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg">
          <div className=" px-[1rem] pt-[2rem] pb-[1rem] sm:max-w-[50%] flex flex-col text-center sm:h-full sm:group-even:ml-[14rem]">
            <h2 className="text-2xl font-semibold">{header}</h2>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
          </div>
          <div className="flex justify-center">
            {theme === "dark" ? (
              <Image
                width={400}
                height={400}
                src={darkTeaser}
                alt="Dark teaser"
                className="sm:absolute sm:top-0 sm:-right-[8rem] w-[22.25rem] scale-[0.9] rounded-t-lg shadow-2xl
            transition 
        sm:group-hover:scale-[1]
        sm:group-hover:-translate-x-3
        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2
        group-hover:scale-95
        "
              ></Image>
            ) : (
              <Image
                width={400}
                height={400}
                quality={100}
                src={lightTeaser}
                alt="Light teaser"
                className="sm:absolute sm:top-0 sm:-right-[8rem] w-[22.25rem] scale-[0.9] rounded-t-lg shadow-2xl
        transition 
        sm:group-hover:scale-[1]
        sm:group-hover:-translate-x-3
        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2
        group-hover:scale-95
"
              ></Image>
            )}
          </div>
        </article>
      </div>
    </Link>
  );
}
