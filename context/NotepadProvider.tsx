"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeContext";
import toast from "react-hot-toast";

export type Note = {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};

type NotepadContextProviderProps = {
  children: React.ReactNode;
};

type NotepadContextType = {
  handleResetUpdateNote: () => void;
  notes: Note[];
  body: string;
  loading: boolean;
  openNotes: boolean;
  readNote: boolean;
  initRemove: boolean;
  updateNote: boolean;
  save: boolean;
  errors: Record<string, any>;
  form: Record<string, any>;
  noteSwitch: boolean;
  cancelUpdateNote: boolean;
  title: string;
  setCancelUpdateNote: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setUpdateNote: React.Dispatch<React.SetStateAction<boolean>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNotes: React.Dispatch<React.SetStateAction<boolean>>;
  setReadNote: React.Dispatch<React.SetStateAction<boolean>>;
  setInitRemove: React.Dispatch<React.SetStateAction<boolean>>;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
  setNoteSwitch: React.Dispatch<React.SetStateAction<boolean>>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  setForm: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  handleContentChange: (event: React.ChangeEvent<HTMLDivElement>) => void;
  handleCancelNote: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleSaveNote: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleNoteSwap: () => void;
  eraseWriting: () => void;
  resetNote: () => void;
  initCancelUpdate: () => void;
  initSaveNote: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  initUpdateNote: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCancelUpdateNote: () => void;
  clickedNoteId: string;
  setClickedNoteId: React.Dispatch<React.SetStateAction<string>>;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewBody: React.Dispatch<React.SetStateAction<string>>;
  newTitle: string;
  newBody: string;
  handleSearchNotes: (e: string) => void;
  notFound: boolean;
  setNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  noteSwap: boolean;
  setNoteSwap: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultNotepadContext: NotepadContextType = {
  notes: [],
  title: "",
  body: "",
  loading: true,
  openNotes: false,
  readNote: false,
  initRemove: false,
  noteSwitch: false,
  save: false,
  updateNote: false,
  errors: {},
  form: {},
  cancelUpdateNote: false,
  clickedNoteId: "",
  handleResetUpdateNote: () => {},
  setClickedNoteId: () => {},
  setCancelUpdateNote: () => {},
  setTitle: () => {},
  setBody: () => {},
  setNotes: () => {},
  setLoading: () => {},
  setOpenNotes: () => {},
  setReadNote: () => {},
  setUpdateNote: () => {},
  setInitRemove: () => {},
  setNoteSwitch: () => {},
  setSave: () => {},
  setErrors: () => {},
  setForm: () => {},
  handleContentChange: () => {},
  handleCancelNote: () => {},
  handleSaveNote: () => {},
  handleNoteSwap: () => {},
  eraseWriting: () => {},
  resetNote: () => {},
  initSaveNote: () => {},
  initUpdateNote: () => {},
  initCancelUpdate: () => {},
  handleCancelUpdateNote: () => {},
  setNewTitle: () => {},
  setNewBody: () => {},
  newTitle: "",
  newBody: "",
  handleSearchNotes: () => {},
  notFound: false,
  setNotFound: () => {},
  noteSwap: false,
  setNoteSwap: () => {},
};

export const NotepadContext = createContext<NotepadContextType>(
  defaultNotepadContext
);

export default function NotepadProvider({
  children,
}: NotepadContextProviderProps) {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openNotes, setOpenNotes] = useState<boolean>(false);
  const [readNote, setReadNote] = useState<boolean>(false);
  const [initRemove, setInitRemove] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, any>>({});
  const [form, setForm] = useState<Record<string, any>>({});
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [noteSwitch, setNoteSwitch] = useState<boolean>(false);
  const [updateNote, setUpdateNote] = useState<boolean>(false);
  const [cancelUpdateNote, setCancelUpdateNote] = useState<boolean>(false);
  const [clickedNoteId, setClickedNoteId] = useState<string>(" ");
  const [searchTerm, setSearchTerm] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [noteSwap, setNoteSwap] = useState(false);

  const router = useRouter();

  const { theme } = useTheme();

  function initCancelUpdate() {
    setCancelUpdateNote(true);
  }

  function handleCancelUpdateNote() {
    eraseWriting();
    setUpdateNote(false);
    setClickedNoteId(" ");
    handleNoteSwap();
    setCancelUpdateNote(false);
  }

  function handleResetUpdateNote() {
    eraseWriting();
    setUpdateNote(false);
    setClickedNoteId(" ");
    setCancelUpdateNote(false);
  }

  const handleSearchNotes = (value: string) => {
    setSearchTerm(value);
    handleSearch(value); // Pass the search term to handleSearch
  };

  const handleSearch = (searchTerm: string) => {
    if (!notes) {
      toast.error("Error searching notes");
      return;
    }

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredNotes.length > 0) {
      // Handle the filtered result here
      console.log(filteredNotes);
      setNotFound(false);
    } else {
      console.log("No notes found");
      setNotFound(true);
    }
  };

  const initUpdateNote = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (body === "") {
      if (theme === "dark") {
        toast.error("Note cannot be empty!", {
          style: {
            background: "#1D1D26",
            color: "#fff",
          },
        });
      } else {
        toast.error("Note cannot be empty!");
      }

      return false; // Indicate failure
    } else {
      setSave(true);
      return true; // Indicate success
    }
  };

  function eraseWriting() {
    const writingSpace = document.getElementById("writingSpace");
    if (writingSpace !== null) {
      writingSpace.innerHTML = "";
    } else {
      return;
    }
  }

  function resetNote() {
    setSave(false);
    setTitle("");
    setBody("");
    eraseWriting();
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    setBody(event.target.innerText);
    setNewBody(event.target.innerText);
  };

  const handleCancelNote = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSave(false);
    setCancelUpdateNote(false);
  };

  const handleSaveNote = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Give your note a title!");
      return;
    }

    try {
      toast.loading("Saving note...");
      const res = await fetch(`http://localhost:3000/api/notes`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
      if (res.ok) {
        toast.dismiss();
        router.refresh();
        toast.success("Note saved successfully!");
      } else {
        throw new Error("Failed to create note");
      }
    } catch (error) {
      console.log(error);
    } finally {
      resetNote();
      setTimeout(() => {
        toast.dismiss();
      }, 4000);
    }
  };

  const initSaveNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (body === "") {
      if (theme === "dark") {
        toast.error("Note cannot be empty!", {
          style: {
            background: "#1D1D26",
            color: "#fff",
          },
        });
      } else {
        toast.error("Note cannot be empty!");
      }

      return false; // Indicate failure
    } else {
      setSave(true);
      return true; // Indicate success
    }
  };

  const handleNoteSwap = () => {
    setOpenNotes((prevState) => !prevState);
    setNoteSwitch((prevState) => !prevState);
    setTimeout(() => {
      setNoteSwap((prevState) => !prevState);
    }, 140);
    console.log(noteSwap);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/notes`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await res.json();
        setNotes(data.notes);
        setLoading(false);
      } catch (error) {
        console.log("Error loading notes: ", error);
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <NotepadContext.Provider
      value={{
        handleResetUpdateNote,
        notFound,
        setNotFound,
        clickedNoteId,
        setClickedNoteId,
        updateNote,
        noteSwitch,
        notes,
        loading,
        openNotes,
        readNote,
        initRemove,
        save,
        errors,
        form,
        cancelUpdateNote,
        title,
        body,
        setCancelUpdateNote,
        setNotes,
        setLoading,
        setOpenNotes,
        setReadNote,
        setInitRemove,
        setSave,
        setNoteSwitch,
        setErrors,
        setForm,
        setUpdateNote,
        handleContentChange,
        handleCancelNote,
        handleSaveNote,
        handleNoteSwap,
        eraseWriting,
        resetNote,
        initSaveNote,
        setTitle,
        setBody,
        initUpdateNote,
        initCancelUpdate,
        handleCancelUpdateNote,
        newBody,
        newTitle,
        setNewTitle,
        setNewBody,
        handleSearchNotes,
        noteSwap,
        setNoteSwap,
      }}
    >
      {children}
    </NotepadContext.Provider>
  );
}

export function useNotepadProviderContext() {
  const context = useContext(NotepadContext);
  if (context === null) {
    throw new Error(
      "useNotepadProviderContext must be used within a NotepadProvider"
    );
  }
  return context;
}
