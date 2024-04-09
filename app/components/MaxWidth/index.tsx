import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MaxWidth({ children }: Props) {
  return (
    <main
      className={`max-w-[60rem] pb-[3rem] px-[1rem] sm:pb-0 pt-[3rem] sm:pt-[4rem] flex`}
    >
      {children}
    </main>
  );
}
