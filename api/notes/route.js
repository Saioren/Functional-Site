import { connectMongoDB } from "../../lib/mongodb";
import Note from "../../models/note";

export async function POST(req, res) {
    try {
        await connectMongoDB();
        const { title, body } = req.body;
        const note = await Note.create({ title, body });
        return res.status(201).json({ message: 'Note created', note });
    } catch (error) {
        console.error('Error creating note:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function GET(req, res) {
    try {
        await connectMongoDB();
        const notes = await Note.find();
        return res.status(200).json({ notes });
    } catch (error) {
        console.error('Error fetching notes:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function DELETE(req, res) {
    try {
        await connectMongoDB();
        const id = req.query.id;
        await Note.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Note deleted' });
    } catch (error) {
        console.error('Error deleting note:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}