import { connectMongoDB } from "@/lib/mongodb";
import Note from '@/models/note'
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newBody: body } = await request.json();
    try {
        await connectMongoDB();
        const updatedNote = await Note.findByIdAndUpdate(id, { title, body, updatedAt: Date.now() }, { new: true });
        if (!updatedNote) {
            return NextResponse.json({ message: 'Note not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Note updated', note: updatedNote }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}


export async function GET(request, { params }) {
    const { id } = params;
    try {
        await connectMongoDB();
        const note = await Note.findOne({ _id: id });
        if (!note) {
            return NextResponse.json({ message: 'Note not found' }, { status: 404 });
        }
        return NextResponse.json({ note }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
