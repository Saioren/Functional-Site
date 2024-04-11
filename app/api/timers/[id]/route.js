import { connectMongoDB } from "@/lib/mongodb";
import Timer from "@/models/timer";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {

    const { id } = params;
    const { newSeconds: seconds, newMinutes: minutes, newHours: hours, newWeeklyTime: weeklyHours } = await request.json();
    await connectMongoDB();
    await Timer.findByIdAndUpdate(id, { seconds, minutes, hours, weeklyHours });
    return NextResponse.json({ message: 'Entry updated' }, { status: 200 });
}

export async function GET(request, { params }) {

    const { id } = params;
    await connectMongoDB();
    const timer = await Timer.findOne({ _id: id });
    return NextResponse.json({ timer }, { status: 200 });
}
