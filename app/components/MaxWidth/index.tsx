import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MaxWidth({ children }: Props) {
  return <main className={` bg-red-300 flex`}>{children}</main>;
}
