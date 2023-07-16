"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface InputProps {
  sendData: (data: string) => void;
}

export default function Input({ sendData }: InputProps) {
  const [inputData, setInputData] = useState("");

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <Textarea
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
        placeholder="Enter your amazing ideas"
      />
      <Button variant="outline" onClick={() => sendData(inputData)}>
        Send
      </Button>
    </div>
  );
}
