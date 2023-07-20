import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await kv.hgetall("mykey");
  console.log("Data: ", data);
  return NextResponse.json(data);
}
