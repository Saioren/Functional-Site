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

NotepadSchema.add({
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the current date when a new note is created
    },
    updatedAt: {
        type: Date,
        default: null // Initialize to null since the note hasn't been updated yet
    }
});

const Note = mongoose.models.Note || mongoose.model('Note', NotepadSchema);

export default Note;
