import db from "@/src/db/config";
import { users } from "@/src/db/schema";

type ErrorWithMessage = Error & { message: string };

export default async function Home() {
  const allUsers = await db.select().from(users);

  return <pre>{JSON.stringify(allUsers, null, 2)}</pre>;
}
