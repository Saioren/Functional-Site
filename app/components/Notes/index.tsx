"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Notepad from "./Notepad";

export default function NotesComponent() {
  const { theme } = useTheme();
  const [openNotes, setOpenNotes] = useState(false);
  return (
    <div className="p-[2rem] flex justify-center items-center">
      <section className="flex justify-center w-full max-w-[50rem]">
        <Notepad />
      </section>
      {openNotes && (
        <section className="">
          <div>Note number 1</div>
        </section>
      )}
    </div>
  );
}
