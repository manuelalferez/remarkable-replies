import { Card } from "@/components/ui/card";

export interface Comment {
  comment: string;
  timeStamp: string;
}
interface CommentsProps {
  comments: Comment[];
}
export function Comments({ comments }: CommentsProps) {
  console.log(comments);
  return (
    <div className="flex flex-col items-center gap-2 pt-10 w-full">
      {comments.map((comment, index) => (
        <Card key={index} className="w-full max-w-md">
          {comment.comment}
          <div className="pt-2 text-end text-gray-500">
            {comment.timeStamp ?? ""}
          </div>
        </Card>
      ))}
    </div>
  );
}
