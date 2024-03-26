export type NotepadProps = {
    handleNoteSwap: () => void;
    openNotes: boolean;
    setErrorState: React.Dispatch<React.SetStateAction<boolean>>;
  };