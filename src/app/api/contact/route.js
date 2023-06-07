import { NextResponse } from 'next/server';


export async function GET() {

    let data = {
        "Hello" : "World"
    }

    return NextResponse.json(data);
}

export async function POST(request) {

    const body = await request.json();

    return NextResponse.json({"success" : body});

}