import { getList, pushToList } from "@/lib/data";
import { revalidatePath } from "next/cache";
import { CommentForm } from "./components/comment-form";
import { Comments } from "./components/comments";

const LIST_KEY = "comments";

async function sendData(data: string) {
  "use server";
  await pushToList(LIST_KEY, data);
  revalidatePath("/");
}

export default async function Home() {
  const comments = await getList(LIST_KEY);
  return (
    <main className="flex flex-col p-24 items-center">
      <h1 className="text-3xl text-center py-4">Leave a comment</h1>
      <CommentForm sendData={sendData} />
      <Comments comments={comments} />
    </main>
  );
}
