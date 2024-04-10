import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MaxWidth({ children }: Props) {
  return (
    <main
      className={`max-w-[60rem] justify-center sm:pb-[3rem] px-[1rem] pb-0 pt-[4rem] flex w-full`}
    >
      {children}
    </main>
  );
}
