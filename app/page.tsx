import db from "@/src/db/config";
import { users, UserSelect } from "@/src/db/schema";

export default async function Home() {
  let allUsers: UserSelect[];

  try {
    allUsers = await db.select().from(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    allUsers = [];
  }

  return <div>{JSON.stringify(allUsers, null, 2)}</div>;
}
