import { NextResponse } from 'next/server'

export async function POST(request) {

    const res = await request.json()
    console.log("@@@=>", res)
    // console.log(request)
    return NextResponse.json({ a: 1 })
}