"use client";

import { registerUser } from "@/app/actions/auth";
import { useActionState } from "react";
import { SubmitButton } from "./SubmitButton";

export function RegisterForm() {
  const [state, action] = useActionState(registerUser, undefined);
  return (
    <form
      className="flex flex-col space-y-4 bg-orange-200 p-3 rounded-md w-full items-center"
      action={action}
    >
      <div className="w-full flex items-center justify-center gap-6">
        <label htmlFor="name">Username</label>
        <input id="name" type="text" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && (
        <p className="text-red-500">{state.errors.name}</p>
      )}
      <div className="w-full flex items-center justify-center gap-6">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}
      <div className="w-full flex items-center justify-center gap-6">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
      <SubmitButton type="register" />
    </form>
  );
}
