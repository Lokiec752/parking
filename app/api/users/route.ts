import { NextResponse } from "next/server";
import db from "@/src/db/config";
import { users } from "@/src/db/schema";

export async function GET() {
  try {
    const allUsers = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        createdAt: users.createdAt,
      })
      .from(users);
    return NextResponse.json(allUsers);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// TODO: Fix

// export async function POST(request: Request) {
//   try {
//     const { name, email } = await request.json();
//     const [newUser] = await db
//       .insert(users)
//       .values({ name, email })
//       .returning();
//     return NextResponse.json(newUser);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to create user" },
//       { status: 500 }
//     );
//   }
// }
