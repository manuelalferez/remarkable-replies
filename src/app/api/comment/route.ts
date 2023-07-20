import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  const list = await kv.lrange("comments", 0, -1);
  console.log("Data: ", list);
  return NextResponse.json(list);
}
