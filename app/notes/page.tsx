import React from "react";
import NotesComponent from "../components/Notes";
import NotepadProvider from "@/context/NotepadProvider";
import { Toaster } from "react-hot-toast";
import NotepadMaxWidth from "../components/NotepadMaxWidth";

export default function Notes() {
  return (
    <NotepadProvider>
      <NotepadMaxWidth>
        <Toaster position="top-center" />
        <NotesComponent />
      </NotepadMaxWidth>
    </NotepadProvider>
  );
}
