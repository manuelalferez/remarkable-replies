import "server-only";

import { kv } from "@vercel/kv";
import { getTimeStamp } from "./utils";

export async function pushToList(key: string, comment: string) {
  const timeStamp = getTimeStamp();
  await kv.lpush(key, { comment, timeStamp });
}

export async function getList(key: string) {
  const list = await kv.lrange(key, 0, -1);
  return list;
}
