import { GET, SET } from "@/lib/data";
import Input from "./input";

async function sendData(data: string) {
  "use server";
  await SET(data);
}

export default function Home() {
  const comments = GET();
  console.log("Comments: ", comments);
  return (
    <main className="flex flex-col p-24 items-center">
      <h1 className="text-3xl text-center py-4">Leave a comment</h1>
      <Input sendData={sendData} />
    </main>
  );
}
