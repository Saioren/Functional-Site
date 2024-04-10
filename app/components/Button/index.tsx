import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React, { ReactElement } from "react";
import { BsArrowRight } from "react-icons/bs";

type ButtonProps = {
  href: string;
  buttonText?: string;
  colorScheme: string;
  image?: ReactElement;
  type: string;
  onClick?: React.MouseEventHandler;
  smallBtn?: boolean;
};

export default function ButtonComponent({
  href,
  buttonText,
  colorScheme,
  image,
  type,
  onClick,
  smallBtn = false,
}: ButtonProps) {
  const { theme } = useTheme();
  return type === "anchor" ? (
    <a
      target="_blank"
      className={`group ${
        colorScheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      } px-3 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:shadow-none shadow-md`}
      href={`${href}`}
    >
      <button className="flex items-center gap-2">
        {buttonText} {image}
      </button>
    </a>
  ) : (
    <Link
      className={`group ${smallBtn ? "px-3" : "px-7"} ${
        colorScheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      } py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:shadow-none shadow-md`}
      href={`${href}`}
    >
      <button className="flex items-center gap-2">
        {buttonText} {image}
      </button>
    </Link>
  );
}
