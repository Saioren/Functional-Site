import React from "react";
import ButtonComponent from "../../Button";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function BackToTop() {
  const { theme } = useTheme();
  return (
    <div className="flex pb-[1rem] flex-col w-100%">
      <ButtonComponent
        paddingX={3}
        image={React.createElement(FaArrowUp)}
        href={"/"}
        colorScheme={theme === "dark" ? "light" : "dark"}
        type="link"
      />
    </div>
  );
}
