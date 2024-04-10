// pages/api/notes.js

import { connectMongoDB } from '@/lib/mongodb';
import Note from '@/models/note';
import { NextResponse } from 'next/server';

// Define a function to set CORS headers
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.saioren.io');
  // You can also set other CORS headers like Access-Control-Allow-Methods, etc.
}

export async function POST(request) {
    const { title, body } = await request.json();
    await connectMongoDB();
    await Note.create({ title, body });
    return NextResponse.json({ message: 'Note created' }, { status: 200 });
}

export async function GET(request, response) {
    // Set CORS headers
    setCorsHeaders(response);

    await connectMongoDB();
    const notes = await Note.find().sort({ createdAt: -1 }).limit(12);
    return NextResponse.json({ notes });
}

export async function DELETE(request, response) {
    // Set CORS headers
    setCorsHeaders(response);

    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Note deleted' }, { status: 200 });
}
