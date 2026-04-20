
import { users } from "./users"
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json({ users })

    console.log(users);
}

