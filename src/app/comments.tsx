interface CommentsProps {
  comments: string[];
}
export default function Comments({ comments }: CommentsProps) {
  return (
    <div className="pt-10">
      {comments.map((comment) => (
        <div>{comment}</div>
      ))}
    </div>
  );
}
