import { connectMongoDB } from "@/lib/mongodb";
import Timer from "@/models/timer";
import { NextResponse } from "next/server";

// Define a function to set CORS headers
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.saioren.io');
  // You can also set other CORS headers like Access-Control-Allow-Methods, etc.
}

export async function PUT(request, { params }, response) {
    // Set CORS headers
    setCorsHeaders(response);

    const { id } = params;
    const { newSeconds: seconds, newMinutes: minutes, newHours: hours, newWeeklyTime: weeklyHours } = await request.json();
    await connectMongoDB();
    await Timer.findByIdAndUpdate(id, { seconds, minutes, hours, weeklyHours });
    return NextResponse.json({ message: 'Entry updated' }, { status: 200 });
}

export async function GET(request, { params }, response) {
    // Set CORS headers
    setCorsHeaders(response);

    const { id } = params;
    await connectMongoDB();
    const timer = await Timer.findOne({ _id: id });
    return NextResponse.json({ timer }, { status: 200 });
}
