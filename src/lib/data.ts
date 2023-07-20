import "server-only";

import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function pushToList(key: string, ele: string) {
  await kv.lpush(key, ele);
  const list = await kv.lrange(key, 0, -1);
  console.log("Pushing element in List: ", list);
}

export async function getList(key: string) {
  const list = await kv.lrange(key, 0, -1);
  console.log("List: ", list);
  return list;
}
