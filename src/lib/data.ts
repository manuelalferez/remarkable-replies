import "server-only";

import { kv } from "@vercel/kv";
import { getTimeStamp } from "./utils";

export async function setComment(key: string, comment: string) {
  const timeStamp = getTimeStamp();
  const id = new Date().valueOf().toString();
  await kv.lpush(key, { id, comment, timeStamp });
}

export async function getComments(key: string) {
  const comments = await kv.lrange(key, 0, -1);
  return comments;
}

export async function delLastComment(key: string) {
  await kv.lpop(key);
}
