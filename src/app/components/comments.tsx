interface CommentsProps {
  comments: string[];
}
export function Comments({ comments }: CommentsProps) {
  return (
    <div className="pt-10">
      {comments.map((comment, index) => (
        <div key={index} className="">
          {comment}
        </div>
      ))}
    </div>
  );
}
