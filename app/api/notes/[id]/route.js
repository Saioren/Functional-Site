import { connectMongoDB } from "@/lib/mongodb";
import Note from '@/models/note';
import { NextResponse } from 'next/server';

// Define a function to set CORS headers
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.saioren.io');
  // You can also set other CORS headers like Access-Control-Allow-Methods, etc.
}

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


export async function GET(request, response, { params }) {
    // Set CORS headers
    setCorsHeaders(response);

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
