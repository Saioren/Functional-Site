import { connectMongoDB } from '@/lib/mongodb';
import Note from '@/models/note'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { title, body } = await request.json();
    await connectMongoDB();
    await Note.create({ title, body });
    return NextResponse.json({ message: 'Note created' }, {status: 200});
}

export async function GET() {
    await connectMongoDB();
    const notes = await Note.find().sort({ createdAt: -1 }).limit(12);
    return NextResponse.json({ notes });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Note deleted' }, { status: 200});
}
