import db from "@/src/db/config";
import { users, UserSelect } from "@/src/db/schema";
import { RegisterForm } from "@/app/ui/RegisterForm";
import { LoginForm } from "./ui/LoginForm";

export default async function Home() {
  let allUsers: Omit<UserSelect, "password">[];

  try {
    allUsers = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        createdAt: users.createdAt,
      })
      .from(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    allUsers = [];
  }

  return (
    <div className="bg-orange-300 m-6 p-4 text-gray-950 flex flex-col items-center gap-4">
      <div>{JSON.stringify(allUsers, null, 2)}</div>

      <div className="flex flex-col gap-6">
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  );
}
