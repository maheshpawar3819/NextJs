import { NextResponse } from "next/server";

export async function GET() {
    const data={message:"hello this is get api"}
    return NextResponse.json(data,{status:200});
}