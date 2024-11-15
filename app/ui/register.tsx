"use client";

import { registerUser } from "@/app/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

export function RegisterForm() {
  const [state, action] = useFormState(registerUser, undefined);
  return (
    <form className="flex flex-col space-y-4" action={action}>
      <div>
        <label htmlFor="name">Username</label>
        <input id="name" type="text" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && <p>{state.errors.password}</p>}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading..." : "Register"}
    </button>
  );
}
