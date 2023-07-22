"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface InputProps {
  addComment: (comment: string) => void;
  removeLastComment: () => void;
}

export function CommentForm({ addComment, removeLastComment }: InputProps) {
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    if (comment != "") {
      addComment(comment);
      toast({
        title: "🎉 Comment successfully submitted",
      });
    } else {
      toast({
        title: "❌ Write a comment before pressing send",
      });
    }
    setComment("");
  };

  const handleRemove = () => {
    removeLastComment();
    toast({
      title: "🎉 Last comment successfully deleted",
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <Textarea
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="Enter your amazing ideas"
        className="min-h-[80px] w-full max-w-xl h-48 resize-none"
      />
      <div className="flex gap-4 pt-2">
        <Button variant="outline" onClick={() => handleSend()}>
          Send
        </Button>
        <Button variant="destructive" onClick={() => handleRemove()}>
          Delete last comment
        </Button>
      </div>
    </div>
  );
}
