import React from "react";
import NotesComponent from "../components/Notes";
import NotepadProvider from "@/context/NotepadProvider";
import MaxWidth from "../components/MaxWidth";
import { Toaster } from "react-hot-toast";

export default function Notes() {
  return (
    <NotepadProvider>
      <MaxWidth>
        <Toaster position="top-center" />
        <NotesComponent />
      </MaxWidth>
    </NotepadProvider>
  );
}
