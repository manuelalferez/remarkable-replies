import { Card } from "@/components/ui/card";

interface CommentsProps {
  comments: string[];
}
export function Comments({ comments }: CommentsProps) {
  return (
    <div className="flex flex-col gap-2 pt-10">
      {comments.map((comment, index) => (
        <Card key={index} className="">
          {comment}
        </Card>
      ))}
    </div>
  );
}
