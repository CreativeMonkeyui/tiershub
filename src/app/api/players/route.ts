import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Player from "@/models/Player";

export async function GET() {
  try {
    console.log("CONNECTING DB...");

    await connectDB();

    console.log("DB CONNECTED");

    const players = await Player.find({});

    console.log("PLAYERS:", players);

    return NextResponse.json(players);
  } catch (error: any) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}