import { connectMongoDB } from '@/lib/mongodb';
import Note from '@/models/note';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { title, body } = await request.json();
    await connectMongoDB();
    await Note.create({ title, body });
    return NextResponse.json({ message: 'Note created' }, { status: 200 });
  } catch (error) {
    console.error('Error creating note:', error);
    return NextResponse.error(error);
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();
    const notes = await Note.find().sort({ createdAt: -1 }).limit(12);
    return NextResponse.json({ notes });
  } catch (error) {
    console.error('Error fetching notes:', error);
    return NextResponse.error(error);
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Note deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting note:', error);
    return NextResponse.error(error);
  }
}
