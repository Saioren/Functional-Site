import React from "react";

type Props = {
  children: React.ReactNode;
  width: number;
};

export default function MaxWidth({ children, width }: Props) {
  return (
    <main
      className={`max-w-[${width}rem] sm:pt-[5rem] sm:pr-[5rem] sm:pl-[5rem] pt-[2rem] pr-[2rem] pl-[2rem]`}
    >
      {children}
    </main>
  );
}
