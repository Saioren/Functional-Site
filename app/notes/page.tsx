import React from "react";
import NotesComponent from "../components/Notes";
import NotepadProvider from "@/context/NotepadProvider";

export default function Notes() {
  return (
    <NotepadProvider>
      <main className="pt-[2rem] sm:pt-[1rem]">
        <NotesComponent />
      </main>
    </NotepadProvider>
  );
}
