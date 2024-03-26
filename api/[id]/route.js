import { BaseNextResponse } from "next/dist/server/base-http";
import connectMongoDB from "../../lib/mongodb";
import Note from "../../models/note";

export async function PUT (request, {params}) {
    const {id} = params;
    const {newTitle: title, newBody: body} = await request.json(); 
    await connectMongoDB();
    await Note.findByIdAndUpdate(id, {title, body});
    return BaseNextResponse.json({message: 'Note updated'}, {status: 200})
}

export async function GET  (request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const topic = await Note.findOne({_id: id})
    return BaseNextResponse.json({topic}, {status: 200})
}