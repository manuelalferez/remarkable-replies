import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex flex-col p-24 items-center">
      <h1 className="text-2xl text-center py-4">Leave a comment</h1>
      <Textarea />
    </main>
  );
}
