import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MaxWidth({ children }: Props) {
  return (
    <main
      className={`sm:max-w-[60rem] max-w-[22rem] sm:pt-[5rem] sm:pr-[5rem] sm:pl-[5rem] pt-[2rem] pr-[2rem] pl-[2rem]`}
    >
      {children}
    </main>
  );
}
