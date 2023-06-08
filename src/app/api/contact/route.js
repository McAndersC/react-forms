import { NextResponse } from 'next/server';
import contactModel from '@/lib/models/contact.model';
import dbConnect from '@/lib/dbConnect';

export async function GET() {

    await dbConnect();
    return contactModel.find({}).then( (response) => {

        return NextResponse.json(response);
        
    } )

   
}

export async function POST(request) {


    const body = await request.json();
    
    await dbConnect();
    return contactModel.create(body).then( (response) => {
        
        return NextResponse.json({"success" : response});

    })

  

}