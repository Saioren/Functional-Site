import { connectMongoDB } from "../../../lib/mongodb";
import Timer from "../../../models/timer";
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { hours, minutes, seconds, entryName, weeklyHours } = await request.json();
    await connectMongoDB();
    await Timer.create({ hours, minutes, seconds, entryName, weeklyHours });
    return NextResponse.json({ message: 'Timer created' }, { status: 200 });
}

export async function GET() {
    await connectMongoDB();
    const timers = await Timer.find().sort({ createdAt: -1 });
    return NextResponse.json({ timers });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Timer.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Timer deleted' }, { status: 200 });
}
