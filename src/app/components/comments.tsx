"use client";

import { Card } from "@/components/ui/card";

export interface CommentData {
  id: string;
  comment: string;
  timeStamp: string;
}
interface CommentsProps {
  comments: CommentData[];
}
export function Comments({ comments }: CommentsProps) {
  return (
    <div className="flex flex-col items-center gap-2 pt-10 w-full">
      {comments.map((comment, index) => (
        <Card key={index} className="w-full max-w-md">
          {comment.comment}
          <div className="pt-2 text-end text-gray-500">{comment.timeStamp}</div>
        </Card>
      ))}
    </div>
  );
}
