import Input from "./input";
import { kv } from "@vercel/kv";

export default function Home() {
  async function sendData(data: string) {
    await kv.set("user_1_session", data);
    const session = await kv.get("user_1_session");
    console.log("Data storage: ", session);
  }
  return (
    <main className="flex flex-col p-24 items-center">
      <h1 className="text-3xl text-center py-4">Leave a comment</h1>
      <Input sendData={sendData} />
    </main>
  );
}
