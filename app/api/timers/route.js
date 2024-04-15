import { connectMongoDB } from "../../../lib/mongodb";
import Timer from "../../../models/timer";
import { NextResponse } from 'next/server';
import { startOfWeek, endOfWeek } from 'date-fns';
import cors from '../cors'

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

export async function GET() {

    await connectMongoDB();
    
    const currentDate = new Date();
    const startOfCurrentWeek = startOfWeek(currentDate);
    const endOfCurrentWeek = endOfWeek(currentDate);
    
    const timers = await Timer.find({
        createdAt: { $gte: startOfCurrentWeek, $lte: endOfCurrentWeek }
    }).sort({ createdAt: -1 }).limit(10); 

    const totalWeeklyHours = timers.reduce((total, timer) => total + timer.weeklyHours, 0);
    
    return NextResponse.json({ timers, totalWeeklyHours });
}

export async function POST(req) {

    const { hours, minutes, seconds, entryName, weeklyHours } = await req.json();
    await connectMongoDB();
    const totalHours = await Timer.aggregate([
        {
            $group: {
                _id: null,
                total: { $sum: "$weeklyHours" }
            }
        }
    ]);

    const totalHoursValue = totalHours.length > 0 ? totalHours[0].total : 0;

    await Timer.create({ hours, minutes, seconds, entryName, weeklyHours, totalHours: totalHoursValue + weeklyHours });
    return NextResponse.json({ message: 'Timer created' }, { status: 200 });
}

export async function DELETE(req) {

    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Timer.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Timer deleted' }, { status: 200 });
}
