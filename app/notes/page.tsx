import React from "react";
import NotesComponent from "../components/Notes";
import NotepadProvider from "@/context/NotepadProvider";

export default function Notes() {
  return (
    <NotepadProvider>
      <main className="flex w-full justify-center">
        <NotesComponent />
      </main>
    </NotepadProvider>
  );
}
