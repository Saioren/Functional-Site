import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NotepadMaxWidth({ children }: Props) {
  return (
    <main
      className={`max-w-[60rem] h-screen justify-center pb-[3rem] px-[1rem] sm:pb-0 pt-[3rem] sm:pt-[4rem] flex w-full`}
    >
      {children}
    </main>
  );
}
