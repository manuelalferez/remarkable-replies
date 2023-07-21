import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getList, pushToList } from "@/lib/data";
import { revalidatePath } from "next/cache";
import { CommentForm } from "./components/comment-form";
import { CommentData, Comments } from "./components/comments";

const LIST_KEY = "comments";

async function sendData(data: string) {
  "use server";
  await pushToList(LIST_KEY, data);
  revalidatePath("/");
}

export default async function Home() {
  const comments = (await getList(LIST_KEY)) as unknown as CommentData[];
  return (
    <main className="flex flex-col p-24 md:p-12 sm:p-6 items-center">
      <h1 className="text-3xl text-center py-4">Leave a comment</h1>
      <CommentForm sendData={sendData} />
      {comments.length ? (
        <Comments comments={comments} />
      ) : (
        <Alert className="mt-10 w-full max-w-md">
          <AlertTitle>No comments yet</AlertTitle>
          <AlertDescription>
            Hey, there&apos;s an opportunity for you to claim the prestigious
            title of &apos;First Commentator&apos; to this hilarious party! Step
            right up and make history with your witty addition!
          </AlertDescription>
        </Alert>
      )}
    </main>
  );
}
