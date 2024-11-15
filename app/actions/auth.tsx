"use server";
import db from "@/src/db/config";
import { RegisterFormSchema, RegisterFormState } from "@/app/lib/definitions";
import bcrypt from "bcryptjs";
import { users } from "@/src/db/schema";
import { createSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function registerUser(
  state: RegisterFormState,
  formData: FormData
) {
  const validateForm = RegisterFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateForm.success) {
    return { errors: validateForm.error.flatten().fieldErrors };
  }

  const { name, email, password } = validateForm.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    return { message: "An error occurred while creating your account." };
  }

  await createSession(user.id);

  redirect("/");
}
