import "server-only";

import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function SET(data: string) {
  await kv.lpush("data", data);
  const session = await kv.get("data");
  console.log("Data storage: ", session);
}

export async function GET() {
  const user = await kv.hgetall("user:me");
  console.log("Data getted: ", user);
  return NextResponse.json(user);
}
