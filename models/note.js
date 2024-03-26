import mongoose from 'mongoose';

const NotepadSchema = new mongoose.Schema(
    {
        title: String,
        body: String,
      },
      {
        timestamps: true,
      }
);

const Note = mongoose.models.Note || mongoose.model('Note', NotepadSchema);

export default Note;
