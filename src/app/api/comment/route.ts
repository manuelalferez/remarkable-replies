import { KEY } from "@/app/page";
import { getComments } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const list = await getComments(KEY);
  return NextResponse.json(list);
}
