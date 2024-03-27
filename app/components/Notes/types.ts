export type Note = {
  _id: string; // Assuming _id is a string
  title: string;
  body: string;
  createdAt: Date,
  updatedAt: Date,
};

export type GeneralNotepadProps = {
  notes: Note[]; // Array of Note objects
  handleNoteSwap?: () => void;
  openNotes: boolean;
  loading: boolean;
};
