import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Toaster } from "@/components/ui/toaster";
import { getComments, setComment, delLastComment } from "@/lib/data";
import { revalidatePath } from "next/cache";
import { CommentForm } from "./components/comment-form";
import { CommentData, Comments } from "./components/comments";

export const KEY = "comments";

async function addComment(comment: string) {
  "use server";
  await setComment(KEY, comment);
  revalidatePath("/");
}

async function removeLastComment() {
  "use server";
  await delLastComment(KEY);
  revalidatePath("/");
}

export default async function Home() {
  const comments = (await getComments(KEY)) as unknown as CommentData[];
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-3xl text-center py-4 md:py-12">Leave a comment</h1>
      <CommentForm
        addComment={addComment}
        removeLastComment={removeLastComment}
      />
      {comments.length ? (
        <Comments comments={comments} />
      ) : (
        <Alert className="mt-10 w-full max-w-md">
          <AlertTitle>No comments yet</AlertTitle>
          <AlertDescription>Be the first to leave a comment</AlertDescription>
        </Alert>
      )}
      <Toaster />
    </main>
  );
}
