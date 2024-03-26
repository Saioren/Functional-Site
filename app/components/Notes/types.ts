export type NotepadProps = {
    handleNoteSwap: () => void;
    openNotes: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
  };