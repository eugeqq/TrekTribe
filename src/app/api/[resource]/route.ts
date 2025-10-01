import { NextResponse } from 'next/server';
import { defaultHandler } from 'ra-data-simple-prisma';
import prisma from "../../../server/prisma/db";
;

const handler =async(req:Request)=>{
    const body = await req.json();
    const result = await defaultHandler(body,prisma);
    return NextResponse.json(result);
}

export { handler as GET, handler as POST };
