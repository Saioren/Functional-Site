import React from "react";
import { useNotepadProviderContext } from "@/context/NotepadProvider";
import UpdateNote from "./UpdateNote";
import CreateNote from "./CreateNote";

export default function Notepad({}) {
  const { updateNote } = useNotepadProviderContext();

  return updateNote ? <UpdateNote /> : <CreateNote />;
}
