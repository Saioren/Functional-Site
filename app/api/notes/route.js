import { connectMongoDB } from '@/lib/mongodb';
import Note from '@/models/note';
import { NextResponse } from 'next/server';
import cors from '../cors';

export default async function handler(req, res) {
  cors(req, res);

  if (req.method === 'POST') {
    return POST(req);
  } else if (req.method === 'GET') {
    return GET(req);
  } else if (req.method === 'DELETE') {
    return DELETE(req);
  } else {
    return NextResponse.error(new Error('Unsupported HTTP method'));
  }
}

export async function POST(req) {
  try {
    const { title, body } = await req.json();
    await connectMongoDB();
    await Note.create({ title, body });
    return NextResponse.json({ message: 'Note created' }, { status: 200 });
  } catch (error) {
    console.error('Error creating note:', error);
    return NextResponse.error(error);
  }
}

export async function GET(req) {
  try {
    await connectMongoDB();
    const notes = await Note.find().sort({ createdAt: -1 }).limit(12);
    return NextResponse.json({ notes });
  } catch (error) {
    console.error('Error fetching notes:', error);
    return NextResponse.error(error);
  }
}

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Note deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting note:', error);
    return NextResponse.error(error);
  }
}
